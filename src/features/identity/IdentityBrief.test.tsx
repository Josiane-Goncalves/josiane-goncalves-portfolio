import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import i18n from "../../i18n";
import { IdentityBrief } from "./IdentityBrief";

describe("IdentityBrief", () => {
  beforeEach(async () => {
    await i18n.changeLanguage("pt");
  });

  it("keeps the essential positioning and moves availability outside redundant metadata", () => {
    const { container } = render(<IdentityBrief />);

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(
      screen.getByRole("heading", { level: 1, name: "JOSIANE GONÇALVES" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Desenvolvedora de Software Júnior")).toBeInTheDocument();
    expect(screen.getByText("Olá, eu sou a Josiane.")).toBeInTheDocument();
    expect(
      screen.getByText(/Minha trajetória une saúde, Engenharia Clínica/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Hoje desenvolvo aplicações com atenção a requisitos/),
    ).toBeInTheDocument();
    expect(screen.getByText("Understand // Build // Validate")).toBeInTheDocument();
    expect(screen.getByText("Disponível para oportunidades")).toBeInTheDocument();
    expect(container.querySelector(".identity-brief__meta")).not.toBeInTheDocument();
    expect(container.querySelector("[data-opportunity-radar]")).toBeInTheDocument();
    expect(screen.queryByText("Uberlândia // MG // Brasil")).not.toBeInTheDocument();
    expect(screen.queryByText("Foco")).not.toBeInTheDocument();

    const stack = screen.getByLabelText("Stack principal");
    for (const technology of ["React", "TypeScript", "Node.js", "APIs", "PostgreSQL"]) {
      expect(within(stack).getByText(technology)).toBeInTheDocument();
    }
  });

  it("translates the availability status without duplicating identity metadata", async () => {
    const { rerender } = render(<IdentityBrief />);

    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("Disponível para oportunidades")).toBeInTheDocument();

    await i18n.changeLanguage("en");
    rerender(<IdentityBrief />);

    expect(screen.getByText("Open to opportunities")).toBeInTheDocument();
  });

  it("does not introduce an incorrect seniority", () => {
    const { container } = render(<IdentityBrief />);

    expect(container).not.toHaveTextContent(/s[êe]nior|especialista|software architect|full stack engineer/i);
  });
});
