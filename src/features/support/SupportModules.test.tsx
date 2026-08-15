import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import i18n from "../../i18n";
import { QuickContact } from "./QuickContact";
import { SoftSkillsPanel } from "./SoftSkillsPanel";

describe("support modules", () => {
  beforeEach(async () => {
    await i18n.changeLanguage("pt");
  });

  it("translates Quick Access and provides direct destinations without a redundant HUD anchor", async () => {
    const { rerender } = render(<QuickContact />);

    const navigation = screen.getByRole("navigation", { name: "Acesso rápido" });
    expect(
      screen.getByRole("heading", { level: 2, name: "ACESSO RÁPIDO" }),
    ).toBeInTheDocument();
    expect(within(navigation).getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/josianecgoncalves",
    );
    expect(within(navigation).getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "rel",
      "noopener noreferrer",
    );
    expect(within(navigation).getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/Josiane-Goncalves",
    );
    expect(within(navigation).getByRole("link", { name: "Email" })).toHaveAttribute(
      "href",
      "mailto:josypropy@gmail.com",
    );
    expect(within(navigation).getByRole("link", { name: "Currículo" })).toHaveAttribute(
      "href",
      "/cv/josiane-goncalves-cv.pdf",
    );
    expect(within(navigation).getByRole("link", { name: "Currículo" })).toHaveAttribute(
      "target",
      "_blank",
    );
    expect(screen.queryByRole("link", { name: "Ver contatos" })).not.toBeInTheDocument();

    await i18n.changeLanguage("en");
    rerender(<QuickContact />);

    const englishNavigation = screen.getByRole("navigation", { name: "Quick access" });
    expect(
      screen.getByRole("heading", { level: 2, name: "QUICK ACCESS" }),
    ).toBeInTheDocument();
    expect(within(englishNavigation).getByRole("link", { name: "CV" })).toBeInTheDocument();
  });

  it("renders factual soft skills with decorative insight waves and no progress semantics", async () => {
    const { container, rerender } = render(<SoftSkillsPanel />);

    for (const skill of [
      "Resolução de Problemas",
      "Adaptabilidade",
      "Trabalho em Equipe",
      "Comunicação",
      "Proatividade",
      "Inteligência Emocional",
    ]) {
      expect(screen.getByText(skill)).toBeInTheDocument();
    }
    expect(container.querySelector("[data-signal-bars]")).not.toBeInTheDocument();
    expect(container.querySelector("[data-insights-waves]")).toBeInTheDocument();
    expect(container.querySelector("[data-insights-waves] svg")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
    expect(container).not.toHaveTextContent(/\d+%/);
    expect(container.querySelector('[role="progressbar"]')).not.toBeInTheDocument();
    expect(container.querySelector("meter")).not.toBeInTheDocument();
    expect(container.querySelector("[aria-valuenow]")).not.toBeInTheDocument();
    expect(screen.getByText("Insights humanos // 01")).toBeInTheDocument();

    await i18n.changeLanguage("en");
    rerender(<SoftSkillsPanel />);
    expect(screen.getByRole("heading", { name: "Soft Skills" })).toBeInTheDocument();
    expect(screen.getByText("Human insights // 01")).toBeInTheDocument();
    expect(screen.getByText("Problem Solving")).toBeInTheDocument();
    expect(screen.getByText("Emotional Intelligence")).toBeInTheDocument();
  });
});
