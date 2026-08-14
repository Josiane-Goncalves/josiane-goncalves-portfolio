import { useTranslation } from "react-i18next";

import { HudPanel } from "../../components/HudPanel";
import { StatusBadge } from "../../components/StatusBadge";
import { engineeringLogEntries } from "../../data/engineering";

export function EngineeringLog() {
  const { t } = useTranslation();

  return (
    <HudPanel
      className="h-full"
      headerAccessory={
        <StatusBadge status="pending">
          {t("engineering.verificationPending")}
        </StatusBadge>
      }
      title={t("engineering.logTitle")}
      variant="neutral"
    >
      {engineeringLogEntries.length === 0 ? (
        <div className="border border-dashed border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5">
          <p className="max-w-xl text-base leading-7 text-[var(--color-text-muted)]">
            {t("engineering.logEmpty")}
          </p>
        </div>
      ) : (
        <ol className="mt-6 grid gap-3">
          {engineeringLogEntries.map(({ id, translationKey }) => (
            <li className="border border-[var(--color-border-muted)] p-4" key={id}>
              {t(`engineering.logEntries.${translationKey}`)}
            </li>
          ))}
        </ol>
      )}
    </HudPanel>
  );
}
