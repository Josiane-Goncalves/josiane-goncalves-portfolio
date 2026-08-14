import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";

import i18n from "../../i18n";
import { MissionFiles } from "./MissionFiles";

describe("MissionFiles", () => {
  beforeEach(async () => {
    await i18n.changeLanguage("pt");
  });

  it("allows selecting a documented mission file", async () => {
    const user = userEvent.setup();
    render(<MissionFiles />);

    expect(
      screen.getByRole("button", { name: "PulseOps" }),
    ).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.getByRole("heading", { level: 3, name: "PulseOps" }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Prado em Dia" }));

    expect(
      screen.getByRole("button", { name: "Prado em Dia" }),
    ).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.getByRole("heading", { level: 3, name: "Prado em Dia" }),
    ).toBeInTheDocument();
  });
});
