import { Panel } from "./Panel";
import { ProfilePortrait } from "./ProfilePortrait";

export function ProfilePanel() {
  return (
    <Panel title="PROFILE">
      <div className="grid gap-3">
        <ProfilePortrait />

        <div className="flex items-center justify-between border-t border-[#444a35] pt-3 text-[#b8d26a]">
          <span className="text-sm tracking-[0.16em]">STATUS</span>

          <div className="flex items-end gap-4">
            <span className="block h-5 w-0.5 bg-[#72844c]" />
            <span className="block h-7 w-0.5 bg-[#94a95d]" />
            <span className="block h-4 w-0.5 bg-[#72844c]" />
            <span className="block h-6 w-0.5 bg-[#94a95d]" />
          </div>

          <span className="text-sm tracking-[0.16em]">STABLE</span>
        </div>
      </div>
    </Panel>
  );
}
