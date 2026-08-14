import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import i18n from "../../i18n";
import { CharacterStage } from "./CharacterStage";

describe("CharacterStage", () => {
  beforeEach(async () => {
    await i18n.changeLanguage("pt");
  });

  it("renders the approved Josiane character asset with accessible text", () => {
    render(<CharacterStage />);

    expect(
      screen.getByRole("region", { name: "Operadora Josiane Gonçalves" }),
    ).toBeInTheDocument();

    const character = screen.getByRole("img", {
      name: "Representação estilizada de Josiane Gonçalves segurando um notebook.",
    });

    expect(character).toHaveAttribute("data-asset-state", "ready");
    expect(character.getAttribute("src")).toContain("josiane-character");
  });

  it("renders A.L.I.A. as an accessible, non-interactive companion", () => {
    const { container } = render(<CharacterStage />);
    const companion = screen.getByRole("figure", {
      name: "A.L.I.A. Assistente Lógica de Implementação e Apoio",
    });

    expect(within(companion).getByText("A.L.I.A.")).toBeInTheDocument();
    expect(
      within(companion).getByText("Assistente Lógica de Implementação e Apoio"),
    ).toBeInTheDocument();
    expect(within(companion).queryByRole("button")).not.toBeInTheDocument();
    expect(within(companion).queryByRole("link")).not.toBeInTheDocument();

    const mascot = companion.querySelector("img");
    expect(mascot).toHaveAttribute("alt", "");
    expect(mascot?.getAttribute("src")).toContain("alia-mascot");
    expect(container.querySelectorAll("h1")).toHaveLength(0);
  });
});
