import { useId, type PropsWithChildren, type ReactNode } from "react";

export type HudPanelVariant =
  | "system"
  | "mission"
  | "ai"
  | "credential"
  | "neutral";

type HudPanelProps = PropsWithChildren<{
  title: string;
  variant?: HudPanelVariant;
  eyebrow?: string;
  headingLevel?: 2 | 3;
  headerAccessory?: ReactNode;
  className?: string;
  bodyClassName?: string;
}>;

export function HudPanel({
  title,
  variant = "neutral",
  eyebrow,
  headingLevel = 2,
  headerAccessory,
  className = "",
  bodyClassName = "",
  children,
}: HudPanelProps) {
  const titleId = useId();
  const Heading = headingLevel === 3 ? "h3" : "h2";

  return (
    <section
      aria-labelledby={titleId}
      className={`hud-panel ${className}`}
      data-variant={variant}
    >
      <span aria-hidden="true" className="hud-panel__corner hud-panel__corner--start" />
      <span aria-hidden="true" className="hud-panel__corner hud-panel__corner--end" />

      <div className="hud-panel__header">
        <div>
          {eyebrow && <span className="hud-panel__eyebrow">{eyebrow}</span>}
          <Heading className="hud-panel__title" id={titleId}>
            {title}
          </Heading>
        </div>
        {headerAccessory && (
          <div className="hud-panel__accessory">{headerAccessory}</div>
        )}
      </div>

      <div className={`hud-panel__body ${bodyClassName}`}>{children}</div>
    </section>
  );
}
