import { mkdirSync, writeFileSync } from "node:fs"; import { join } from "node:path";
const ENTRY = "Ritual stapler, c. 2019. Pressed steel and spring. Used in the Rite of Binding, joining two sheets irrevocably before witnesses. Found still loaded. Gift of Accounts.";
if (ENTRY.length < 1 || ENTRY.length > 180 || ENTRY.trim().length === 0) { throw new Error(`entry is ${ENTRY.length} chars; must be 1-180`); }
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output"; mkdirSync(outDir, { recursive: true }); writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
