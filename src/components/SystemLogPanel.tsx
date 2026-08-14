import { systemLogs } from "../data/portfolio";
import { Panel } from "./Panel";

export function SystemLogPanel() {
  return (
    <Panel title="SYSTEM LOG">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(145,180,78,.08)_1px,transparent_1px)] bg-size-[100%_18px]" />

        <div className="relative grid gap-2">
          {systemLogs.map((log) => (
            <div
              key={log.id}
              className="grid grid-cols-[42px_70px_1fr] gap-2 border-b border-[#29301f] pb-2 text-[10px] leading-4"
            >
              <span className="text-[#68754a]">{log.time}</span>

              <span className="text-[#d1ae57]">[{log.type}]</span>

              <span className="text-[#9fba68]">{log.message}</span>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-2 text-[10px] tracking-[0.16em] text-[#8ba457]">
          <span className="h-2 w-2 animate-pulse bg-[#a7ce62] shadow-[0_0_7px_rgba(167,206,98,.8)]" />
          SYSTEM MONITORING ACTIVE
        </div>
      </div>
    </Panel>
  );
}
