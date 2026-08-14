import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import i18n from "../../i18n";
import { IdentityBrief } from "./IdentityBrief";

describe("IdentityBrief", () => {
  beforeEach(async () => {
    await i18n.changeLanguage("pt");
  });

  it("renders the approved professional positioning", () => {
    render(<IdentityBrief />);

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(
      screen.getByRole("heading", { level: 1, name: "JOSIANE GONÇALVES" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Desenvolvedora de Software Júnior")).toBeInTheDocument();
    expect(screen.getByText("Uberlândia // MG // Brasil")).toBeInTheDocument();
    expect(
      screen.getByText("Desenvolvimento de Software | Front-end + Back-end em evolução"),
    ).toBeInTheDocument();

    const stack = screen.getByLabelText("Stack principal");
    for (const technology of ["React", "TypeScript", "Node.js", "APIs", "PostgreSQL"]) {
      expect(within(stack).getByText(technology)).toBeInTheDocument();
    }
  });

  it("does not introduce an incorrect seniority", () => {
    const { container } = render(<IdentityBrief />);

    expect(container).not.toHaveTextContent(/s[êe]nior|especialista|software architect|full stack engineer/i);
  });
});
