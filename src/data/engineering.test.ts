import { describe, expect, it } from "vitest";

import {
  aliaWorkflows,
  coreTechnologies,
  engineeringAreas,
  systemStatuses,
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
    expectUnique(systemStatuses.map(({ id }) => id));
    expectUnique(aliaWorkflows.map(({ id }) => id));
  });

  it("groups the approved engineering capabilities without scores", () => {
    expect(engineeringAreas.map(({ id }) => id)).toEqual([
      "frontend",
      "backend",
      "data",
      "engineering",
      "delivery",
    ]);
    expect(
      engineeringAreas.flatMap(({ technologies }) => technologies),
    ).toContain("React Router");
    expect(
      engineeringAreas.flatMap(({ capabilities }) => capabilities),
    ).toContain("tddWhenApplicable");
  });
});
