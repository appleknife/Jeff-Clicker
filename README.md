# Jeff Clicker

An unofficial fan-made clicker game starring Jeff the Land Shark from Marvel Rivals. Chomp heroes, pull costume capsules, grow Chunky Jeff, collect Sharknos gems, and spit whole teams off the map.

**Play it:** https://appleknife.github.io/Jeff-Clicker/

## Features

- **Chomp and upgrade:** 10 upgrades, tiered one-time upgrades at 10/25/50/100 owned, plus special unlocks like Chomp Crits, Golden Belly, Fin Radar and Bottomless Tank. Buy ×1, ×10 or max, and hold a row to buy repeatedly — with ×10 or max selected each row shows what the batch costs, and how many you can afford right now if it is not all of them.
- **Auto-Chomp:** up to 10 levels of Jeff tapping for himself, so you can put the phone down and still keep the ult coming. It is deliberately worse than a real tap — 60% of your per-chomp damage, half the ult charge, half a token — so mashing still wins. Boss fights stay hand-played, and it survives the gem reset.
- **Two counters:** "Total eaten" is a lifetime tally that never goes down; "Heroes to spend" is the balance upgrades and capsules actually drain.
- **The ult:** charge the meter, hit **IT'S JEFF!**, then choose where to spit the heroes: off the cliff, into spawn, or back on point.
- **Costume Capsules:** a gacha with all 26 official Jeff costumes, using Marvel Rivals' own rarities — Rare 30%, Epic 52%, Legendary 18%. Pity guarantees a Legendary by pull 60, and every 10-pull includes an Epic or better. Duplicates add stars (max 5) and strengthen that costume's ability; a dupe on a costume already at five stars feeds the **collection bonus** instead (+1% chomps and per second, permanently). The default costume carries a small +3% perk so a new save never starts at zero.
- **The Bubble (transmog):** the costume you **wear** and the ability you **slip** are picked separately. Own a Legendary for its +70% perk, then wear the Rare one you actually like the look of. Two buttons — *Set the look* / *Set the ability* — decide what tapping a costume does.
- **Sharknos gems:** prestige for six gems. Each one turns Jeff more purple and lets you pick Goodest Boy (+50% per second) or Satan's Greatest Soldier (+50% chomps). All six unlock the Snap. Gems past the sixth are **bonus gems**, worth +10% each, and the Sharknos panel counts how many you have earned. Chomp Crits and Fin Radar are mastery upgrades and survive the reset.
- **Alignment:** every spit and every event nudges Jeff toward menace (up to +40% chomps) or goodest boy (up to +40% per second). It's the third currency: the cliff pays heroes now, spawn refunds 40 ult charge so you can chain, and back-on-point buys alignment and a ×2 buff.
- **Chunky Jeff:** Jeff gets visibly wider as he eats, from Snack Size to Planet Jeff, with a fanfare each time he grows.
- **Events:** Iron Man flyovers (pick Chill 5.5s, Normal 3.8s or Spicy 2.5s — slower is easier to catch, faster pays ×0.8 / ×1 / ×1.5), the cheese heist, the Deadpool vs. Emma Frost custody battle, Hulk the Hater, teammates flaming you, and a Loki copycat.
- **Floating bubbles** to pop, **21 achievements** that pay Fish Tokens (tap one to see what it wants), offline earnings, and a "Copy brag" button.
- **Sound:** Jeff voice lines, ult sounds, and the theme song "Nom Nom (It's Jeff!)", with separate Volume, Jeff voice and Music sliders. The boss theme counts as music: it obeys the Music toggle, mute and both sliders, and flipping any of them mid-fight takes effect immediately. Every sound respects those sliders (the ult stings used to ignore the Jeff-voice one and played nearly three times louder), nothing plays while the tab is hidden, and `?audio=1` on the URL logs the name of every sound the game starts — the quickest way to identify a mystery noise.
- **Plays anywhere:** installable on a phone home screen and works offline after the first visit.

Progress saves automatically in each player's browser (localStorage). There are no accounts, no servers, no ads, and no real money.

## Controls

- Tap or click Jeff to chomp. On a phone, the bar at the bottom of the screen has a CHOMP button and the ult, so you don't have to scroll back up.
- **Space** chomps. **1 / 2 / 3** switch between Upgrades, Capsules and The Bubble.

## Backups

localStorage can be wiped by clearing site data, and iOS evicts it from sites that go unvisited for about a week. **Save a backup** in the "This run" card downloads a `jeff-clicker-save.json` file; **Restore a save** loads it back. Installing the game to the home screen avoids the iOS eviction.

## Put it on GitHub Pages

1. Create a new public repository on GitHub, for example `Jeff-Clicker`.
2. Upload everything in this folder (`index.html`, `manifest.webmanifest`, `sw.js`, `assets/`, `README.md`, `LICENSE`) to the repository root.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose `main` and `/ (root)`, and save.
4. After a minute or two, the game is live at `https://YOUR-USERNAME.github.io/Jeff-Clicker/`.

To update later, upload the new files and bump the cache name in `sw.js` (`jeff-clicker-v9` → `jeff-clicker-v10`) so installed copies pick up the change.

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
assets/img/skins/           one WebP per costume, plus 160px thumbnails for The Bubble
assets/img/heroes/          boss art: full render, 160px thumbnail, ability icon for telegraphs
assets/audio/               ult sounds, the theme song and boss-theme.mp3 (boss fights)
assets/audio/voice/         Jeff voice lines
```

To swap art or sounds, replace a file with one of the same name. Costume art lives in `assets/img/skins/<id>.webp` (512px) with an `-sm.webp` thumbnail beside it; the id is the first column of the `SKINS` table.
To tune balance, edit the `UP` (upgrades), `SKINS` (costume rarities and abilities) and `ACH` (achievements) tables near the top of the script in `index.html`, and `DIFFS` for Iron Man's flight speeds and catch payouts. Pull rates live in `rollOne()`. Auto-Chomp's numbers are the `AUTO_DMG`, `AUTO_ULT` and `AUTO_TOK` constants (`v` on the `auto` upgrade is chomps per second, per level).

## Spoilers: The Deep

Past the sixth gem a fourth tab appears: nine Marvel Rivals heroes to fight, one at a time.

It is a **skill mode, not a numbers mode** — bosses are defined in *taps*, not damage, so a
five-minute save and a five-hour save get the same fight. Tap fast to build a combo (up to ×2).

- **Adam Warlock** channels his ult at 22% — gold glow, 3.5s bar, "Born again!". Out-tap it
  or he heals to 42%.
- **Storm** throws red rings. Tap inside one before it closes to counter for +14 damage.
- **The Hulk** glows for a full second before his quiet window. Stop tapping through it.
- **Groot** puts up **three small roots at once**, and every root you clear **extends the others by
  half a second** — work them in order. A missed volley costs one penalty, not one per root.
- **Human Torch** flares before he burns. Hulk's rule with less warning.
- **Luna Snow** throws a single **fast, small** ice ring.
- **Thor** brings the hammer down. Tighter windows than Hulk.
- **Iron Man** fires missiles **in pairs from the first second**.
- **Scarlet Witch** rewrites the fight — a channel you have to out-tap, like Adam's, but hers hits hard
  and announces itself as **PURE CHAOS**.

Every telegraph is tinted by the boss's element, and the arena takes a wash of that colour for the
whole fight, so nine bosses do not look like one. At half health every boss **stops going easy**:
mechanics close up by a fifth and the next one arrives early. If the element you are wearing counters
the boss, the HP bar says so (`ICE ×1.35`) — the loadout choice is visible instead of implied.

- **The finisher:** under 20% HP the **FINISH IT** button appears, and it is now a full
  two-and-a-half-second beat: letterbox bars close in and the edges darken, a riser builds while
  Jeff coils, his ult line hits as he lunges, there is 110ms of total freeze on a flash + noise
  burst + speed lines + double shockwave, **IT'S JEFF!** slams in, the bar empties, the boss blows
  out white and shrinks away with a bubble burst, then Jeff lands and chews. Killing a boss by
  tapping plays the same sequence. It is all transforms and opacity on the existing art — no
  animation files, no canvas.

- First clear: **+2% to everything, permanently**, and unlocks that hero's element.
- Elements are two triangles: **cosmic beats earth beats lightning** beats cosmic, and
  **fire beats ice beats tech** beats fire. They only matter in fights, so the costume you
  *wear* stays purely cosmetic.
- Trophies: 3 for a first kill, 2 for a recruit, 1 for a repeat, **5 for an EX clear** — and they buy element mastery.
- `?deep=1` on the URL reveals the tab for testing without unlocking it in your save. `?ex=1` also
  previews the form change on bosses you have not recruited: it adds an **EX** button that starts the
  fight at 60% so the transformation fires naturally.

### Recruiting

**Beat them twice.** Every fight runs on a 20% shorter clock with 30% more HP and mechanics
20% faster than launch. The first win takes their element (and equips it for you). The second
fight against the same hero is a **rematch**: half again the HP, mechanics 32% faster again, and
**no FINISH IT button** — you tap the last fifth yourself. Win that and they join you.

**Difficulty ceiling:** Scarlet Witch is the bench mark — 150 HP, a 16s clock, and a 30% channel that
only falls to a crit build. That is "very hard, barely possible": the numbers to match if another
fight should sit at the top of the ladder, and not to exceed.

The element you earn on the first kill is worth +35% damage and is what makes a rematch fair;
trying one without it is meant to hurt.

*Passives are always on once recruited, and they are utility only — never damage, so the ladder
can't be melted by your own roster:*

| Hero | Passive |
|---|---|
| Adam Warlock | **Mercy** — your first mistake in a fight costs no time |
| Storm | **Tailwind** — telegraph rings last 25% longer |
| The Hulk | **Thick Hide** — +4s on the clock |

*Actives need one of three team slots and work once per fight:*

| Hero | Active |
|---|---|
| Adam Warlock | **Born Again** — +5s on the clock |
| Storm | **Eye of the Storm** — 3s with no boss mechanics |
| The Hulk | **Hulk Smash** — 20 damage, instantly |

Adam's *"Born again!"* line plays from `assets/audio/voice/adam-born-again.mp3` (mono, 64 kbps,
1.66s) and the boss theme ducks to 30% underneath it. A missing file falls back to a chord.

Each channel boss names its own line in the `BOSSES` table (`cry` for the banner, `voice` for the
file), so adding one means dropping an MP3 in `assets/audio/voice/` and naming it. Scarlet's is
`scarlet-chaos.mp3` — her "Pure Chaos" line, trimmed to the first 1.55s and matched to the same
loudness as Adam's.

The roster appears under the boss list once you have a first kill, and a recruit takes a free
team slot automatically.

### EX form

Recruit a boss and an **EX** button appears on their card. EX is the peak of the ladder: roughly
1.5x the HP of a normal fight, the fastest mechanics, and **FINISH IT only shows at 10%**, so you
tap almost all of it yourself.

At 40% the boss changes form: about three seconds of heartbeat, a rising drain, a beat of total
silence, a heavy three-layer hit, then the new form rising out of a black shadow. The arena keeps
a violet tint and the music stays quieter for the rest of the fight. It plays in full once per
boss; after that it is an instant change with just the impact.

Each boss fights differently in EX: **Adam** channels twice, **Storm** throws her rings in pairs,
**Hulk** chains his stomps. A clear pays **+5 trophies**, **+1 element mastery**, and the third
star on the boss card.

### Element mastery

Five levels per element, each worth **+5% damage** with that element on top of the +35% counter
bonus. Levels come from a hero's first kill (+1 in their element), an EX clear (+1), and trophies
(20 for the first level, then +20 each). At **cosmic 5** you get a second on the clock, at
**lightning 3** telegraph windows widen, and at **earth 3** the stomp grace grows.

## Disclaimer

This is an unofficial fan project made for fun. Jeff the Land Shark, Marvel Rivals, and related names, characters, artwork and audio belong to Marvel and NetEase Games.
This project is not affiliated with, endorsed by, or sponsored by either company. It is free and will never be sold.

The MIT license in `LICENSE` covers the game's code only. It does not cover the images and audio in `assets/`, which belong to their respective owners.
