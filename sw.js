// =========================================================
// WallYeah — service worker
//
// Fa due cose:
//  1. tiene una copia dell'app nel dispositivo, così funziona senza rete
//  2. controlla se online c'è una versione nuova e la installa
//
// IMPORTANTE: a ogni rilascio va cambiato VERSIONE (deve corrispondere ad APP_VERSION
// dentro index.html). Il nome della cache la contiene: cambiando numero, il browser
// considera tutto nuovo e riscarica invece di riusare i file vecchi.
// =========================================================

const VERSIONE = '1.3.0';
const CACHE = 'wallyeah-v' + VERSIONE;

// I file che compongono l'app. Non serve elencare altro: WallYeah è autosufficiente
// (niente librerie esterne), tranne i font di Google che vengono gestiti a parte.
const FILE_APP = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icone/icona-192.png',
  './icone/icona-512.png',
  './icone/icona-512-maskable.png'
];

// --- INSTALLAZIONE: scarico e metto da parte i file dell'app
self.addEventListener('install', (ev)=>{
  ev.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(FILE_APP))
      // skipWaiting: la versione nuova prende il posto della vecchia senza aspettare
      // che l'utente chiuda tutte le schede
      .then(() => self.skipWaiting())
  );
});

// --- ATTIVAZIONE: butto via le versioni precedenti
self.addEventListener('activate', (ev)=>{
  ev.waitUntil(
    caches.keys()
      .then(nomi => Promise.all(
        nomi.filter(n => n.startsWith('wallyeah-v') && n !== CACHE)
            .map(n => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

// --- RICHIESTE
// Strategia "prima la rete, poi la copia locale" per il documento dell'app: così chi ha
// rete vede subito la versione aggiornata, e chi non ce l'ha usa la copia salvata.
// Per tutto il resto (icone, font) prima la copia locale: sono file che non cambiano.
self.addEventListener('fetch', (ev)=>{
  const req = ev.request;
  if(req.method !== 'GET') return;

  const url = new URL(req.url);
  const eDocumento = req.mode === 'navigate' ||
                     (req.destination === 'document') ||
                     url.pathname.endsWith('/index.html');

  if(eDocumento){
    ev.respondWith(
      fetch(req)
        .then(res=>{
          const copia = res.clone();
          caches.open(CACHE).then(c=> c.put('./index.html', copia));
          return res;
        })
        .catch(()=> caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  // font di Google e altri file esterni: uso la copia se c'è, altrimenti scarico e salvo
  ev.respondWith(
    caches.match(req).then(hit=>{
      if(hit) return hit;
      return fetch(req).then(res=>{
        // salvo solo le risposte valide, e solo di file nostri o dei font
        if(res && res.status === 200 && (url.origin === self.location.origin || /fonts\.(googleapis|gstatic)\.com/.test(url.host))){
          const copia = res.clone();
          caches.open(CACHE).then(c=> c.put(req, copia));
        }
        return res;
      }).catch(()=> hit);
    })
  );
});

// --- MESSAGGI dalla pagina
// La pagina può chiedere quale versione sta girando, o forzare il passaggio a quella nuova.
self.addEventListener('message', (ev)=>{
  if(!ev.data) return;
  if(ev.data.tipo === 'versione'){
    ev.source.postMessage({ tipo:'versione', versione: VERSIONE });
  }
  if(ev.data.tipo === 'aggiorna'){
    self.skipWaiting();
  }
});
