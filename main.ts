// news-image-20261122 — Node 22, standard library only.
//
// The poster lives next to this file as entry.png: a 1024x1005 front page
// summing up the world news of Sunday, 22 November 2026 (519,293 bytes,
// inside the gate's 1024x1024 and 1 MiB limits). This program copies that
// image, byte for byte, into the grader's output directory.
// It never touches the network, and every run writes identical bytes.
//
// Why a plain copy, not a render: the poster is an AI-generated editorial
// image (see METHODOLOGY.md) whose text was already read back and checked
// against the sources in SOURCES.md. Re-rendering it at run time would
// risk altering a single pixel or glyph, so the entrypoint's only job is
// a deterministic copy — the same input bytes always produce the same
// output bytes. The 1024x1005 size is the final poster size after the
// first 1600x1600 render was cropped and downscaled (Pillow LANCZOS)
// to fit the 1 MiB gate; it is not recomputed here.
//
// Local check:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
