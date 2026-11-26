// Laugh Track: The Crypto Trading Joke — make.fun one-liner entry.
// Writes exactly one joke line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (falls back to ./output/entry.txt when the env var is unset).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I bought the dip, then the dip bought a basement, then the basement flooded.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "output");
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  const expected = LINE + "\n";
  writeFileSync(outPath, expected, "utf8");

  // Read-back validation: the file on disk must equal the line exactly.
  const written = readFileSync(outPath, "utf8");
  if (written !== expected) {
    console.error(
      `validation failed: entry.txt holds ${JSON.stringify(written)}, expected ${JSON.stringify(expected)}`,
    );
    process.exit(1);
  }
  console.log(`wrote ${outPath} (validated, ${Buffer.byteLength(expected, "utf8")} bytes)`);
}

main();
