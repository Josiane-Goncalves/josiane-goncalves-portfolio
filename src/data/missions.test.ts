import { describe, expect, it } from "vitest";

import i18n from "../i18n";
import { missionEvidenceAreas, missions } from "./missions";

describe("mission data", () => {
  it("uses unique IDs and codes", () => {
    expect(new Set(missions.map(({ id }) => id)).size).toBe(missions.length);
    expect(new Set(missions.map(({ code }) => code)).size).toBe(missions.length);
  });

  it("declares every engineering evidence area once", () => {
    for (const mission of missions) {
      expect(mission.evidence.map(({ area }) => area)).toEqual(
        missionEvidenceAreas,
      );
    }
  });

  it("references translations available in both languages", () => {
    for (const { translationKey } of missions) {
      for (const language of ["pt", "en"]) {
        expect(
          i18n.exists(`missions.items.${translationKey}`, { lng: language }),
        ).toBe(true);
      }
    }
  });
});
