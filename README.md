# Jeff Clicker

An unofficial fan-made clicker game starring Jeff the Land Shark from Marvel Rivals. Chomp heroes, pull costume capsules, grow Chunky Jeff, collect Sharknos gems, and spit whole teams off the map.

**Play it:** `https://<your-username>.github.io/jeff-clicker/` (after you turn on GitHub Pages, see below)

## Features

- **Chomp and upgrade:** 10 upgrades, tiered one-time upgrades at 10/25/50/100 owned, plus special unlocks like Chomp Crits, Golden Belly, Fin Radar and Bottomless Tank.
- **The ult:** charge the meter, hit **IT'S JEFF!**, then choose where to spit the heroes: off the cliff, into spawn, or back on point.
- **Costume Capsules:** a gacha with 20 costumes across Common, Rare, Epic and Legendary. Pity guarantees a Legendary by pull 60, and every 10-pull includes an Epic or better. Duplicates add stars (max 5). Each costume tints Jeff, adds an aura and accessory, and gives a perk.
- **Sharknos gems:** prestige for six gems. Each one turns Jeff more purple and lets you pick Goodest Boy or Satan's Greatest Soldier. All six unlock the Snap.
- **Chunky Jeff:** Jeff gets visibly wider as he eats, from Snack Size to Planet Jeff.
- **Events:** Iron Man flyovers, the cheese heist, the Deadpool vs. Emma Frost custody battle, Hulk the Hater, teammates flaming you, and a Loki copycat.
- **Floating bubbles** to pop, **20 achievements** that pay Fish Tokens, offline earnings, and a "Copy brag" button.
- **Sound:** Jeff voice lines, ult sounds, and the theme song "Nom Nom (It's Jeff!)", with separate Volume, Jeff voice and Music sliders.

Progress saves automatically in each player's browser (localStorage). There are no accounts, no servers, no ads, and no real money.

## Put it on GitHub Pages

1. Create a new public repository on GitHub, for example `jeff-clicker`.
2. Upload everything in this folder (`index.html`, `assets/`, `README.md`, `LICENSE`) to the repository root. On the website you can drag the files onto the repo's **Add file → Upload files** page, or use git:
   ```bash
   git init
   git add .
   git commit -m "Jeff Clicker"
   git branch -M main
   git remote add origin https://github.com/<your-username>/jeff-clicker.git
   git push -u origin main
   ```
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose `main` and `/ (root)`, and save.
4. After a minute or two, the game is live at `https://<your-username>.github.io/jeff-clicker/`.

## Run it locally

Open a terminal in this folder and start a small web server, then visit `http://localhost:8000`:

```bash
python3 -m http.server 8000
```

Opening `index.html` directly from your file browser mostly works, but some browsers block the masked logo and the sounds on `file://` pages, so the server is the reliable way.

## Project layout

```
index.html                  the whole game: markup, styles and script
assets/img/                 Jeff art, bubble, ult icon, Jeff emblem
assets/audio/               ult sounds and the theme song
assets/audio/voice/         Jeff voice lines
```

To swap art or sounds, replace a file with one of the same name. To tune balance, edit the `UP` (upgrades), `SKINS` (costumes) and `ACH` (achievements) tables near the top of the script in `index.html`.

## Disclaimer

This is an unofficial fan project made for fun. Jeff the Land Shark, Marvel Rivals, and related names, characters, artwork and audio belong to Marvel and NetEase Games. This project is not affiliated with, endorsed by, or sponsored by either company. It is free and will never be sold.

The MIT license in `LICENSE` covers the game's code only. It does not cover the images and audio in `assets/`, which belong to their respective owners.
