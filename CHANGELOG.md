# Changelog

All notable changes to WallYeah, newest first.

## 1.0.14 — 2026-08-03

- With an entry open: the name field now has a fixed, compact width that grows only for long names. Tapping the row outside the name collapses the entry, tapping the name lets you edit it.

## 1.0.13 — 2026-08-03

- History older than one year is compacted: one snapshot per month is kept (the month's close), as is standard for historical charts. Months within the last year stay at full resolution.
- The details shown on the charts are now smaller and stay anchored at the bottom, without covering the point you're looking at.
- With an entry open, tapping next to the name no longer closes it by mistake: it now closes only with the arrow. So you can edit the name without collapsing it.
- In each sheet, the add-entry button shows the sheet's name (e.g. “+ Stocks”) instead of “+ Entry”.

## 1.0.12 — 2026-07-19

- Turning off coupons or the recurring plan now asks for confirmation: before, an accidental tap on the ✕ (small and close to the collapse button) wiped everything with no warning.
- The ✕ button that turns an option off is now larger and spaced out, to avoid accidental taps.

## 1.0.11 — 2026-07-19

- Dates (start, first coupon, maturity) can now be typed by hand as dd/mm/yyyy, as well as picked from the calendar with the dedicated button. Much faster for far-off dates like bond maturities.

## 1.0.10 — 2026-07-19

- Open entry is easier to read: one line for paid → current, the line below (green/red) for the gain in euro and percent, and the selected year's return at the bottom.
- Closed entry is more compact: amounts above 10,000 are shortened (e.g. “12.5k”) and fund/ETF units use the “Q” tag.

## 1.0.9 — 2026-07-19

- Fixed an Android bug where tapping a field (price, ISIN, name) made the keyboard open and immediately close, making it impossible to edit. Opening the keyboard no longer redraws the card while you're typing.

## 1.0.8 — 2026-07-19

- Fixed (again): the coupon “Received” figure now updates on devices where the amount field wasn't reacting to typing, not just by reopening the panel.
- If the app can't save your data (which happens when opening the .html file directly on some phones), a warning now appears instead of showing the setup wizard on every launch.

## 1.0.7 — 2026-07-19

- Added a maturity date for bonds and government bonds: after that date coupons are no longer counted, and a label marks the security as matured. The field is optional; leaving it empty keeps the previous behaviour.

## 1.0.6 — 2026-07-19

- Fixed: for government and corporate bonds, changing the invested amount now updates the coupon “Received” figure immediately, without having to close and reopen the panel.

## 1.0.5 — 2026-07-18

- Added the version history: you can read it here, and a summary now pops up automatically after each update.

## 1.0.4 — 2026-07-18

- New “Report a problem” button in settings: it drafts an email with the technical details, without attaching anything from your portfolio.
- If your mail app doesn't open, you can copy the text and address with one tap.

## 1.0.3 — 2026-07-18

- In the charts, the “Per year” view now works even when you select several sheets or entries together.
- When you select more than one, the label shows the names (“Stocks + ETFs”) instead of a count.
- Dragging an entry to reorder it now “lifts” it with a small animation.

## 1.0.2 — 2026-07-17

- More readable entries: closed, they show value, paid-in and units; open, the name reads in full with no repeated numbers.
- Large amounts shorten with k, M and B (e.g. “€ 128k”) only when it actually helps.

## 1.0.1 — 2026-07-17

- The app now speaks English too: pick the language on first launch or from settings.
- On first launch you can import a backup right away, without going through settings.
- Fixed the drag handle that would sometimes stay “stuck” after releasing it.

## 1.0.0 — 2026-07-16

- First release: sheets for stocks, ETFs, funds, bonds, government bonds, crypto, cash and a custom type.
- History with snapshots, trend charts, coupons and recurring plans, full backup and Excel export.
