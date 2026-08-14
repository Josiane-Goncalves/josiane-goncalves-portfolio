import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";

import i18n from "../../i18n";
import { MissionFiles } from "./MissionFiles";

describe("MissionFiles", () => {
  beforeEach(async () => {
    await i18n.changeLanguage("pt");
  });

  it("renders exactly the three approved mission entries", () => {
    render(<MissionFiles />);

    const index = screen.getByRole("list", { name: "Índice de missões" });
    const controls = within(index).getAllByRole("button");

    expect(controls).toHaveLength(3);
    expect(
      screen.getByRole("button", { name: "Abrir arquivo PulseOps" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Abrir arquivo Prado em Dia" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Abrir arquivo Ride Wars League" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/terceiro projeto a definir/i),
    ).not.toBeInTheDocument();
  });

  it("opens a mission detail as an accessible inline expansion", async () => {
    const user = userEvent.setup();
    render(<MissionFiles />);

    const pulseOpsControl = screen.getByRole("button", {
      name: "Abrir arquivo PulseOps",
    });

    expect(pulseOpsControl).toHaveAttribute("aria-expanded", "false");
    await user.click(pulseOpsControl);

    expect(pulseOpsControl).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByRole("heading", { level: 3, name: "PulseOps" }),
    ).toBeInTheDocument();
    const detail = screen.getByRole("region", {
      name: "Arquivo da missão PulseOps",
    });
    expect(within(detail).getByText(/^MISSION 001/)).toBeInTheDocument();
  });

  it("switches missions and exposes their factual documentation status", async () => {
    const user = userEvent.setup();
    render(<MissionFiles />);

    await user.click(
      screen.getByRole("button", { name: "Abrir arquivo Prado em Dia" }),
    );
    expect(
      screen.getByRole("heading", { level: 3, name: "Prado em Dia" }),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: "Abrir arquivo Ride Wars League" }),
    );
    const detail = screen.getByRole("region", {
      name: "Arquivo da missão Ride Wars League",
    });

    expect(
      within(detail).getByRole("heading", {
        level: 3,
        name: "Ride Wars League",
      }),
    ).toBeInTheDocument();
    expect(within(detail).getByText("Em documentação")).toBeInTheDocument();
  });

  it("closes the detail and returns focus to the mission control", async () => {
    const user = userEvent.setup();
    render(<MissionFiles />);

    const control = screen.getByRole("button", {
      name: "Abrir arquivo PulseOps",
    });
    await user.click(control);
    await user.click(
      screen.getByRole("button", { name: "Fechar arquivo PulseOps" }),
    );

    expect(
      screen.queryByRole("heading", { level: 3, name: "PulseOps" }),
    ).not.toBeInTheDocument();
    expect(control).toHaveFocus();
    expect(control).toHaveAttribute("aria-expanded", "false");
  });

  it("omits unconfirmed sections, technologies and links", async () => {
    const user = userEvent.setup();
    render(<MissionFiles />);

    await user.click(
      screen.getByRole("button", { name: "Abrir arquivo PulseOps" }),
    );
    const detail = screen.getByRole("region", {
      name: "Arquivo da missão PulseOps",
    });

    expect(
      within(detail).getByRole("heading", { name: "Contexto" }),
    ).toBeInTheDocument();
    expect(
      within(detail).queryByRole("heading", { name: "Arquitetura" }),
    ).not.toBeInTheDocument();
    expect(
      within(detail).queryByRole("heading", { name: "Tecnologias" }),
    ).not.toBeInTheDocument();
    expect(within(detail).queryByRole("link")).not.toBeInTheDocument();
  });
});
