# Jeff Clicker

An unofficial fan-made clicker game starring Jeff the Land Shark from Marvel Rivals. Chomp heroes, pull costume capsules, grow Chunky Jeff, collect Sharknos gems, and spit whole teams off the map.

**Play it:** https://appleknife.github.io/Jeff-Clicker/

## Features

- **Chomp and upgrade:** 10 upgrades, tiered one-time upgrades at 10/25/50/100 owned, plus special unlocks like Chomp Crits, Golden Belly, Fin Radar and Bottomless Tank. Buy ×1, ×10 or max, and hold a row to buy repeatedly.
- **The ult:** charge the meter, hit **IT'S JEFF!**, then choose where to spit the heroes: off the cliff, into spawn, or back on point.
- **Costume Capsules:** a gacha with 20 costumes across Common, Rare, Epic and Legendary. Pity guarantees a Legendary by pull 60, and every 10-pull includes an Epic or better. Duplicates add stars (max 5). Each costume tints Jeff, adds an aura and accessory, and gives a perk.
- **Sharknos gems:** prestige for six gems. Each one turns Jeff more purple and lets you pick Goodest Boy or Satan's Greatest Soldier. All six unlock the Snap.
- **Chunky Jeff:** Jeff gets visibly wider as he eats, from Snack Size to Planet Jeff, with a fanfare each time he grows.
- **Events:** Iron Man flyovers, the cheese heist, the Deadpool vs. Emma Frost custody battle, Hulk the Hater, teammates flaming you, and a Loki copycat.
- **Floating bubbles** to pop, **20 achievements** that pay Fish Tokens, offline earnings, and a "Copy brag" button.
- **Sound:** Jeff voice lines, ult sounds, and the theme song "Nom Nom (It's Jeff!)", with separate Volume, Jeff voice and Music sliders.
- **Plays anywhere:** installable on a phone home screen and works offline after the first visit.

Progress saves automatically in each player's browser (localStorage). There are no accounts, no servers, no ads, and no real money.

## Controls

- Tap or click Jeff to chomp. On a phone, the bar at the bottom of the screen has a CHOMP button and the ult, so you don't have to scroll back up.
- **Space** chomps. **1 / 2 / 3** switch between Upgrades, Capsules and Wardrobe.

## Backups

localStorage can be wiped by clearing site data, and iOS evicts it from sites that go unvisited for about a week. **Save a backup** in the "This run" card downloads a `jeff-clicker-save.json` file; **Restore a save** loads it back. Installing the game to the home screen avoids the iOS eviction.

## Put it on GitHub Pages

1. Create a new public repository on GitHub, for example `Jeff-Clicker`.
2. Upload everything in this folder (`index.html`, `manifest.webmanifest`, `sw.js`, `assets/`, `README.md`, `LICENSE`) to the repository root.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose `main` and `/ (root)`, and save.
4. After a minute or two, the game is live at `https://YOUR-USERNAME.github.io/Jeff-Clicker/`.

To update later, upload the new files and bump the cache name in `sw.js` (`jeff-clicker-v1` → `jeff-clicker-v2`) so installed copies pick up the change.

## Run it locally

Start a small web server in this folder, then visit `http://localhost:8000`:

```bash
python3 -m http.server 8000
```

Opening `index.html` directly works for the game, but the service worker (offline mode) needs a real server, and some browsers block the sounds on `file://` pages.

## Project layout

```
index.html                  the whole game: markup, styles and script
manifest.webmanifest        install-on-home-screen details
sw.js                       offline cache; art is precached, the theme song caches on first play
assets/img/                 Jeff art, bubble, ult icon, Jeff emblem, app icons
assets/audio/               ult sounds and the theme song
assets/audio/voice/         Jeff voice lines
```

To swap art or sounds, replace a file with one of the same name.
To tune balance, edit the `UP` (upgrades), `SKINS` (costumes) and `ACH` (achievements) tables near the top of the script in `index.html`.

## Disclaimer

This is an unofficial fan project made for fun. Jeff the Land Shark, Marvel Rivals, and related names, characters, artwork and audio belong to Marvel and NetEase Games.
This project is not affiliated with, endorsed by, or sponsored by either company. It is free and will never be sold.

The MIT license in `LICENSE` covers the game's code only. It does not cover the images and audio in `assets/`, which belong to their respective owners.
