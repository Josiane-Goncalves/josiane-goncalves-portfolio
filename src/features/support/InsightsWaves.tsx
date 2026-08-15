export function InsightsWaves() {
  return (
    <div className="insights-waves" data-insights-waves="">
      <svg
        aria-hidden="true"
        className="insights-waves__graphic"
        focusable="false"
        preserveAspectRatio="none"
        viewBox="0 0 320 96"
      >
        <path
          className="insights-waves__line insights-waves__line--primary"
          d="M-24 50C12 18 42 82 78 50S144 18 180 50S246 82 282 50S348 18 384 50"
        />
        <path
          className="insights-waves__line insights-waves__line--secondary"
          d="M-28 62C8 42 40 78 76 58S142 34 178 58S244 78 280 58S346 34 382 58"
        />
        <path
          className="insights-waves__line insights-waves__line--tertiary"
          d="M-22 36C14 22 44 54 80 38S146 20 182 38S248 54 284 38S350 20 386 38"
        />
      </svg>
    </div>
  );
}
