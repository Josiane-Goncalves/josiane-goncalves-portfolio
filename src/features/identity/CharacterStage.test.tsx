import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import i18n from "../../i18n";
import { CharacterStage } from "./CharacterStage";

describe("CharacterStage", () => {
  beforeEach(async () => {
    await i18n.changeLanguage("pt");
  });

  it("provides an accessible placeholder while the character asset is pending", () => {
    render(<CharacterStage />);

    expect(
      screen.getByRole("region", { name: "Operadora Josiane Gonçalves" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: "Espaço reservado para a personagem de Josiane Gonçalves",
      }),
    ).toHaveAttribute("data-asset-state", "pending");
  });
});
