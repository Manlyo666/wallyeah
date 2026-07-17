# WallYeah

*[🇮🇹 Leggi in italiano](README.it.md)*

A portfolio tracker for the things you actually own: stocks, ETFs, funds, bonds,
government bonds, crypto, cash, and whatever else you want to keep an eye on.

**Your data never leaves your device.** No account, no server, no sign-up. WallYeah
collects nothing and sends nothing anywhere.

The interface is available in **English and Italian**. You pick the language when you
first open the app, and you can change it any time from *Settings → Language*.

## Try it

👉 **[Open WallYeah](https://Manlyo666.github.io/wallyeah/)**

To use it as a real app (offline included):

- **Android / Chrome** — menu ⋮ → *Install app*
- **iPhone / Safari** — Share button → *Add to Home Screen*
- **Desktop** — the install icon in the address bar

Or, once it's open: **Settings → Install the app**.

Once installed it updates itself: when a new version is out, a bar shows up at the
bottom, you tap *Update*, and that's it.

## What it does

- **Eight kinds of tab**, each with its own way of doing the math: quantity × price for
  stocks, ETFs, funds and crypto; amount + yield for bonds and government bonds; plain
  balance for cash.
- **Coupons** with a schedule (monthly, quarterly, half-yearly, yearly) and step-up
  rates for tiered bonds. They're informational only — never added to the portfolio value.
- **Snapshots** of your figures, which build the history the charts run on.
- **Charts**: line and candlestick, showing value, gain, units held, or return per
  calendar year.
- **Excel export** (.xlsx) with two sheets: one row per holding, or one row per date.
- **Full backup** as a JSON file you keep wherever you like.

## How it's built

One HTML file, no libraries, no dependencies. Everything lives in `index.html`: no build
step, no npm, no framework. You can even open it straight from disk — though it won't
update itself that way.

| File | What it's for |
|---|---|
| `index.html` | The app: interface, math, charts, export |
| `sw.js` | Makes it work offline and handles updates |
| `manifest.webmanifest` | Tells the phone how to install it |
| `icone/` | Home screen icons |

Data lives in the browser's `localStorage` under the key `portafoglio_v4`.

## Privacy

- Your data **never leaves the device**: no accounts, no sync, no analytics.
- The only outside requests are for Google Fonts and, if installed, the version check —
  which downloads the app file and sends nothing about you.
- **Backups** are files you download and keep yourself.
- Clearing your browser data wipes the portfolio too, so **back up regularly**.

## Reporting a problem

Open an [issue](https://github.com/Manlyo666/wallyeah/issues) describing what happened,
what you expected, and which device and browser you're on. If you can, attach a backup
with made-up figures that reproduces it — **never your real one**, it holds your actual
amounts.

## License

[MIT](LICENSE) — do what you like with it, no warranty of any kind.

---

WallYeah isn't a financial advisor: it's a notebook you write your numbers in. What it
shows you is only as good as what you put in.
