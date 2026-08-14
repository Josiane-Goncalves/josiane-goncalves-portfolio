import type { PropsWithChildren } from "react";

export type StatusTone =
  | "operational"
  | "documenting"
  | "pending"
  | "mapping";

const statusIndicators: Record<StatusTone, string> = {
  operational: "●",
  documenting: "◐",
  pending: "○",
  mapping: "◇",
};

type StatusBadgeProps = PropsWithChildren<{
  status: StatusTone;
  className?: string;
}>;

export function StatusBadge({
  status,
  className = "",
  children,
}: StatusBadgeProps) {
  return (
    <span className={`status-badge ${className}`} data-status={status}>
      <span aria-hidden="true" className="status-badge__indicator">
        {statusIndicators[status]}
      </span>
      {children}
    </span>
  );
}
