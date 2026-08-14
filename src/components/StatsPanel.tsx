import { portfolioStats } from "../data/portfolio";
import { Panel } from "./Panel";
import { HeartRateGraph } from "./HeartRateGraph";

export function StatsPanel() {
  return (
    <div className="grid grid-cols-2 gap-3 max-[560px]:grid-cols-1">
      <Panel title="CONDITION">
        <div className="grid gap-3">
          <div className="grid grid-cols-[auto_1fr] items-center gap-3 max-[560px]:grid-cols-1">
            <div>
              <strong className="block text-[2.4rem] leading-none text-[#9fc96b]">
                100%
              </strong>
              <span className="mt-1 block text-xs tracking-[0.18em] text-[#9fc96b]">
                HEALTH
              </span>
            </div>

            <HeartRateGraph />
          </div>

          <span className="block text-xs tracking-[0.18em] text-[#9fc96b]">
            OPTIMAL
          </span>
        </div>
      </Panel>

      <Panel title="PORTFOLIO STATS">
        <div className="grid gap-2 text-xs">
          {portfolioStats.map(({ id, label, value }) => (
            <div className="flex justify-between" key={id}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
