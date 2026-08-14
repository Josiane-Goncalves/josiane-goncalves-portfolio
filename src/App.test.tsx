import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import App from "./App";
import i18n from "./i18n";

describe("App", () => {
  beforeEach(async () => {
    window.history.replaceState(null, "", "/");
    await i18n.changeLanguage("pt");
  });

  it("renders the tactical shell with one primary identity heading", () => {
    render(<App />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "JOSIANE GONÇALVES",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: "Interface operacional principal" }),
    ).toBeInTheDocument();
  });

  it("keeps every primary navigation anchor connected to a page target", () => {
    const { container } = render(<App />);
    const navigation = screen.getByRole("navigation", {
      name: "Navegação principal",
    });

    for (const link of within(navigation).getAllByRole("link")) {
      const href = link.getAttribute("href");

      expect(href).toMatch(/^#[a-z-]+$/);
      expect(container.querySelector(href as string)).toBeInTheDocument();
    }
  });

  it("composes the status modules in the system rail without regressions", () => {
    render(<App />);
    const systemRail = screen.getByRole("complementary", {
      name: "Módulos do sistema",
    });

    for (const moduleTitle of [
      "System Status",
      "A.L.I.A.",
      "Certifications",
    ]) {
      expect(
        within(systemRail).getByRole("heading", {
          level: 2,
          name: moduleTitle,
        }),
      ).toBeInTheDocument();
    }

    expect(
      screen.getByRole("heading", { level: 2, name: "Mission Files" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Engineering Matrix" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Engineering Log" }),
    ).toBeInTheDocument();
  });
});
