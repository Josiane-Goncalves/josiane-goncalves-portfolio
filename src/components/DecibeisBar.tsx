import { useEffect, useState } from "react";

interface DecibelBarProps {
  value: number;
  segments?: number;
}

export function DecibelBar({ value, segments = 18 }: DecibelBarProps) {
  const activeSegments = Math.round((value / 100) * segments);

  const [heights, setHeights] = useState<number[]>(
    Array.from({ length: segments }, () => 40),
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeights(
        Array.from({ length: segments }, (_, index) => {
          if (index >= activeSegments) {
            return 20;
          }

          return Math.floor(Math.random() * 70) + 30;
        }),
      );
    }, 180);

    return () => window.clearInterval(interval);
  }, [activeSegments, segments]);

  return (
    <div className="flex h-6 flex-1 items-end gap-0.75 overflow-hidden">
      {heights.map((height, index) => {
        const isActive = index < activeSegments;

        return (
          <span
            key={index}
            className={`
              block w-full min-w-0.75
              transition-all duration-150 ease-out
              ${
                isActive
                  ? "bg-lime-400 shadow-[0_0_6px_rgba(163,230,53,0.65)]"
                  : "bg-lime-950"
              }
            `}
            style={{
              height: isActive ? `${height}%` : "20%",
            }}
          />
        );
      })}
    </div>
  );
}
