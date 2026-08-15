import { describe, expect, it } from "vitest";

import {
  aliaWorkflows,
  coreTechnologies,
  engineeringAreas,
  systemOverview,
} from "./engineering";

function expectUnique(values: readonly string[]) {
  expect(new Set(values).size).toBe(values.length);
}

describe("engineering data", () => {
  it("uses the confirmed core technology list without scores", () => {
    expect(coreTechnologies).toEqual([
      "React",
      "TypeScript",
      "Node.js",
      "APIs",
      "PostgreSQL",
    ]);
  });

  it("uses unique stable identifiers", () => {
    expectUnique(engineeringAreas.map(({ id }) => id));
    expectUnique(systemOverview.map(({ id }) => id));
    expectUnique(aliaWorkflows.map(({ id }) => id));
  });

  it("groups the approved engineering capabilities without scores", () => {
    expect(engineeringAreas.map(({ id }) => id)).toEqual([
      "frontend",
      "backend",
      "data",
      "cloud",
      "engineering",
      "delivery",
    ]);
    expect(
      engineeringAreas.flatMap(({ technologies }) => technologies),
    ).toContain("React Router");
    expect(
      engineeringAreas.flatMap(({ capabilities }) => capabilities),
    ).toContain("tddWhenApplicable");
    expect(
      engineeringAreas.find(({ id }) => id === "cloud")?.technologies,
    ).toEqual(["AWS", "Linux"]);
    expect(
      engineeringAreas.find(({ id }) => id === "delivery")?.technologies,
    ).not.toContain("Linux");
  });

  it("reports every currently available system module with a factual status", () => {
    const values = Object.fromEntries(
      systemOverview.map(({ id, valueKey }) => [id, valueKey]),
    );

    expect(values).toEqual({
      interface: "ready",
      languages: "bilingual",
      missions: "threeProjects",
      engineering: "matrixAndLog",
      character: "integrated",
      contact: "available",
    });
  });
});
