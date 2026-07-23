import { skills, stack } from "../data/portfolio";
import { Panel } from "./Panel";
import { DecibelBar } from "./DecibeisBar";

const cartridgeFilters = [
  "",
  "hue-rotate-[28deg]",
  "hue-rotate-[145deg]",
  "hue-rotate-[70deg]",
  "saturate-50",
];

export function SkillsPanel() {
  return (
    <div className="grid gap-3">
      <Panel title="SKILLS">
        <div className="grid gap-2.5">
          {skills.map(([label, value]) => (
            <div
              className="grid grid-cols-[1.2fr_1fr_30px] items-center gap-2 text-xs max-[560px]:grid-cols-1"
              key={label}
            >
              <span>▶ {label}</span>

              <DecibelBar value={value} />

              <strong className="text-right max-[560px]:text-left">
                {value}
              </strong>
            </div>
          ))}
        </div>
      </Panel>

      <Panel title="TECH STACK">
        <div className="grid grid-cols-5 gap-2 max-[560px]:grid-cols-2">
          {stack.map((item, index) => (
            <div
              className="border border-[#34382d] px-1 py-2 text-center"
              key={item}
            >
              <div
                className={`mx-auto h-12 w-4.5 rounded-[7px_7px_3px_3px] border-2 border-ridge border-[#5e5747] bg-[linear-gradient(90deg,#2c2013,#ad7031_50%,#2b1f11)] shadow-[inset_0_0_0_2px_rgba(0,0,0,.45)] ${
                  cartridgeFilters[index % cartridgeFilters.length]
                }`}
              >
                <span className="mt-2.25 block h-2.5 bg-[rgba(183,219,116,.65)]" />
              </div>

              <strong className="mt-2 block text-[10px]">{item}</strong>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
