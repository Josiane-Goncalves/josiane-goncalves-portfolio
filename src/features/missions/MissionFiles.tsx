import { useId, useState } from "react";
import { useTranslation } from "react-i18next";

import { missions } from "../../data/missions";
import { MissionCard } from "./MissionCard";
import { MissionDetail } from "./MissionDetail";

export function MissionFiles() {
  const { t } = useTranslation();
  const titleId = useId();
  const [selectedMissionId, setSelectedMissionId] = useState(missions[0].id);
  const selectedMission =
    missions.find(({ id }) => id === selectedMissionId) ?? missions[0];

  return (
    <section
      aria-labelledby={titleId}
      className="border border-mission-amber/35 bg-[rgba(3,6,4,.94)] shadow-[0_22px_60px_rgba(0,0,0,.32)]"
    >
      <div className="flex items-center justify-between gap-4 border-b border-mission-amber/25 px-5 py-4">
        <h2
          className="font-heading text-xl font-semibold uppercase tracking-[.14em] text-mission-amber"
          id={titleId}
        >
          {t("missions.title")}
        </h2>
        <span className="text-[9px] uppercase tracking-[.18em] text-[var(--hud-text-muted)]">
          02 / 03 {t("missions.defined")}
        </span>
      </div>

      <div className="grid grid-cols-[300px_minmax(0,1fr)] gap-4 p-4 max-[900px]:grid-cols-1">
        <div>
          <span className="mb-3 block text-[10px] uppercase tracking-[.18em] text-[var(--hud-text-muted)]">
            {t("missions.index")}
          </span>
          <div className="grid gap-2">
            {missions.map((mission) => (
              <MissionCard
                active={mission.id === selectedMission.id}
                key={mission.id}
                mission={mission}
                onSelect={setSelectedMissionId}
              />
            ))}

            <div
              aria-label={t("missions.thirdSlot")}
              className="border border-dashed border-[var(--hud-border)] p-4 text-[var(--hud-text-muted)]"
            >
              <span className="text-[10px] tracking-[.2em]">MF-03</span>
              <strong className="mt-3 block text-xs uppercase tracking-[.12em]">
                {t("missions.thirdSlot")}
              </strong>
            </div>
          </div>
        </div>

        <MissionDetail mission={selectedMission} />
      </div>
    </section>
  );
}
