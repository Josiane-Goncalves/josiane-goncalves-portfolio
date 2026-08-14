import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";

import i18n from "../../i18n";
import { SideNavigation } from "./SideNavigation";

describe("SideNavigation", () => {
  beforeEach(async () => {
    window.history.replaceState(null, "", "/");
    await i18n.changeLanguage("pt");
  });

  it("exposes the five game-menu destinations", () => {
    render(<SideNavigation />);

    expect(
      screen.getAllByRole("link").map((link) => link.getAttribute("href")),
    ).toEqual([
      "#profile",
      "#projects",
      "#engineering-log",
      "#experience",
      "#stack",
    ]);
  });

  it("identifies the active destination after navigation", async () => {
    const user = userEvent.setup();
    render(<SideNavigation />);

    const profileLink = screen.getByRole("link", { name: /perfil/i });
    const projectsLink = screen.getByRole("link", { name: /projetos/i });

    expect(profileLink).toHaveAttribute("aria-current", "location");
    await user.click(projectsLink);
    expect(projectsLink).toHaveAttribute("aria-current", "location");
    expect(profileLink).not.toHaveAttribute("aria-current");
  });
});
