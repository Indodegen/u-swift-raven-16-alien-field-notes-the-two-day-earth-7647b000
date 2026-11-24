import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// Alien field note: two days on Earth, rated like a travel review —
// the "3/5" at the end is part of the entry itself.
const ENTRY =
  "Two days on Earth: 10/10 sunsets, 0/10 queues, and the locals applaud when the flying tube lands. 3/5.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outDir, "entry.txt");
mkdirSync(dirname(entryPath), { recursive: true });
writeFileSync(entryPath, ENTRY, "utf8");
