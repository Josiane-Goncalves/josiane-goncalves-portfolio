import { describe, expect, it } from "vitest";

import {
  credentials,
  education,
  professionalExperiences,
  professionalProfile,
} from "./professional";

describe("professional data", () => {
  it("uses the approved identity and primary stack", () => {
    expect(professionalProfile.fullName).toBe("JOSIANE GONÇALVES");
    expect(professionalProfile.location).toBe("Uberlândia // MG // Brasil");
    expect(professionalProfile.primaryStack).toEqual([
      "React",
      "TypeScript",
      "Node.js",
      "APIs",
      "PostgreSQL",
    ]);
  });

  it("contains the three approved professional experiences", () => {
    expect(professionalExperiences.map(({ id }) => id)).toEqual([
      "spdm",
      "umc",
      "smr",
    ]);
    expect(professionalExperiences.map(({ organization }) => organization)).toEqual([
      "SPDM — Associação Paulista para o Desenvolvimento da Medicina",
      "Uberlândia Medical Center — UMC",
      "SMR — Socorro Médico e Resgate",
    ]);
  });

  it("keeps education and credentials correctly classified", () => {
    expect(education.map(({ id }) => id)).toEqual(["ads-unicv", "nursing"]);
    expect(credentials.filter(({ type }) => type === "certification")).toHaveLength(1);
    expect(credentials.filter(({ type }) => type === "training")).toHaveLength(5);
    expect(
      credentials.find(({ type }) => type === "certification")?.name,
    ).toBe("AWS Certified Cloud Practitioner");
    expect(credentials).toContainEqual(
      expect.objectContaining({
        id: "networks-ada",
        name: "Redes e Sistemas",
        issuer: "Ada",
      }),
    );
    expect(credentials.some(({ id }) => id === "html-dio")).toBe(false);
  });

  it("keeps credential URLs absent and exposes the approved résumé path", () => {
    expect(credentials.every(({ credentialUrl }) => credentialUrl === undefined)).toBe(true);
    expect(professionalProfile.resumeUrl).toBe(
      "/cv/josiane-goncalves-cv.pdf",
    );
  });
});
