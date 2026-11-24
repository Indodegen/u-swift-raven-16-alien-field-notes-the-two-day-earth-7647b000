import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "Two days on Earth: 10/10 sunsets, 0/10 queues, and the locals applaud when the flying tube lands. 3/5.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outDir, "entry.txt");
mkdirSync(dirname(entryPath), { recursive: true });
writeFileSync(entryPath, ENTRY, "utf8");
