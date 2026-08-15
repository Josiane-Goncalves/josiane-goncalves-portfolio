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

  it("keeps certifications accessible outside the system rail", () => {
    render(<App />);
    const systemRail = screen.getByRole("complementary", {
      name: "Módulos do sistema",
    });
    const certificationPanels = screen.getAllByRole("region", {
      name: "Formação & Certificações",
    });
    const [certifications] = certificationPanels;

    for (const moduleTitle of ["VISÃO DO SISTEMA", "A.L.I.A."]) {
      expect(
        within(systemRail).getByRole("heading", {
          level: 2,
          name: moduleTitle,
        }),
      ).toBeInTheDocument();
    }

    for (const moduleTitle of ["ACESSO RÁPIDO", "Soft Skills"]) {
      expect(
        within(systemRail).getByRole("heading", { name: moduleTitle }),
      ).toBeInTheDocument();
    }

    expect(certificationPanels).toHaveLength(1);
    expect(systemRail).not.toContainElement(certifications);
    expect(certifications).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: "Representação estilizada de Josiane Gonçalves segurando um notebook.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("figure", {
        name: "Representação da A.L.I.A., assistente de apoio ao desenvolvimento.",
      }),
    ).toBeInTheDocument();

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

  it("renders each health-tech hero module once without the retired stage label", () => {
    render(<App />);

    for (const title of ["CONDITION", "SINAL CLÍNICO"]) {
      expect(
        screen.getAllByRole("heading", { level: 2, name: title }),
      ).toHaveLength(1);
    }

    expect(screen.getByText("STABLE")).toBeInTheDocument();
    expect(screen.getByText("HEALTH + TECH LINKED")).toBeInTheDocument();
    expect(screen.queryByText("Palco pronto")).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Engineering Process" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toHaveAttribute("id", "contact");
  });
});
