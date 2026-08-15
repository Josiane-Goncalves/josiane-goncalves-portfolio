const ecgPath = `
  M 0 58 L 26 58
  C 34 58, 38 47, 47 47 C 56 47, 60 58, 69 58
  L 88 58 L 95 64 L 101 15 L 109 72 L 118 58 L 143 58
  C 153 58, 158 41, 171 41 C 184 41, 190 58, 204 58 L 220 58
  L 246 58
  C 254 58, 258 47, 267 47 C 276 47, 280 58, 289 58
  L 308 58 L 315 64 L 321 15 L 329 72 L 338 58 L 363 58
  C 373 58, 378 41, 391 41 C 404 41, 410 58, 424 58 L 440 58
  L 466 58
  C 474 58, 478 47, 487 47 C 496 47, 500 58, 509 58
  L 528 58 L 535 64 L 541 15 L 549 72 L 558 58 L 583 58
  C 593 58, 598 41, 611 41 C 624 41, 630 58, 644 58 L 660 58
`;

export function HeartRateGraph() {
  return (
    <div aria-hidden="true" className="clinical-signal__graph">
      <div className="clinical-signal__grid" />

      <svg
        aria-hidden="true"
        className="heartbeat-track"
        focusable="false"
        preserveAspectRatio="none"
        viewBox="0 0 660 96"
      >
        <path
          className="heartbeat-line heartbeat-line--base"
          d={ecgPath}
          fill="none"
          strokeWidth="2.5"
        />
        <path
          className="heartbeat-line heartbeat-scan"
          d={ecgPath}
          fill="none"
          pathLength="1"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}
