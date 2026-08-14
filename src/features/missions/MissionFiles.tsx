import { useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { missions } from "../../data/missions";
import { MissionCard } from "./MissionCard";
import { MissionDetail } from "./MissionDetail";

export function MissionFiles() {
  const { t } = useTranslation();
  const titleId = useId();
  const detailId = useId();
  const missionControls = useRef<Record<string, HTMLButtonElement | null>>({});
  const [selectedMissionId, setSelectedMissionId] = useState<string | null>(
    null,
  );
  const selectedMission = missions.find(
    ({ id }) => id === selectedMissionId,
  );

  const closeMission = () => {
    if (!selectedMission) return;

    const selectedControl = missionControls.current[selectedMission.id];
    setSelectedMissionId(null);
    selectedControl?.focus();
  };

  return (
    <section aria-labelledby={titleId} className="mission-files">
      <div className="mission-files__header">
        <div>
          <span className="mission-files__eyebrow">PROJECT ARCHIVE // 03</span>
          <h2 id={titleId}>{t("missions.title")}</h2>
        </div>
        <span className="mission-files__count">
          03 / 03 {t("missions.defined")}
        </span>
      </div>

      <div className="mission-files__layout">
        <div className="mission-files__index">
          <span className="mission-files__index-label">{t("missions.index")}</span>
          <ul aria-label={t("missions.index")} className="mission-files__list">
            {missions.map((mission) => (
              <li key={mission.id}>
                <MissionCard
                  active={mission.id === selectedMission?.id}
                  buttonRef={(element) => {
                    missionControls.current[mission.id] = element;
                  }}
                  detailId={detailId}
                  mission={mission}
                  onSelect={setSelectedMissionId}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="mission-files__workspace">
          {selectedMission ? (
            <MissionDetail
              detailId={detailId}
              mission={selectedMission}
              onClose={closeMission}
            />
          ) : (
            <div className="mission-files__idle" id={detailId}>
              <span aria-hidden="true" className="mission-files__idle-reticle" />
              <span>{t("missions.awaitingSelection")}</span>
              <p>{t("missions.selectPrompt")}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
