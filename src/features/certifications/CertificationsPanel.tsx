import { useTranslation } from "react-i18next";

import { HudPanel } from "../../components/HudPanel";
import { StatusBadge } from "../../components/StatusBadge";
import { credentials } from "../../data/professional";

export function CertificationsPanel() {
  const { t } = useTranslation();
  const certifications = credentials.filter(
    ({ type }) => type === "certification",
  );
  const training = credentials.filter(({ type }) => type === "training");

  return (
    <HudPanel
      className="h-full"
      headerAccessory={
        <StatusBadge status="documenting">
          {t("certifications.recordsConfirmed")}
        </StatusBadge>
      }
      title={t("certifications.title")}
      variant="neutral"
    >
      <div aria-label={t("certifications.certification")} role="group">
        <h3 className="font-terminal text-xs uppercase tracking-[.14em] text-[var(--color-mission-bright)]">
          {t("certifications.certification")}
        </h3>
        <ul className="mt-3 grid gap-2">
          {certifications.map(({ id, issuer, name }) => (
            <li
              className="border border-mission-amber/30 bg-mission-amber/5 p-3"
              key={id}
            >
              <strong className="block font-heading text-base text-[var(--color-text)]">
                {name}
              </strong>
              {issuer ? (
                <span className="mt-1 block font-terminal text-xs text-[var(--color-text-muted)]">
                  {issuer}
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>

      <div
        aria-label={t("certifications.training")}
        className="mt-6"
        role="group"
      >
        <h3 className="font-terminal text-xs uppercase tracking-[.14em] text-[var(--color-text-muted)]">
          {t("certifications.training")}
        </h3>
        <ul className="mt-3 grid gap-2">
          {training.map(({ id, issuer, name }) => (
            <li className="border-l border-[var(--color-border)] pl-3" key={id}>
              <strong className="block text-sm font-semibold text-[var(--color-text)]">
                {name}
              </strong>
              {issuer ? (
                <span className="mt-1 block font-terminal text-xs text-[var(--color-text-muted)]">
                  {issuer}
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </HudPanel>
  );
}
