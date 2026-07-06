import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { pdf } from "pdf-to-img";

const SRC = process.argv[2] ?? "C:/Users/vscha/Downloads/b60a5-1.pdf";
const OUT_DIR = path.resolve("public/pdf-preview");

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const document = await pdf(SRC, { scale: 2 });

  let i = 0;
  for await (const page of document) {
    const file = path.join(OUT_DIR, `page-${i + 1}.png`);
    await writeFile(file, page);
    console.log(`wrote ${file} (${page.length} bytes)`);
    i += 1;
  }
  console.log(`Done: ${i} pages -> ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
