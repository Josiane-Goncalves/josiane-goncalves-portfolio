import { useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { missions } from "../../data/missions";
import { MissionCard } from "./MissionCard";
import { MissionCarousel } from "./MissionCarousel";
import { MissionDetail } from "./MissionDetail";

function normalizeIndex(value: number, total: number) {
  return ((value % total) + total) % total;
}

function getNearestRotationStep(
  currentStep: number,
  targetIndex: number,
  total: number,
) {
  const currentIndex = normalizeIndex(currentStep, total);
  let distance = targetIndex - currentIndex;

  if (distance > total / 2) distance -= total;
  if (distance < -total / 2) distance += total;

  return currentStep + distance;
}

export function MissionFiles() {
  const { t } = useTranslation();
  const titleId = useId();
  const detailId = useId();
  const openButtonRef = useRef<HTMLButtonElement | null>(null);
  const shouldRestoreOpenFocus = useRef(false);
  const [rotationStep, setRotationStep] = useState(0);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const activeIndex = normalizeIndex(rotationStep, missions.length);
  const selectedMission = missions[activeIndex];

  useEffect(() => {
    if (!isDetailOpen && shouldRestoreOpenFocus.current) {
      shouldRestoreOpenFocus.current = false;
      openButtonRef.current?.focus();
    }
  }, [isDetailOpen]);

  const selectMission = (index: number) => {
    setRotationStep((currentStep) =>
      getNearestRotationStep(currentStep, index, missions.length),
    );
    setIsDetailOpen(false);
  };

  const closeMission = () => {
    shouldRestoreOpenFocus.current = true;
    setIsDetailOpen(false);
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
          <span className="mission-files__index-label">
            {t("missions.index")}
          </span>
          <ul aria-label={t("missions.index")} className="mission-files__list">
            {missions.map((mission) => (
              <li key={mission.id}>
                <MissionCard
                  active={mission.id === selectedMission.id}
                  mission={mission}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="mission-files__workspace">
          {isDetailOpen ? (
            <MissionDetail
              detailId={detailId}
              mission={selectedMission}
              onClose={closeMission}
            />
          ) : (
            <MissionCarousel
              activeIndex={activeIndex}
              detailId={detailId}
              missions={missions}
              onNext={() => setRotationStep((currentStep) => currentStep + 1)}
              onOpen={() => setIsDetailOpen(true)}
              onPrevious={() =>
                setRotationStep((currentStep) => currentStep - 1)
              }
              onSelect={selectMission}
              openButtonRef={openButtonRef}
              rotationStep={rotationStep}
            />
          )}
        </div>
      </div>
    </section>
  );
}
