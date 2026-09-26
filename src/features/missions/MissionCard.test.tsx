import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import { missions } from "../../data/missions";
import i18n from "../../i18n";
import { MissionCard } from "./MissionCard";

describe("MissionCard repository access", () => {
  beforeEach(async () => {
    await i18n.changeLanguage("pt");
  });

  it("renders a confirmed repositoryUrl as a secure external link", () => {
    render(<MissionCard active mission={missions[0]} />);

    const link = screen.getByRole("link", {
      name: "Abrir repositório do cuidarbem no GitHub",
    });
    expect(link).toHaveAttribute(
      "href",
      "https://github.com/Josiane-Goncalves/cuidarbem.git",
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("does not create a false link when repositoryUrl is absent", () => {
    render(
      <MissionCard
        active
        mission={{ ...missions[0], repositoryUrl: undefined }}
      />,
    );

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.getByText("URL do repositório pendente")).toBeInTheDocument();
  });

  it("gives every confirmed repository a translated accessible name", async () => {
    const { rerender } = render(
      <>{missions.map((mission) => <MissionCard active={false} key={mission.id} mission={mission} />)}</>,
    );

    for (const title of ["cuidarbem", "Prado em Dia", "Ride Wars League"]) {
      expect(
        screen.getByRole("link", {
          name: `Abrir repositório do ${title} no GitHub`,
        }),
      ).toBeInTheDocument();
    }

    await i18n.changeLanguage("en");
    rerender(
      <>{missions.map((mission) => <MissionCard active={false} key={mission.id} mission={mission} />)}</>,
    );
    expect(
      screen.getByRole("link", { name: "Open cuidarbem repository on GitHub" }),
    ).toBeInTheDocument();
  });
});
