import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SignalBars } from "./SignalBars";

describe("SignalBars", () => {
  it("renders a decorative deterministic signal without scores", () => {
    const { container } = render(
      <SignalBars pattern={2} size="wide" variant="ai" />,
    );
    const signal = container.querySelector("[data-signal-bars]");

    expect(signal).toHaveAttribute("aria-hidden", "true");
    expect(signal).toHaveAttribute("data-size", "wide");
    expect(signal).toHaveAttribute("data-variant", "ai");
    expect(signal).not.toHaveTextContent(/%/);
    expect(container.querySelector('[role="progressbar"]')).not.toBeInTheDocument();
    expect(signal?.children.length).toBeGreaterThan(0);
  });
});
