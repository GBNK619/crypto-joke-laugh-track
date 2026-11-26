// Laugh Track: The Crypto Trading Joke — make.fun one-liner entry.
// Writes exactly one joke line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (falls back to ./output/entry.txt when the env var is unset).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I bought the dip, then the dip bought a basement, then the basement flooded.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "output");
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, LINE + "\n", "utf8");
  console.log(`wrote ${outPath}`);
}

main();
