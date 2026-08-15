import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import i18n from "../../i18n";
import { ClinicalSignalPanel, ConditionPanel } from "./HealthTechHud";

describe("HealthTechHud", () => {
  beforeEach(async () => {
    await i18n.changeLanguage("pt");
  });

  it("renders the compact condition contract", () => {
    render(<ConditionPanel />);

    expect(
      screen.getByRole("region", { name: "CONDITION" }),
    ).toBeInTheDocument();
    expect(screen.getByText("STABLE")).toBeInTheDocument();
    expect(screen.getByText("HEALTH + TECH LINKED")).toBeInTheDocument();
  });

  it("translates the clinical signal while keeping the ECG decorative", async () => {
    const { container, rerender } = render(<ClinicalSignalPanel />);

    expect(
      screen.getByText("SINAL CLÍNICO"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Experiência em saúde aplicada à engenharia de software."),
    ).toBeInTheDocument();
    expect(screen.getByText("SINAL // REGULAR")).toBeInTheDocument();
    const graph = container.querySelector("svg");
    expect(graph).toHaveAttribute("aria-hidden", "true");
    expect(graph?.querySelectorAll("path")).toHaveLength(2);

    await i18n.changeLanguage("en");
    rerender(<ClinicalSignalPanel />);

    expect(screen.getByText("CLINICAL SIGNAL")).toBeInTheDocument();
    expect(
      screen.getByText("Healthcare experience applied to software engineering."),
    ).toBeInTheDocument();
    expect(screen.getByText("SIGNAL // REGULAR")).toBeInTheDocument();
  });
});
