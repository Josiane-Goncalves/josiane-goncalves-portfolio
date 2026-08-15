import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HudPanel, type HudPanelVariant } from "./HudPanel";
import { StatusBadge, type StatusTone } from "./StatusBadge";

describe("HudPanel", () => {
  it.each<HudPanelVariant>([
    "system",
    "mission",
    "ai",
    "credential",
    "neutral",
  ])(
    "exposes the %s semantic variant without changing heading structure",
    (variant) => {
      const title = `${variant} panel`;

      render(
        <HudPanel title={title} variant={variant}>
          Content
        </HudPanel>,
      );

      const region = screen.getByRole("region", { name: title });

      expect(region).toHaveAttribute("data-variant", variant);
      expect(
        screen.getByRole("heading", { level: 2, name: title }),
      ).toBeInTheDocument();
    },
  );
});

describe("StatusBadge", () => {
  it.each<StatusTone>(["operational", "documenting", "pending", "mapping"])(
    "identifies the %s state in text and markup",
    (status) => {
      const label = `${status} status`;

      render(<StatusBadge status={status}>{label}</StatusBadge>);

      expect(screen.getByText(label)).toHaveAttribute("data-status", status);
    },
  );
});
