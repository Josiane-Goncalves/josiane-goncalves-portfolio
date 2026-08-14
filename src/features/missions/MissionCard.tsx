import { useTranslation } from "react-i18next";

import type { Mission } from "../../data/missions";

type MissionCardProps = {
  active: boolean;
  mission: Mission;
  onSelect: (missionId: string) => void;
};

export function MissionCard({ active, mission, onSelect }: MissionCardProps) {
  const { t } = useTranslation();
  const title = t(`missions.items.${mission.translationKey}.title`);

  return (
    <button
      aria-label={title}
      aria-pressed={active}
      className={`w-full border p-4 text-left transition ${
        active
          ? "border-mission-amber bg-mission-amber/10 shadow-[inset_3px_0_0_var(--hud-mission-amber)]"
          : "border-mission-amber/20 bg-[#050806] hover:border-mission-amber/50"
      }`}
      onClick={() => onSelect(mission.id)}
      type="button"
    >
      <span className="flex items-center justify-between gap-3">
        <span className="font-terminal text-xs tracking-[.16em] text-[var(--color-mission-bright)]">
          {mission.code}
        </span>
        <span className="font-terminal text-xs uppercase tracking-[.1em] text-[var(--color-text-muted)]">
          {t(`missions.status.${mission.status}`)}
        </span>
      </span>
      <strong className="mt-3 block font-heading text-xl uppercase tracking-[.06em] text-[var(--hud-text)]">
        {title}
      </strong>
    </button>
  );
}
