import { useTranslation } from "react-i18next";

import { HudPanel } from "../../components/HudPanel";
import { StatusBadge } from "../../components/StatusBadge";
import { certifications } from "../../data/engineering";

export function CertificationsPanel() {
  const { t } = useTranslation();

  return (
    <HudPanel
      className="h-full"
      headerAccessory={
        <StatusBadge status="pending">
          {t("certifications.verificationPending")}
        </StatusBadge>
      }
      title={t("certifications.title")}
      variant="neutral"
    >
      {certifications.length === 0 ? (
        <div className="border border-dashed border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5">
          <p className="text-base leading-7 text-[var(--color-text-muted)]">
            {t("certifications.empty")}
          </p>
        </div>
      ) : (
        <ul className="mt-6 grid gap-3">
          {certifications.map(({ id, translationKey }) => (
            <li className="border border-[var(--color-border-muted)] p-4" key={id}>
              {t(`certifications.items.${translationKey}`)}
            </li>
          ))}
        </ul>
      )}
    </HudPanel>
  );
}
