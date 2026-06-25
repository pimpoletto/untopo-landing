import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  centered = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl space-y-4",
        centered && "text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-widest text-primary-strong">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
