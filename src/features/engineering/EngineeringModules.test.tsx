import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import i18n from "../../i18n";
import { AliaModule } from "../alia/AliaModule";
import { CertificationsPanel } from "../certifications/CertificationsPanel";
import { EngineeringLog } from "./EngineeringLog";
import { EngineeringMatrix } from "./EngineeringMatrix";
import { SystemStatus } from "../status/SystemStatus";

describe("engineering modules", () => {
  beforeEach(async () => {
    await i18n.changeLanguage("pt");
  });

  it("renders engineering status without arbitrary percentages", () => {
    render(
      <>
        <SystemStatus />
        <EngineeringMatrix />
        <EngineeringLog />
        <CertificationsPanel />
      </>,
    );

    expect(screen.queryByText(/\d+%/)).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Engineering Matrix" }),
    ).toBeInTheDocument();
  });

  it("presents A.L.I.A. as information rather than a chatbot", () => {
    render(<AliaModule />);

    expect(
      screen.getByRole("heading", { level: 2, name: "A.L.I.A." }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
  });
});
