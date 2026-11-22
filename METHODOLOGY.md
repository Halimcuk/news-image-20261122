# Methodology

## How the news was chosen

On the morning of 22 November 2026 (WIB), with the day still young in
UTC, world-news roundups and live coverage for Sunday 22 November
2026 were searched and cross-checked (news vertical search, then the
underlying outlets). A story was used only if reporting of it was
dated 22 November 2026, and only if the event happened — or was
first reported — on that day.

That date rule mattered most this day: the weekend's biggest
headlines — the capture of "El Chapo Isidro" in Sinaloa, the drone
strike on the Russian cargo ship Sparta II in the Baltic, Bolsonaro's
move to intensive care, the Kryvyi Rih strike and the Poland missile
incidents — all happened on Friday 20 or Saturday 21 November, so
none of them is presented as 22 November news. What the poster shows
instead is what 22 November itself produced:

- Climate, Turkey: COP31's final deal package, presented to delegates
  in the early hours of Sunday after a weekend of overtime talks.
- Diplomacy, Asia: Nepal PM Balendra Shah arrives in New Delhi on his
  first foreign visit since taking office in March.
- Defence, Asia: Japan and India agree Japanese troops will train
  live-fire at Indian ranges, a first.
- Politics, Middle East: Israel's coalition talks run into Sunday,
  with Likud setting conditions for a unity government.
- Tech: TikTok launches a global deepfake-detection tool for public
  figures.
- Europe: Britain and the Netherlands pledge continued support for
  Ukraine.

Each poster line states only what the sources reported. Where a
development was still in progress, the poster keeps to the facts as
reported at build time: the COP31 deal had been presented but not yet
formally approved (the approval session was set for 06:00 GMT), so
the poster says the deal was "put to delegates" and names the
session time rather than claiming it passed. See SOURCES.md for the
caveats.

## How the image was made

The poster was generated with an AI image generator from a prompt
carrying the six headlines and summaries verbatim, in the style of a
clean newspaper front page: a navy header band, the date in large
serif type, and a 3×2 grid of cards, each with a place tag, a bold
headline and one summary line.

The first render came out at 1600×1600 and 1,072,344 bytes — over the
1 MiB limit — so the thin light strip at the top was cropped and it
was downscaled to 1024×1005 with Pillow (LANCZOS) and re-saved as an
optimised PNG at 519,293 bytes. The finished image was read back
visually at full size: the date, all six headlines, all six summaries
and the source footer are complete and legible, with no garbled or
invented text anywhere. No text was altered between the check and the
final file.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`), creating the
output directory if needed. It does no network access and writes the
same bytes on every run — verified by running it twice and comparing
sha256 hashes. The copy is deliberately byte-for-byte rather than a
re-render: the poster's text was already read back and checked against
the sources, and re-rendering could alter a glyph or pixel, so the
program's only job is to reproduce the checked file exactly. The
comment header in `main.ts` records the poster's final size
(1024×1005, 519,293 bytes) and why the copy is deterministic, so a
reader can see the reasoning without opening this file.
