import type { PropsWithChildren } from "react";

type PanelProps = PropsWithChildren<{
  title?: string;
  className?: string;
}>;

export function Panel({ title, className = "", children }: PanelProps) {
  return (
    <section
      className={`metal-border terminal-screen relative bg-panel ${className}`}
    >
      <div className="pointer-events-none absolute inset-2 border border-[rgba(177,188,130,.12)]" />
      {title && (
        <div className="min-h-10 border-b border-[rgba(175,193,115,.28)] px-4 pb-2 pt-3 text-lg tracking-[.08em] text-terminal-green">
          <span className="mr-2 text-xs">▶</span>
          {title}
          <span className="float-right text-xs">▼</span>
        </div>
      )}
      <div className="relative p-3.5">{children}</div>
    </section>
  );
}
