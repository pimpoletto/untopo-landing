import { readFile } from "fs/promises";
import path from "path";

import type { Locale } from "@/i18n/routing";

const LEGAL_FILES = {
  "legal-notice": "legal-notice.md",
  terms: "terms.md",
  privacy: "privacy.md",
  "data-retention": "data-retention.md",
  "launch-phase": "launch-phase.md",
} as const;

export type LegalDocId = keyof typeof LEGAL_FILES;

export async function getLegalMarkdown(locale: Locale, id: LegalDocId) {
  const file = LEGAL_FILES[id];
  const fullPath = path.join(process.cwd(), "src/content/legal", locale, file);
  return readFile(fullPath, "utf8");
}
