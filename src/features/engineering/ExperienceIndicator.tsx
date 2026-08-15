export function ExperienceIndicator() {
  return (
    <div
      aria-hidden="true"
      className="experience-indicator"
      data-experience-indicator
    >
      <svg className="experience-indicator__rings" viewBox="0 0 64 64">
        <circle className="experience-indicator__outer" cx="32" cy="32" r="27" />
        <circle className="experience-indicator__inner" cx="32" cy="32" r="20" />
        <path className="experience-indicator__segment" d="M 13 20 A 23 23 0 0 1 27 10" />
        <path className="experience-indicator__segment" d="M 37 10 A 23 23 0 0 1 51 20" />
        <path className="experience-indicator__segment" d="M 55 32 A 23 23 0 0 1 50 46" />
        <circle className="experience-indicator__sweep" cx="32" cy="32" r="24" pathLength="100" />
      </svg>
      <span className="experience-indicator__label">
        EXP
        <strong>03</strong>
      </span>
    </div>
  );
}
