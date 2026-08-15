import type { CSSProperties, KeyboardEvent, Ref } from "react";
import { useTranslation } from "react-i18next";

import type { Mission } from "../../data/missions";
import { MissionMeter } from "./MissionMeter";

type MissionCarouselProps = {
  activeIndex: number;
  detailId: string;
  missions: readonly Mission[];
  onNext: () => void;
  onOpen: () => void;
  onPrevious: () => void;
  onSelect: (index: number) => void;
  openButtonRef: Ref<HTMLButtonElement>;
  rotationStep: number;
};

function getRelativePosition(index: number, activeIndex: number, total: number) {
  let relativePosition = index - activeIndex;

  if (relativePosition > total / 2) relativePosition -= total;
  if (relativePosition < -total / 2) relativePosition += total;

  return relativePosition;
}

function formatCounter(value: number) {
  return String(value).padStart(2, "0");
}

export function MissionCarousel({
  activeIndex,
  detailId,
  missions,
  onNext,
  onOpen,
  onPrevious,
  onSelect,
  openButtonRef,
  rotationStep,
}: MissionCarouselProps) {
  const { t } = useTranslation();
  const anglePerMission = 360 / missions.length;
  const activeMission = missions[activeIndex];

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      onPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      onNext();
    }
  };

  return (
    <section
      aria-label={t("missions.carouselLabel")}
      className="mission-carousel"
      id={detailId}
      onKeyDown={handleKeyDown}
    >
      <div aria-hidden="true" className="mission-carousel__axis" />

      <div className="mission-carousel__viewport">
        <div
          aria-hidden="true"
          className="mission-carousel__glow"
          data-mission-glow={activeIndex + 1}
          key={activeMission.id}
        />
        <div className="mission-carousel__scene">
          <div
            className="mission-carousel__wheel"
            style={{
              transform: `rotateY(${-rotationStep * anglePerMission}deg)`,
            }}
          >
            {missions.map((mission, index) => {
              const isActive = index === activeIndex;
              const relativePosition = getRelativePosition(
                index,
                activeIndex,
                missions.length,
              );
              const translationPath = `missions.items.${mission.translationKey}`;
              const title = t(`${translationPath}.title`);
              const cardStyle = {
                "--mission-card-facing": `${-relativePosition * anglePerMission}deg`,
                transform: `rotateY(${index * anglePerMission}deg) translateZ(var(--mission-carousel-radius))`,
              } as CSSProperties;

              return (
                <div
                  className="mission-carousel__item"
                  data-position={
                    isActive
                      ? "current"
                      : relativePosition < 0
                        ? "previous"
                        : "next"
                  }
                  key={mission.id}
                  style={cardStyle}
                >
                  <article
                    aria-current={isActive ? "true" : undefined}
                    aria-label={`${mission.code} // ${title}`}
                    className="mission-carousel__card"
                  >
                    <button
                      aria-label={t("missions.selectMission", { title })}
                      className="mission-carousel__select"
                      onClick={() => onSelect(index)}
                      type="button"
                    >
                      <span className="mission-carousel__topline">
                        <span className="mission-carousel__code">{mission.code}</span>
                        {mission.status ? (
                          <span className="mission-carousel__status">
                            <span aria-hidden="true">◐</span>
                            {t(`missions.status.${mission.status}`)}
                          </span>
                        ) : null}
                      </span>

                      <strong className="mission-carousel__title">{title}</strong>
                      <span className="mission-carousel__summary">
                        {t(`${translationPath}.summary`)}
                      </span>

                      {mission.technologies.length > 0 ? (
                        <span className="mission-carousel__technologies">
                          {mission.technologies.join(" // ")}
                        </span>
                      ) : null}
                    </button>

                    {isActive ? (
                      <button
                        aria-label={t("missions.openFile", { title })}
                        className="mission-carousel__open"
                        onClick={onOpen}
                        ref={openButtonRef}
                        type="button"
                      >
                        {t("missions.openFileAction")} <span aria-hidden="true">→</span>
                      </button>
                    ) : null}
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mission-carousel__controls">
        <button
          aria-label={t("missions.previousMission")}
          className="mission-carousel__control"
          onClick={onPrevious}
          type="button"
        >
          <span aria-hidden="true">←</span> {t("missions.previous")}
        </button>

        <div className="mission-carousel__channel">
          <MissionMeter activeIndex={activeIndex} total={missions.length} />
          <span aria-live="polite" className="mission-carousel__counter">
            {formatCounter(activeIndex + 1)} / {formatCounter(missions.length)}
          </span>
        </div>

        <button
          aria-label={t("missions.nextMission")}
          className="mission-carousel__control"
          onClick={onNext}
          type="button"
        >
          {t("missions.next")} <span aria-hidden="true">→</span>
        </button>
      </div>

      <p aria-live="polite" className="mission-carousel__current">
        {t("missions.currentMissionLabel", {
          code: activeMission.code,
          title: t(`missions.items.${activeMission.translationKey}.title`),
        })}
      </p>
    </section>
  );
}
