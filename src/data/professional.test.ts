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

  it("contains only the two approved professional experiences", () => {
    expect(professionalExperiences.map(({ id }) => id)).toEqual([
      "spdm",
      "umc",
    ]);
    expect(professionalExperiences.map(({ organization }) => organization)).toEqual([
      "SPDM — Associação Paulista para o Desenvolvimento da Medicina",
      "Uberlândia Medical Center — UMC",
    ]);
  });

  it("keeps education and credentials correctly classified", () => {
    expect(education.map(({ id }) => id)).toEqual(["ads-unicv", "nursing"]);
    expect(credentials.filter(({ type }) => type === "certification")).toHaveLength(1);
    expect(credentials.filter(({ type }) => type === "training")).toHaveLength(5);
    expect(
      credentials.find(({ type }) => type === "certification")?.name,
    ).toBe("AWS Certified Cloud Practitioner");
  });

  it("does not invent credential or résumé URLs", () => {
    expect(credentials.every(({ credentialUrl }) => credentialUrl === undefined)).toBe(true);
    expect(professionalProfile.resumeUrl).toBeUndefined();
  });
});
