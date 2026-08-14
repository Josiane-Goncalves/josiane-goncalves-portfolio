import { useId } from "react";
import { useTranslation } from "react-i18next";

import { aliaWorkflows } from "../../data/engineering";

export function AliaModule() {
  const { t } = useTranslation();
  const titleId = useId();

  return (
    <section
      aria-labelledby={titleId}
      className="h-full border border-alia-violet/45 bg-[rgba(12,7,20,.72)] p-5 shadow-[inset_0_0_40px_rgba(167,139,250,.04)]"
    >
      <span className="text-[9px] uppercase tracking-[.22em] text-alia-violet">
        {t("alia.subsystem")}
      </span>
      <h2
        className="mt-2 font-heading text-2xl font-semibold uppercase tracking-[.16em] text-alia-violet"
        id={titleId}
      >
        {t("alia.title")}
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--hud-text-muted)]">
        {t("alia.description")}
      </p>

      <h3 className="mt-6 text-[10px] uppercase tracking-[.18em] text-alia-violet">
        {t("alia.supportAreas")}
      </h3>
      <ul className="mt-3 grid grid-cols-2 gap-2 max-[540px]:grid-cols-1">
        {aliaWorkflows.map(({ id, translationKey }) => (
          <li
            className="border border-alia-violet/25 px-3 py-3 text-xs uppercase tracking-[.1em] text-[var(--hud-text)]"
            key={id}
          >
            {t(`alia.workflows.${translationKey}`)}
          </li>
        ))}
      </ul>

      <div className="mt-6 border-l-2 border-alia-violet pl-4 text-xs leading-5 text-[var(--hud-text-muted)]">
        <p>{t("alia.humanReview")}</p>
        <p>{t("alia.noAutonomy")}</p>
      </div>
    </section>
  );
}
