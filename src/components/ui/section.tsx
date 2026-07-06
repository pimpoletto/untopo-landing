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
    <section id={id} className={cn("py-16 sm:py-24 lg:py-28", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
