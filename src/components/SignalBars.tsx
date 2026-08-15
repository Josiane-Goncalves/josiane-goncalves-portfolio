const signalPatterns = [
  [2, 5, 7, 3, 6, 2, 5],
  [5, 3, 7, 2, 6, 5, 3],
  [3, 6, 2, 7, 5, 3, 6],
  [6, 2, 5, 7, 3, 6, 2],
  [2, 7, 5, 3, 6, 2, 5],
] as const;

type SignalBarsProps = {
  pattern?: number;
  className?: string;
  size?: "compact" | "wide";
  variant?: "system" | "mission" | "ai";
};

export function SignalBars({
  pattern = 0,
  className = "",
  size = "compact",
  variant = "system",
}: SignalBarsProps) {
  const levels = signalPatterns[pattern % signalPatterns.length];

  return (
    <span
      aria-hidden="true"
      className={`signal-bars ${className}`}
      data-signal-bars=""
      data-size={size}
      data-variant={variant}
    >
      {levels.map((level, index) => (
        <span data-level={level} key={`${level}-${index}`} />
      ))}
    </span>
  );
}
