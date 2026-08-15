import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import i18n from "../../i18n";
import { AliaModule } from "../alia/AliaModule";
import { CertificationsPanel } from "../certifications/CertificationsPanel";
import { EngineeringLog } from "./EngineeringLog";
import { EngineeringMatrix } from "./EngineeringMatrix";
import { EngineeringProcess } from "./EngineeringProcess";
import { SystemStatus } from "../status/SystemStatus";

describe("engineering modules", () => {
  beforeEach(async () => {
    await i18n.changeLanguage("pt");
  });

  it("renders the confirmed engineering areas as decorative signal activity", async () => {
    const { container, rerender } = render(<EngineeringMatrix />);

    expect(container).not.toHaveTextContent(/\d+%/);
    for (const area of [
      "Frontend",
      "Backend / APIs",
      "Data",
      "Cloud / Infrastructure",
      "Engineering",
      "Environment / Delivery",
    ]) {
      expect(screen.getByRole("heading", { level: 3, name: area })).toBeInTheDocument();
    }
    expect(screen.getByText("AWS")).toBeInTheDocument();
    expect(screen.getByText("Linux")).toBeInTheDocument();
    expect(screen.queryByText("AWS // Fundamentos")).not.toBeInTheDocument();
    expect(screen.queryByText("Tecnologias principais")).not.toBeInTheDocument();
    expect(screen.getByText("TDD quando aplicável")).toBeInTheDocument();

    const signals = container.querySelectorAll("[data-signal-bars]");

    expect(signals).toHaveLength(6);
    for (const signal of signals) {
      expect(signal).toHaveAttribute("aria-hidden", "true");
    }
    expect(container.querySelector('[role="progressbar"]')).not.toBeInTheDocument();
    expect(container.querySelector("progress")).not.toBeInTheDocument();
    expect(container.querySelector("[aria-valuenow]")).not.toBeInTheDocument();
    expect(container.querySelector("[aria-valuemin]")).not.toBeInTheDocument();
    expect(container.querySelector("[aria-valuemax]")).not.toBeInTheDocument();
    expect(container.querySelector("[data-score]")).not.toBeInTheDocument();

    for (const area of [
      "Frontend",
      "Backend / APIs",
      "Data",
      "Cloud / Infrastructure",
      "Engineering",
      "Environment / Delivery",
    ]) {
      const areaSection = screen.getByRole("heading", { level: 3, name: area }).closest("section");
      expect(areaSection?.querySelectorAll("[data-signal-bars]")).toHaveLength(1);
    }

    await i18n.changeLanguage("en");
    rerender(<EngineeringMatrix />);

    expect(
      screen.getByRole("heading", { level: 3, name: "Cloud / Infrastructure" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Data modeling")).toBeInTheDocument();
    expect(screen.queryByText("AWS // Fundamentals")).not.toBeInTheDocument();
  });

  it("renders the three approved professional experiences", () => {
    render(<EngineeringLog />);

    expect(screen.getByRole("heading", { name: /SPDM/i })).toBeInTheDocument();
    expect(screen.getByText("Auxiliar Técnico em Equipamentos Médicos")).toBeInTheDocument();
    expect(screen.getByText("abr/2020 — atual")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Uberlândia Medical Center/i })).toBeInTheDocument();
    expect(screen.getByText("Técnica de Enfermagem")).toBeInTheDocument();
    expect(screen.getByText("mai/2025 — jan/2026")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "SMR — Socorro Médico e Resgate" })).toBeInTheDocument();
    expect(screen.getByText("Socorrista")).toBeInTheDocument();
    expect(screen.getByText("nov/2018 — abr/2021")).toBeInTheDocument();
    expect(screen.queryByText(/PDA Soluções|Freelancer/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/desenvolvedora? (?:na|da) (?:SPDM|UMC)/i)).not.toBeInTheDocument();
  });

  it("presents factual education without quantitative or decorative progress in PT and EN", async () => {
    const { container, rerender } = render(<CertificationsPanel />);

    expect(container.querySelector(".certifications-panel")).toHaveAttribute(
      "data-variant",
      "credential",
    );
    expect(
      screen.getByRole("heading", { level: 2, name: "Formação & Certificações" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Formação" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Certificação" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Formações complementares" }),
    ).toBeInTheDocument();

    expect(screen.getByText("Tecnologia em Análise e Desenvolvimento de Sistemas")).toBeInTheDocument();
    expect(screen.getByText("UniCV")).toBeInTheDocument();
    expect(screen.getByText("Concluído em 2026")).toBeInTheDocument();
    expect(screen.getByText("Técnico em Enfermagem")).toBeInTheDocument();
    expect(screen.getByText("Escola Técnica Santa Edwiges")).toBeInTheDocument();
    expect(screen.getByText("AWS Certified Cloud Practitioner")).toBeInTheDocument();
    expect(screen.getByText("Redes e Sistemas").closest("li")).toHaveTextContent(
      "Ada",
    );
    expect(screen.queryByText("Formação HTML Web Developer")).not.toBeInTheDocument();
    expect(container.querySelector("[data-formation-trajectory]")).not.toBeInTheDocument();
    expect(container.querySelector("[data-signal-bars]")).not.toBeInTheDocument();
    expect(container.querySelector('[role="progressbar"]')).not.toBeInTheDocument();
    expect(container).not.toHaveTextContent(/\d+%/);

    await i18n.changeLanguage("en");
    rerender(<CertificationsPanel />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Education & Certifications" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Education" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Certification" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Complementary training" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Completed in 2026")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();
  });

  it("keeps Engineering Log focused on professional trajectory", () => {
    render(<EngineeringLog />);

    expect(
      screen.queryByRole("heading", { name: "Formação" }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Engineering Workflow" }),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("UniCV")).not.toBeInTheDocument();
  });

  it("renders the translated Engineering Process without duplicating it in the log", async () => {
    const { rerender } = render(<EngineeringProcess />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Engineering Process" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Parto do problema e do contexto de uso/),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Desenvolvimento incremental",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "TDD // Quando aplicável",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("RED")).toBeInTheDocument();
    expect(screen.getByText("GREEN")).toBeInTheDocument();
    expect(screen.getByText("REFACTOR")).toBeInTheDocument();
    expect(screen.getByText("RED").closest("li")).toHaveAttribute("data-step", "red");
    expect(screen.getByText("GREEN").closest("li")).toHaveAttribute("data-step", "green");
    expect(screen.getByText("REFACTOR").closest("li")).toHaveAttribute("data-step", "refactor");
    expect(
      screen.getByText(/Divido o desenvolvimento em entregas pequenas e verificáveis/),
    ).toBeInTheDocument();

    await i18n.changeLanguage("en");
    rerender(<EngineeringProcess />);

    expect(
      screen.getByRole("heading", { level: 3, name: "Incremental Delivery" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/I start from the problem and usage context/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/I divide development into small, verifiable deliveries/),
    ).toBeInTheDocument();
  });

  it("presents factual portfolio information in System Overview for PT and EN", async () => {
    const { container, rerender } = render(<SystemStatus />);

    expect(
      screen.getByRole("heading", { level: 2, name: "VISÃO DO SISTEMA" }),
    ).toBeInTheDocument();
    expect(container.querySelector("[data-opportunity-radar]")).not.toBeInTheDocument();
    expect(screen.queryAllByText("Operacional")).toHaveLength(0);
    for (const value of [
      "Pronta",
      "PT / EN",
      "03 projetos",
      "Matrix + Log",
      "Integrada",
      "Disponível",
    ]) {
      expect(screen.getByText(value)).toBeInTheDocument();
    }

    await i18n.changeLanguage("en");
    rerender(<SystemStatus />);

    expect(
      screen.getByRole("heading", { level: 2, name: "SYSTEM OVERVIEW" }),
    ).toBeInTheDocument();

    for (const value of [
      "Ready",
      "PT / EN",
      "03 projects",
      "Matrix + Log",
      "Integrated",
      "Available",
    ]) {
      expect(screen.getByText(value)).toBeInTheDocument();
    }
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

  it("presents A.L.I.A. as concise implementation support", () => {
    render(<AliaModule />);

    expect(screen.getByText("Assistente Lógica de Implementação e Apoio")).toBeInTheDocument();
    expect(screen.getByText(/IA aplicada ao desenvolvimento como apoio/)).toBeInTheDocument();
    expect(screen.queryByText(/revisão humana/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/validação humana/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/decisão humana/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/chatbot/i)).not.toBeInTheDocument();
    expect(screen.queryByText("Áreas de apoio")).not.toBeInTheDocument();
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
  });
});
