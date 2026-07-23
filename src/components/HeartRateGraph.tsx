import React from "react";

export function HeartRateGraph() {
  return (
    <div className="relative h-14 overflow-hidden border border-[#454a36] bg-[#0a0d0a]">
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(159,201,107,.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(159,201,107,.10)_1px,transparent_1px)] bg-size-[12px_100%,100%_12px]" />

      <svg
        viewBox="0 0 320 64"
        preserveAspectRatio="none"
        className="heartbeat-track absolute inset-y-0 left-0 h-full w-[200%]"
      >
        <path
          d="
            M0 42 L18 42 L24 42 L28 32 L32 48 L36 8 L42 58 L48 42 L80 42
            L98 42 L104 42 L108 32 L112 48 L116 8 L122 58 L128 42 L160 42
            L178 42 L184 42 L188 32 L192 48 L196 8 L202 58 L208 42 L240 42
            L258 42 L264 42 L268 32 L272 48 L276 8 L282 58 L288 42 L320 42
          "
          fill="none"
          stroke="#9fc96b"
          strokeWidth="2.5"
          className="heartbeat-line"
        />
      </svg>

      <div className="heartbeat-scan absolute top-0 h-full w-10 bg-[linear-gradient(90deg,transparent,rgba(159,201,107,.16),transparent)]" />
    </div>
  );
}
