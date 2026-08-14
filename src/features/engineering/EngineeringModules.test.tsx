import { render, screen, within } from "@testing-library/react";
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

  it("renders the confirmed engineering areas without arbitrary scores", () => {
    const { container } = render(
      <>
        <SystemStatus />
        <EngineeringMatrix />
      </>,
    );

    expect(container).not.toHaveTextContent(/\d+%/);
    for (const area of [
      "Frontend",
      "Backend / APIs",
      "Data",
      "Engineering",
      "Environment / Delivery",
    ]) {
      expect(screen.getByRole("heading", { level: 3, name: area })).toBeInTheDocument();
    }
    expect(screen.getByText("TDD quando aplicável")).toBeInTheDocument();
  });

  it("renders only the two approved professional experiences", () => {
    render(<EngineeringLog />);

    expect(screen.getByRole("heading", { name: /SPDM/i })).toBeInTheDocument();
    expect(screen.getByText("Auxiliar Técnico em Equipamentos Médicos")).toBeInTheDocument();
    expect(screen.getByText("abr/2020 — atual")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Uberlândia Medical Center/i })).toBeInTheDocument();
    expect(screen.getByText("Técnica de Enfermagem")).toBeInTheDocument();
    expect(screen.getByText("mai/2025 — jan/2026")).toBeInTheDocument();
    expect(screen.queryByText(/PDA Soluções|Freelancer/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/desenvolvedora? (?:na|da) (?:SPDM|UMC)/i)).not.toBeInTheDocument();
  });

  it("renders the approved education and engineering workflow", () => {
    render(<EngineeringLog />);

    expect(screen.getByText("Tecnologia em Análise e Desenvolvimento de Sistemas")).toBeInTheDocument();
    expect(screen.getByText("UniCV")).toBeInTheDocument();
    expect(screen.getByText("Concluído em 2026")).toBeInTheDocument();
    expect(screen.getByText("Técnico em Enfermagem")).toBeInTheDocument();
    expect(screen.getByText("Escola Técnica Santa Edwiges")).toBeInTheDocument();
    expect(screen.getByText("TDD quando aplicável.")).toBeInTheDocument();
    expect(screen.getByText("RED")).toBeInTheDocument();
    expect(screen.getByText("GREEN")).toBeInTheDocument();
    expect(screen.getByText("REFACTOR")).toBeInTheDocument();
  });

  it("separates the professional certification from complementary training", () => {
    render(<CertificationsPanel />);

    const certificationGroup = screen.getByRole("group", { name: "Certificação" });
    const trainingGroup = screen.getByRole("group", { name: "Formações complementares" });

    expect(within(certificationGroup).getByText("AWS Certified Cloud Practitioner")).toBeInTheDocument();
    expect(within(certificationGroup).getByText("Amazon Web Services")).toBeInTheDocument();
    expect(within(trainingGroup).getByText("AWS re/Start")).toBeInTheDocument();
    expect(within(trainingGroup).getByText("Formação Front-End")).toBeInTheDocument();
    expect(within(certificationGroup).queryByText("AWS re/Start")).not.toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("presents A.L.I.A. as supervised implementation support", () => {
    render(<AliaModule />);

    expect(screen.getByText("Assistente Lógica de Implementação e Apoio")).toBeInTheDocument();
    expect(screen.getByText(/revisão humana/i)).toBeInTheDocument();
    expect(screen.getByText(/validação humana/i)).toBeInTheDocument();
    expect(screen.getByText(/decisão humana/i)).toBeInTheDocument();
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
  });
});
