import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import i18n from "../../i18n";
import { QuickContact } from "./QuickContact";
import { SoftSkillsPanel } from "./SoftSkillsPanel";

describe("support modules", () => {
  beforeEach(async () => {
    await i18n.changeLanguage("pt");
  });

  it("provides direct quick-contact destinations and the full HUD anchor", () => {
    render(<QuickContact />);

    const navigation = screen.getByRole("navigation", { name: "Acesso rápido" });
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
    expect(within(navigation).getByRole("link", { name: "CV" })).toHaveAttribute(
      "href",
      "/cv/josiane-goncalves-cv.pdf",
    );
    expect(within(navigation).getByRole("link", { name: "CV" })).toHaveAttribute(
      "target",
      "_blank",
    );
    expect(screen.getByRole("link", { name: "Ver contatos" })).toHaveAttribute(
      "href",
      "#contact",
    );
  });

  it("renders factual soft skills with one decorative signal and no score", async () => {
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
    expect(container.querySelectorAll("[data-signal-bars]")).toHaveLength(1);
    expect(container.querySelector("[data-signal-bars]")).toHaveAttribute("aria-hidden", "true");
    expect(container).not.toHaveTextContent(/\d+%/);
    expect(container.querySelector('[role="progressbar"]')).not.toBeInTheDocument();
    expect(
      screen.queryByText("Competências desenvolvidas em ambientes técnicos e críticos."),
    ).not.toBeInTheDocument();

    await i18n.changeLanguage("en");
    rerender(<SoftSkillsPanel />);
    expect(screen.getByRole("heading", { name: "Soft Skills" })).toBeInTheDocument();
    expect(screen.getByText("Problem Solving")).toBeInTheDocument();
  });
});
