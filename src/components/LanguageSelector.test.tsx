import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useTranslation } from "react-i18next";
import { beforeEach, describe, expect, it } from "vitest";

import i18n from "../i18n";
import { LanguageSelector } from "./LanguageSelector";

function LanguageHarness() {
  const { t } = useTranslation();

  return (
    <>
      <LanguageSelector />
      <p>{t("common.projects")}</p>
    </>
  );
}

describe("LanguageSelector", () => {
  beforeEach(async () => {
    localStorage.clear();
    await i18n.changeLanguage("pt");
  });

  it("switches between Portuguese and English", async () => {
    const user = userEvent.setup();
    render(<LanguageHarness />);

    expect(
      screen.getByRole("group", { name: "Selecionar idioma" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Projetos")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "PT" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("button", { name: "EN" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );

    await user.click(screen.getByRole("button", { name: "EN" }));
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "EN" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );

    await user.click(screen.getByRole("button", { name: "PT" }));
    expect(screen.getByText("Projetos")).toBeInTheDocument();
  });

  it("persists the selected language", async () => {
    const user = userEvent.setup();
    render(<LanguageHarness />);

    await user.click(screen.getByRole("button", { name: "EN" }));

    expect(localStorage.getItem("portfolio-language")).toBe("en");
  });
});
