import { describe, expect, it } from "vitest";

import {
  aliaWorkflows,
  coreTechnologies,
  engineeringTracks,
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
    expectUnique(engineeringTracks.map(({ id }) => id));
    expectUnique(systemStatuses.map(({ id }) => id));
    expectUnique(aliaWorkflows.map(({ id }) => id));
  });
});
