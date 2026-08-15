import { describe, expect, it } from "vitest";

import i18n from "../i18n";
import { missionStatuses, missions } from "./missions";

describe("mission data", () => {
  it("publishes exactly the three approved missions with stable IDs", () => {
    expect(missions).toHaveLength(3);
    expect(missions.map(({ id }) => id)).toEqual([
      "pulseops",
      "prado-em-dia",
      "ride-wars-league",
    ]);
    expect(missions.map(({ code }) => code)).toEqual([
      "MISSION 001",
      "MISSION 002",
      "MISSION 003",
    ]);
  });

  it("uses unique IDs and slugs", () => {
    expect(new Set(missions.map(({ id }) => id)).size).toBe(missions.length);
    expect(new Set(missions.map(({ slug }) => slug)).size).toBe(
      missions.length,
    );
  });

  it("uses valid statuses and technology values", () => {
    for (const mission of missions) {
      if (mission.status) {
        expect(missionStatuses).toContain(mission.status);
      }
      expect(new Set(mission.technologies).size).toBe(
        mission.technologies.length,
      );

      for (const technology of mission.technologies) {
        expect(technology.trim()).not.toBe("");
      }
    }
  });

  it("does not label portfolio documentation progress as project status", () => {
    expect(missions.every(({ status }) => status !== "documenting")).toBe(true);
  });

  it("only accepts valid optional project links", () => {
    for (const mission of missions) {
      for (const link of [mission.repositoryUrl, mission.liveUrl]) {
        if (link) {
          expect(() => new URL(link)).not.toThrow();
          expect(new URL(link).protocol).toMatch(/^https?:$/);
        }
      }
    }
  });

  it("publishes the three confirmed GitHub repositories", () => {
    expect(
      Object.fromEntries(missions.map(({ id, repositoryUrl }) => [id, repositoryUrl])),
    ).toEqual({
      pulseops: "https://github.com/Josiane-Goncalves/pulseops",
      "prado-em-dia": "https://github.com/Josiane-Goncalves/prado-em-dia",
      "ride-wars-league": "https://github.com/Josiane-Goncalves/ride-wars-league",
    });
    expect(missions.every(({ repositoryUrl }) => Boolean(repositoryUrl))).toBe(true);
  });

  it("references available mission content in both languages", () => {
    for (const mission of missions) {
      for (const language of ["pt", "en"]) {
        const basePath = `missions.items.${mission.translationKey}`;

        expect(i18n.exists(`${basePath}.title`, { lng: language })).toBe(true);
        expect(i18n.exists(`${basePath}.summary`, { lng: language })).toBe(
          true,
        );

        for (const section of mission.sections) {
          expect(
            i18n.exists(`${basePath}.sections.${section}`, { lng: language }),
          ).toBe(true);
        }
      }
    }
  });
});
