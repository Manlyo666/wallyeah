# Come pubblicare WallYeah

Guida per mettere l'app online su GitHub Pages. Serve solo un browser: niente da installare.

---

## 1. Crea il repository

1. Vai su [github.com/new](https://github.com/new)
2. **Repository name**: `wallyeah`
3. **Public** (deve esserlo: GitHub Pages gratis funziona solo sui repo pubblici)
4. Non spuntare nulla ("Add a README", ecc.): i file li carichi tu
5. **Create repository**

## 2. Carica i file

Nella pagina che appare, clicca **uploading an existing file**.

Trascina tutto il contenuto della cartella, **mantenendo la struttura**:

```
index.html
sw.js
manifest.webmanifest
README.md
LICENSE
.gitignore
.nojekyll
icone/
  ├── icona-192.png
  ├── icona-512.png
  └── icona-512-maskable.png
```

⚠️ La cartella `icone/` va caricata come cartella, non i file sciolti. Se trascini l'intera
cartella dal computer, GitHub mantiene la struttura da solo.

Scrivi un messaggio (es. "prima versione") e premi **Commit changes**.

## 3. Accendi GitHub Pages

1. Nel repository: **Settings** → **Pages** (menu a sinistra)
2. **Source**: *Deploy from a branch*
3. **Branch**: `main` — cartella `/ (root)`
4. **Save**

Aspetta 1-2 minuti. In cima alla pagina comparirà l'indirizzo:

```
https://TUONOME.github.io/wallyeah/
```

## 4. Sistema i link nel README

Il `README.md` è in inglese (il repository è pubblico, lo legge chiunque). Dentro ci sono
due `USERNAME` da sostituire col tuo nome utente GitHub: il link per aprire l'app e quello
per le segnalazioni.
Puoi modificarlo direttamente online: apri il file → icona matita → sostituisci → Commit.

## 5. Provala

Apri l'indirizzo dal telefono. Se funziona:

- **Android/Chrome**: menu ⋮ → *Installa app*
- **iPhone/Safari**: Condividi → *Aggiungi a Home*

L'icona comparirà tra le app. Da lì in poi si aggiorna da sola.

---

## Rilasciare una versione nuova

Quando l'app cambia, **due numeri vanno tenuti allineati**, altrimenti i tester non
ricevono l'aggiornamento:

1. In `index.html` → `const APP_VERSION = "1.0.1";`
2. In `sw.js` → `const VERSIONE = '1.0.1';`

**Devono essere identici.** È il numero che dice al browser "questo è nuovo, riscarica".
Se te ne dimentichi, i tester continuano a vedere la versione vecchia senza accorgersene.

Poi ricarica i due file su GitHub (stessa procedura del punto 2, sovrascrive i vecchi).
Entro qualche minuto i tester vedranno la barra "È disponibile una versione aggiornata".

### Come ragionare sui numeri

`MAGGIORE.MINORE.CORREZIONE` — es. `1.2.3`

- **CORREZIONE** (1.0.0 → 1.0.1): hai sistemato un bug
- **MINORE** (1.0.1 → 1.1.0): hai aggiunto qualcosa
- **MAGGIORE** (1.1.0 → 2.0.0): hai cambiato le carte in tavola (es. il formato dei dati)

---

## Per il betatest

**Cosa dire ai tester:**

> Apri `https://TUONOME.github.io/wallyeah/` e installala (menu del browser → Installa app).
> I tuoi dati restano sul tuo telefono, non li vedo e non li vede nessuno.
> Fai un backup ogni tanto da Impostazioni → Backup completo: se svuoti i dati del browser,
> il portafoglio sparisce.
> Se trovi un problema scrivimi cosa è successo, cosa ti aspettavi, e che telefono usi.

**Cosa NON dire loro di fare:**
- Non chiedere mai il loro file di backup: contiene i loro importi reali.
- Se serve riprodurre un bug, chiedi un backup con dati finti.

## ⚠️ L'errore più facile da fare

**Carica il contenuto dello zip, non `WallYeah.html`.**

`WallYeah.html` è la versione a file singolo, che funziona da sola ma **non è una PWA**:
non ha accanto `sw.js` né `manifest.webmanifest`, quindi Chrome non la riconosce come
app installabile. Se la carichi al posto di `index.html` succede esattamente questo:

- l'icona non compare (Chrome ne inventa una col carattere iniziale)
- si installa come semplice scorciatoia, e **la barra degli indirizzi resta visibile**
- niente aggiornamenti automatici

Il file che va su GitHub si chiama **`index.html`** e sta dentro lo zip, insieme a `sw.js`,
`manifest.webmanifest` e alla cartella `icone/`. Servono tutti.

## Se qualcosa non va

**La pagina dà 404** → Pages non è ancora attivo, o hai scelto la cartella sbagliata (deve
essere `/ (root)`). Aspetta 2 minuti e ricarica.

**L'app si apre ma non si installa / si vede la barra di Chrome / manca l'icona**
→ Nel 99% dei casi hai caricato `WallYeah.html` invece del contenuto dello zip (vedi sopra).
Controlla che questi tre indirizzi rispondano, senza 404:

- `https://TUONOME.github.io/wallyeah/manifest.webmanifest` → deve mostrare del testo JSON
- `https://TUONOME.github.io/wallyeah/sw.js` → deve mostrare del codice
- `https://TUONOME.github.io/wallyeah/icone/icona-192.png` → deve mostrare l'icona

Se uno dà 404, quel file non è stato caricato o è nella cartella sbagliata.

**Come installare davvero su Android**: apri il sito, vai in **Impostazioni → Installa l'app**
e premi il pulsante. In alternativa il menu ⋮ di Chrome deve dire **"Installa app"**.
Se dice solo *"Aggiungi a schermata Home"*, Chrome non la riconosce come PWA: rileggi sopra.

**Verifica tecnica**: da Chrome su computer, apri il sito → F12 → scheda *Application* →
*Manifest*. Se ci sono errori li elenca lì.

**Ho aggiornato ma i tester vedono il vecchio** → hai cambiato `APP_VERSION` ma non
`VERSIONE` in `sw.js` (o viceversa). Devono coincidere.

**Voglio togliere tutto** → Settings → Pages → Source: *None*. Il sito sparisce, il codice resta.
