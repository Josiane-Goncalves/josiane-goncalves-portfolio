import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import i18n from "../../i18n";
import { ContactHud } from "./ContactHud";

describe("ContactHud", () => {
  beforeEach(async () => {
    await i18n.changeLanguage("pt");
  });

  it("renders only the approved contact channels with real destinations", () => {
    const { container } = render(<ContactHud />);

    expect(screen.getByRole("link", { name: /email/i })).toHaveAttribute(
      "href",
      "mailto:josypropy@gmail.com",
    );
    const github = screen.getByRole("link", { name: /github/i });
    const linkedin = screen.getByRole("link", { name: /linkedin/i });

    expect(github).toHaveAttribute(
      "href",
      "https://github.com/Josiane-Goncalves",
    );
    expect(linkedin).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/josianecgoncalves",
    );
    expect(github).toHaveAttribute("rel", "noopener noreferrer");
    expect(linkedin).toHaveAttribute("rel", "noopener noreferrer");
    expect(screen.getByText("Uberlândia // MG // Brasil")).toBeInTheDocument();
    expect(container.querySelector('a[href="#"]')).not.toBeInTheDocument();
  });

  it("does not expose a telephone or a fictitious résumé link", () => {
    const { container } = render(<ContactHud />);

    expect(container).not.toHaveTextContent(/telefone|phone|whatsapp|\+55/i);
    expect(screen.queryByRole("link", { name: /currículo|résumé|cv/i })).not.toBeInTheDocument();
  });
});
