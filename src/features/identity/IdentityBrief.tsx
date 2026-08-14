import { useTranslation } from "react-i18next";

import { Panel } from "../../components/Panel";

const primaryStack = ["REACT", "TYPESCRIPT", "NODE.JS", "APIs", "POSTGRESQL"];

export function IdentityBrief() {
  const { t } = useTranslation();

  return (
    <Panel className="h-full" title={t("shell.identityBrief")}>
      <div className="flex h-full min-h-80 flex-col justify-between gap-8">
        <div>
          <span className="text-[10px] tracking-[.22em] text-mission-amber">
            {t("shell.operativeRecord")}
          </span>
          <p className="mt-3 font-heading text-[clamp(1.8rem,3vw,3rem)] font-bold uppercase leading-[.9] tracking-[.04em] text-[var(--hud-text)]">
            JOSIANE
            <span className="block text-system-lime">GONÇALVES</span>
          </p>
          <p className="mt-5 border-l-2 border-system-lime pl-3 text-sm uppercase leading-5 tracking-[.1em] text-[var(--hud-text-muted)]">
            {t("profile.role")}
          </p>
        </div>

        <div>
          <span className="mb-3 block text-[10px] tracking-[.2em] text-[var(--hud-text-muted)]">
            {t("shell.coreStack")}
          </span>
          <ul className="flex flex-wrap gap-2" aria-label={t("shell.coreStack")}>
            {primaryStack.map((technology) => (
              <li
                className="border border-system-lime/25 bg-system-lime/5 px-2 py-1 text-[10px] tracking-[.1em] text-system-lime"
                key={technology}
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Panel>
  );
}
