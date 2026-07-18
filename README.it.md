# WallYeah

*[🇬🇧 Read in English](README.md)*

Un'app per tenere d'occhio quello che possiedi davvero: azioni, ETF, fondi, obbligazioni,
titoli di Stato, crypto, liquidità e qualunque altra cosa tu voglia seguire.

**I tuoi dati non escono mai dal dispositivo.** Nessun account, nessun server, niente
registrazione. WallYeah non raccoglie nulla e non manda niente da nessuna parte.

## Provala

👉 **[Apri WallYeah](https://Manlyo666.github.io/wallyeah/)**

L'interfaccia è disponibile in **italiano e inglese**: scegli la lingua al primo avvio,
e puoi cambiarla quando vuoi da *Impostazioni → Lingua*.

Per usarla come una vera app (anche senza connessione):

- **Android / Chrome** — menu ⋮ → *Installa app*
- **iPhone / Safari** — tasto Condividi → *Aggiungi a Home*
- **Computer** — l'icona di installazione nella barra degli indirizzi

Oppure, una volta aperta: **Impostazioni → Installa l'app**.

Da installata si aggiorna da sola: quando esce una versione nuova compare una barra in
basso, premi *Aggiorna* ed è fatta.

## Cosa fa

- **Otto tipi di scheda**, ognuno col suo modo di fare i conti: quantità × prezzo per
  azioni, ETF, fondi e crypto; importo + rendimento per obbligazioni e titoli di Stato;
  saldo per la liquidità.
- **Cedole** con cadenza (mensile, trimestrale, semestrale, annuale) e tasso a scaglioni
  per i titoli step-up. Sono solo informative: non vengono sommate al patrimonio.
- **Istantanee** dei tuoi valori, che costruiscono lo storico su cui girano i grafici.
- **Grafici** a linea e a candela: valore, guadagno, quote, o rendimento per anno solare.
- **Export in Excel** (.xlsx) su due fogli: una riga per titolo, oppure una per data.
- **Backup** completo in un file JSON che tieni dove vuoi.

## Com'è fatta

Un solo file HTML, senza librerie né dipendenze. Tutto sta in `index.html`: niente build,
niente npm, niente framework. Si può aprire anche direttamente dal disco — in quel caso
però non si aggiorna da sola.

| File | A cosa serve |
|---|---|
| `index.html` | L'app: interfaccia, calcoli, grafici, export |
| `sw.js` | Fa funzionare l'app offline e gestisce gli aggiornamenti |
| `manifest.webmanifest` | Dice al telefono come installarla |
| `icone/` | Icone per la schermata Home |

I dati vivono nel `localStorage` del browser, sotto la chiave `portafoglio_v4`.

## Privacy

- I dati **non escono mai** dal dispositivo: niente account, niente sincronizzazione,
  niente analytics.
- Le uniche richieste esterne sono per i font di Google e, se installata, il controllo
  della versione — che scarica il file dell'app e non manda niente su di te.
- Il **backup** è un file che scarichi tu e tieni dove vuoi.
- Svuotando i dati del browser sparisce anche il portafoglio: **fai backup regolari.**

## Segnalare un problema

Dall'app: **Impostazioni → Segnala un problema**. Si apre il programma di posta con la
versione e i dati del dispositivo già compilati. Se la posta non si apre (succede in
alcuni contenitori WebView per Android), usa *Copia testo e indirizzo* e incolla tutto in
una mail scritta a mano.

Oppure apri una [issue](https://github.com/Manlyo666/wallyeah/issues) raccontando cosa è
successo, cosa ti aspettavi, e con che dispositivo e browser. Se puoi, allega un backup
con dati finti che riproduca il problema — **mai quello vero**, contiene i tuoi importi.

## Novità

Vedi [CHANGELOG.it.md](CHANGELOG.it.md). Nell'app la cronologia completa è in
**Impostazioni → Novità di questa versione**, e un riepilogo compare da solo dopo ogni
aggiornamento.

## Licenza

[MIT](LICENSE) — fanne quello che vuoi, senza garanzie di alcun tipo.

---

WallYeah non è un consulente finanziario: è un quaderno dove segni i tuoi numeri. Quello
che ti mostra vale quanto quello che ci metti dentro.
