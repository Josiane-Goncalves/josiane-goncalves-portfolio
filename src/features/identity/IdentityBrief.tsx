import { useTranslation } from "react-i18next";

import { HudPanel } from "../../components/HudPanel";

const primaryStack = ["REACT", "TYPESCRIPT", "NODE.JS", "APIs", "POSTGRESQL"];

export function IdentityBrief() {
  const { t } = useTranslation();

  return (
    <HudPanel
      className="h-full"
      eyebrow={t("shell.operativeRecord")}
      title={t("shell.identityBrief")}
      variant="system"
    >
      <div className="flex h-full min-h-80 flex-col justify-between gap-8">
        <div>
          <p className="font-heading text-[clamp(1.8rem,3vw,3rem)] font-bold uppercase leading-[.95] tracking-[.04em] text-[var(--color-text)]">
            JOSIANE
            <span className="block text-[var(--color-system-bright)]">
              GONÇALVES
            </span>
          </p>
          <p className="mt-5 border-l-2 border-system-lime pl-3 text-sm uppercase leading-6 tracking-[.08em] text-[var(--color-text-muted)]">
            {t("profile.role")}
          </p>
        </div>

        <div>
          <span className="mb-3 block font-terminal text-xs uppercase tracking-[.16em] text-[var(--color-text-muted)]">
            {t("shell.coreStack")}
          </span>
          <ul className="flex flex-wrap gap-2" aria-label={t("shell.coreStack")}>
            {primaryStack.map((technology) => (
              <li
                className="border border-system-lime/30 bg-system-lime/5 px-2 py-1 font-terminal text-xs tracking-[.08em] text-[var(--color-system-bright)]"
                key={technology}
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HudPanel>
  );
}
