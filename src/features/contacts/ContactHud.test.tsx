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

    expect(screen.getByRole("contentinfo")).toHaveAttribute("id", "contact");

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
    const resume = screen.getByRole("link", {
      name: "Baixar currículo em PDF",
    });
    expect(resume).toHaveAttribute(
      "href",
      "/cv/josiane-goncalves-cv.pdf",
    );
    expect(resume).not.toHaveAttribute("href", "#");
    expect(resume).toHaveAttribute("target", "_blank");
    expect(resume).toHaveAttribute("rel", "noopener noreferrer");
    expect(github).toHaveAttribute("rel", "noopener noreferrer");
    expect(linkedin).toHaveAttribute("rel", "noopener noreferrer");
    expect(screen.getByText("Uberlândia // MG // Brasil")).toBeInTheDocument();
    expect(container.querySelector('a[href="#"]')).not.toBeInTheDocument();
  });

  it("does not expose a telephone or a fictitious link", () => {
    const { container } = render(<ContactHud />);

    expect(container).not.toHaveTextContent(/telefone|phone|whatsapp|\+55/i);
    expect(container.querySelector('a[href="#"]')).not.toBeInTheDocument();
  });
});
