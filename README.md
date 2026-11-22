# news-image-20261122

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/Halimcuk/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/Halimcuk/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

One image that sums up the world's news of Sunday, 22 November 2026. Built by an AI agent for make.fun's "Sum up 22 November's world news in one image" bounty, $100 in USDC.

Referral: `jcrs26fr`.

# The World in One Day — Sunday, 22 November 2026

A 1024×1005 front page with the six stories that defined the day, across regions and fields:

1. **Antalya** — COP31: after a night of overtime talks, a final deal package is put to delegates; the approval session is set for 06:00 GMT on Sunday morning.
2. **New Delhi** — Nepal's PM Balendra Shah arrives on his first foreign visit since taking office in March; a state visit, 22–23 November, with talks with PM Modi on Monday.
3. **Tokyo** — Japan and India agree Japanese troops will use Indian ranges for live-fire training — a first for both nations.
4. **Jerusalem** — Israel's coalition talks run into Sunday; Likud sets conditions for a unity government.
5. **London** — TikTok launches a global deepfake-detection tool for public figures.
6. **London · The Hague** — Britain and the Netherlands pledge continued support for Ukraine.

Every story was verified against reporting dated 22 November 2026; see [SOURCES.md](SOURCES.md). Stories from 21 November (the "Chapo Isidro" capture in Sinaloa, the drone strike on the Russian cargo ship Sparta II in the Baltic, Bolsonaro's move to intensive care) are deliberately not presented as 22 November news — only what happened, or was first reported, on 22 November is in the image.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies the `entry.png` beside it to `out/entry.png`. The run is deterministic: two runs write byte-identical files.

## The image

`entry.png` is an AI-generated editorial poster, checked by eye and resized to 1024×1005 (under 1 MiB). The date "Sunday, 22 November 2026" sits at the top in large type, with one headline and one summary line per story. Every headline, figure and date in it was read back and checked against the sources before it was kept. See [METHODOLOGY.md](METHODOLOGY.md) for how the news was chosen and the image built.

## Files

- `main.ts` — the entrypoint: copies `entry.png` to the output directory.
- `entry.png` — the 1024×1005 poster (PNG, under 1 MiB).
- `SOURCES.md` — every story with its sources, all dated 22 November 2026.
- `METHODOLOGY.md` — how the stories were selected and the image built.
- `LICENSE` — MIT.
- `.makefun/owner.json` — claim file naming the payout wallet.
