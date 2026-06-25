import { cn } from "@/lib/utils";

import { Container } from "./container";

export function Section({
  id,
  className,
  containerClassName,
  children,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-14 sm:py-20", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
