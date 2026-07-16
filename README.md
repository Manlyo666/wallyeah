# WallYeah

Un'app per tenere traccia del proprio portafoglio di investimenti: azioni, ETF, fondi,
obbligazioni, titoli di stato, crypto, liquidità e categorie personalizzate.

**I dati restano sul tuo dispositivo.** Nessun account, nessun server, niente da registrare.
WallYeah non raccoglie nulla e non manda niente da nessuna parte.

## Provala

👉 **[Apri WallYeah](https://USERNAME.github.io/wallyeah/)**

Per usarla come una vera app (anche senza connessione):

- **Android / Chrome** — menu ⋮ → *Installa app* (o *Aggiungi a schermata Home*)
- **iPhone / Safari** — tasto Condividi → *Aggiungi a Home*
- **Computer** — l'icona di installazione nella barra degli indirizzi

Una volta installata si aggiorna da sola: quando c'è una versione nuova compare una barra
in basso, premi *Aggiorna* e sei a posto.

## Cosa fa

- **Otto tipi di scheda**, ognuno col suo modo di calcolare: quantità × prezzo per azioni,
  ETF, fondi e crypto; importo + rendimento per obbligazioni e titoli di stato; saldo per
  la liquidità.
- **Cedole** con cadenza (mensile, trimestrale, semestrale, annuale) e tasso a scaglioni
  per i titoli step-up. Sono informative: non vengono sommate al patrimonio.
- **Istantanee** dei valori, per costruire lo storico che alimenta i grafici.
- **Grafici** a linea e a candela, con valore, guadagno, quote e rendimento per anno solare.
- **Export in Excel** (.xlsx) su due fogli: per voce e per data.
- **Backup** completo in JSON, da salvare dove vuoi.

## Come è fatta

Un solo file HTML, senza librerie né dipendenze. Tutto il codice è in `index.html`:
niente build, niente npm, niente framework. Si può aprire anche direttamente dal disco
(in quel caso però non si aggiorna da sola).

| File | A cosa serve |
|---|---|
| `index.html` | L'app: interfaccia, calcoli, grafici, export |
| `sw.js` | Fa funzionare l'app offline e gestisce gli aggiornamenti |
| `manifest.webmanifest` | Dice al telefono come installarla |
| `icone/` | Icone per la schermata Home |

I dati vivono nel `localStorage` del browser, sotto la chiave `portafoglio_v4`.

## Privacy

- I dati **non escono mai** dal dispositivo: niente account, niente sincronizzazione, niente analytics.
- L'unica richiesta esterna è per i font di Google e, se l'app è installata, il controllo
  della versione — che scarica solo il file dell'app, senza mandare informazioni.
- Il **backup** è un file che scarichi tu e tieni dove vuoi.
- Svuotando i dati del browser si cancella anche il portafoglio: **fai backup regolari.**

## Segnalare un problema

Apri una [issue](https://github.com/USERNAME/wallyeah/issues) descrivendo cosa è successo,
cosa ti aspettavi, e su quale dispositivo/browser. Se puoi, allega un backup con dati finti
che riproduca il problema — **mai il tuo backup vero**, contiene i tuoi importi.

## Licenza

[MIT](LICENSE) — fanne quello che vuoi, ma senza garanzie.

---

WallYeah non è un consulente finanziario: è un quaderno dove segni i tuoi numeri.
Le cifre che mostra valgono quanto quelle che ci inserisci.
