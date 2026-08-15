type MissionMeterProps = {
  activeIndex: number;
  total: number;
};

const segmentPaths = [
  "M 8 26 A 34 34 0 0 1 25 8",
  "M 31 5 A 34 34 0 0 1 51 5",
  "M 57 8 A 34 34 0 0 1 74 26",
] as const;

export function MissionMeter({ activeIndex, total }: MissionMeterProps) {
  return (
    <div
      aria-hidden="true"
      className="mission-meter"
      data-mission-meter
      data-position={activeIndex + 1}
    >
      <span className="mission-meter__label">
        ACTIVE FILE <span>//</span> MISSION CHANNEL
      </span>
      <svg className="mission-meter__dial" viewBox="0 0 82 30">
        {segmentPaths.slice(0, total).map((path, index) => (
          <path
            className="mission-meter__segment"
            d={path}
            data-active={index === activeIndex ? "true" : undefined}
            key={path}
            pathLength="1"
          />
        ))}
      </svg>
    </div>
  );
}
