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

  it("keeps FRAME // 01 separate from the translated A.L.I.A. figure", async () => {
    const { container, rerender } = render(<CharacterStage />);
    const companion = screen.getByRole("figure", {
      name: "Representação da A.L.I.A., assistente de apoio ao desenvolvimento.",
    });

    expect(within(companion).getByText("A.L.I.A.")).toBeInTheDocument();
    expect(
      within(companion).queryByText("Assistente Lógica de Implementação e Apoio"),
    ).not.toBeInTheDocument();
    expect(within(companion).queryByRole("button")).not.toBeInTheDocument();
    expect(within(companion).queryByRole("link")).not.toBeInTheDocument();
    expect(within(companion).queryByRole("textbox")).not.toBeInTheDocument();
    expect(companion).toHaveAttribute("tabindex", "0");
    expect(container.querySelector(".character-stage__viewport")).toContainElement(
      companion,
    );
    expect(container.querySelector(".character-stage__companion-frame")).not.toBeInTheDocument();
    expect(container.querySelector(".character-stage__frame-marker")).toHaveTextContent(
      "FRAME // 01",
    );

    const mascot = companion.querySelector("img");
    expect(mascot).toHaveAttribute("alt", "");
    expect(mascot?.getAttribute("src")).toContain("alia-mascot");
    expect(container.querySelectorAll("h1")).toHaveLength(0);

    await i18n.changeLanguage("en");
    rerender(<CharacterStage />);

    expect(
      screen.getByRole("figure", {
        name: "Representation of A.L.I.A., development support assistant.",
      }),
    ).toBeInTheDocument();
  });
});
