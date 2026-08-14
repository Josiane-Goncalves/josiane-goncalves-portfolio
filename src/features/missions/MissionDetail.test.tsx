import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { missions } from "../../data/missions";
import i18n from "../../i18n";
import { MissionDetail } from "./MissionDetail";

describe("MissionDetail", () => {
  beforeEach(async () => {
    await i18n.changeLanguage("pt");
  });

  it("renders only the project actions backed by an available URL", () => {
    render(
      <MissionDetail
        detailId="mission-detail-test"
        mission={{
          ...missions[0],
          repositoryUrl: "https://example.com/repository",
        }}
        onClose={vi.fn()}
      />,
    );

    expect(screen.getByRole("link", { name: "Ver repositório" })).toHaveAttribute(
      "href",
      "https://example.com/repository",
    );
    expect(
      screen.queryByRole("link", { name: "Abrir sistema" }),
    ).not.toBeInTheDocument();
  });
});
