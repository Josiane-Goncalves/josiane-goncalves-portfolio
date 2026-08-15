import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";

import i18n from "../../i18n";
import { MissionFiles } from "./MissionFiles";

function getMissionIndex() {
  return screen.getByRole("list", { name: "Índice de missões" });
}

function getCarousel() {
  return screen.getByRole("region", { name: "Carrossel de missões" });
}

function expectSelectedMission(code: string, title: string, counter: string) {
  expect(
    within(getCarousel()).getByRole("article", {
      name: `${code} // ${title}`,
    }),
  ).toHaveAttribute("aria-current", "true");
  expect(within(getCarousel()).getByText(counter)).toBeInTheDocument();
}

describe("MissionFiles", () => {
  beforeEach(async () => {
    await i18n.changeLanguage("pt");
  });

  it("renders the three approved missions in the index and carousel", () => {
    render(<MissionFiles />);

    const indexEntries = within(getMissionIndex()).getAllByRole("listitem");
    const carouselArticles = within(getCarousel()).getAllByRole("article");

    expect(indexEntries).toHaveLength(3);
    expect(carouselArticles).toHaveLength(3);
    for (const title of ["PulseOps", "Prado em Dia", "Ride Wars League"]) {
      expect(
        within(getMissionIndex()).getByText(title),
      ).toBeInTheDocument();
    }
    expect(within(getMissionIndex()).getAllByRole("link")).toHaveLength(3);
    expect(screen.queryByText(/terceiro projeto a definir/i)).not.toBeInTheDocument();
  });

  it("starts with Mission 001 selected without opening its detail", () => {
    const { container } = render(<MissionFiles />);

    expectSelectedMission("MISSION 001", "PulseOps", "01 / 03");
    const missionMeter = container.querySelector("[data-mission-meter]");

    expect(missionMeter).toHaveAttribute("aria-hidden", "true");
    expect(missionMeter).toHaveAttribute("data-position", "1");
    expect(missionMeter).not.toHaveAttribute("role", "progressbar");
    expect(missionMeter).not.toHaveAttribute("aria-valuenow");
    expect(missionMeter).not.toHaveAttribute("aria-valuemax");
    expect(
      screen.queryByRole("region", { name: "Arquivo da missão PulseOps" }),
    ).not.toBeInTheDocument();
  });

  it("keeps Next synchronized with the index and carousel", async () => {
    const user = userEvent.setup();
    const { container } = render(<MissionFiles />);

    await user.click(screen.getByRole("button", { name: "Próxima missão" }));

    expectSelectedMission("MISSION 002", "Prado em Dia", "02 / 03");
    expect(container.querySelector("[data-mission-meter]")).toHaveAttribute(
      "data-position",
      "2",
    );
  });

  it("keeps Previous synchronized and wraps Mission 001 to Mission 003", async () => {
    const user = userEvent.setup();
    render(<MissionFiles />);

    await user.click(screen.getByRole("button", { name: "Missão anterior" }));

    expectSelectedMission("MISSION 003", "Ride Wars League", "03 / 03");
  });

  it("wraps Mission 003 to Mission 001 with Next", async () => {
    const user = userEvent.setup();
    render(<MissionFiles />);

    await user.click(
      within(getCarousel()).getByRole("button", {
        name: "Selecionar missão Ride Wars League",
      }),
    );
    await user.click(screen.getByRole("button", { name: "Próxima missão" }));

    expectSelectedMission("MISSION 001", "PulseOps", "01 / 03");
  });

  it("rotates directly to a mission selected from the carousel", async () => {
    const user = userEvent.setup();
    render(<MissionFiles />);

    await user.click(
      within(getCarousel()).getByRole("button", {
        name: "Selecionar missão Ride Wars League",
      }),
    );

    expectSelectedMission("MISSION 003", "Ride Wars League", "03 / 03");
  });

  it("opens the selected file and preserves selection after closing", async () => {
    const user = userEvent.setup();
    render(<MissionFiles />);

    await user.click(
      within(getCarousel()).getByRole("button", {
        name: "Selecionar missão Prado em Dia",
      }),
    );
    await user.click(
      within(getCarousel()).getByRole("button", {
        name: "Abrir arquivo Prado em Dia",
      }),
    );

    expect(
      screen.getByRole("region", { name: "Arquivo da missão Prado em Dia" }),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: "Fechar arquivo Prado em Dia" }),
    );

    expectSelectedMission("MISSION 002", "Prado em Dia", "02 / 03");
    expect(
      within(getCarousel()).getByRole("button", {
        name: "Abrir arquivo Prado em Dia",
      }),
    ).toHaveFocus();
  });

  it("opens only the sections and links backed by confirmed data", async () => {
    const user = userEvent.setup();
    render(<MissionFiles />);

    await user.click(
      within(getCarousel()).getByRole("button", {
        name: "Abrir arquivo PulseOps",
      }),
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
    const repository = within(detail).getByRole("link", {
      name: "Ver repositório",
    });
    expect(repository).toHaveAttribute(
      "href",
      "https://github.com/Josiane-Goncalves/pulseops",
    );
    expect(repository).toHaveAttribute("target", "_blank");
    expect(repository).toHaveAttribute("rel", "noopener noreferrer");
  });
});
