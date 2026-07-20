import { Container } from "@/components/ui/container";

function renderMarkdown(content: string) {
  const blocks = content.trim().split("\n\n");

  return blocks.map((block, index) => {
    if (block.startsWith("# ")) {
      return (
        <h1 key={index} className="text-3xl font-semibold tracking-tight">
          {block.replace(/^# /, "")}
        </h1>
      );
    }
    if (block.startsWith("## ")) {
      return (
        <h2 key={index} className="mt-8 text-lg font-semibold text-foreground">
          {block.replace(/^## /, "")}
        </h2>
      );
    }
    if (block.startsWith("- ")) {
      const items = block.split("\n").map((line) => line.replace(/^- /, ""));
      return (
        <ul key={index} className="mt-3 list-disc space-y-1 pl-5 text-muted-foreground">
          {items.map((item) => (
            <li key={item}>{formatInline(item)}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={index} className="mt-3 text-muted-foreground leading-7">
        {formatInline(block)}
      </p>
    );
  });
}

function formatInline(text: string) {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={i} className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">
          {part.slice(1, -1)}
        </code>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function LegalDoc({
  title,
  content,
  eyebrow,
}: {
  title: string;
  content: string;
  eyebrow: string;
}) {
  return (
    <article className="py-14 sm:py-20">
      <Container className="max-w-3xl prose-legal">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary-strong">
          {eyebrow}
        </p>
        <div className="sr-only">{title}</div>
        {renderMarkdown(content)}
      </Container>
    </article>
  );
}
