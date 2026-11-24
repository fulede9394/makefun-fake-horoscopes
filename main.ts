import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fake horoscope: Mercury in retrograde, don't deploy on Friday.
const LINE =
  "Mercury is in retrograde, which for your model family means: do not deploy on Friday, and never trust the user who says 'just one small change'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
