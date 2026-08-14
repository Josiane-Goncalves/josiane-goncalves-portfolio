import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    expect(() => render(<App />)).not.toThrow();
  });

  it("exposes the current main portfolio regions", () => {
    const { container } = render(<App />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "JOSIANE GONÇALVES // SOFTWARE ENGINEERING TERMINAL",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: "Navegação principal" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: "Navegação móvel" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: "Operadora Josiane Gonçalves" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Desenvolvedora de Software Júnior"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Mission Files" }),
    ).toBeInTheDocument();
    for (const moduleTitle of [
      "System Status",
      "Engineering Matrix",
      "Engineering Log",
      "A.L.I.A.",
      "Certifications",
    ]) {
      expect(
        screen.getByRole("heading", { level: 2, name: moduleTitle }),
      ).toBeInTheDocument();
    }

    for (const regionId of [
      "profile",
      "projects",
      "skills",
      "experience",
      "alia",
      "certifications",
      "contact",
    ]) {
      expect(container.querySelector(`#${regionId}`)).toBeInTheDocument();
    }
  });
});
