import { useTranslation } from "react-i18next";

const channels = ["EMAIL", "LINKEDIN", "GITHUB"];

export function ContactHud() {
  const { t } = useTranslation();

  return (
    <footer
      aria-label={t("shell.contactHud")}
      className="mx-auto mt-4 max-w-[1800px] border border-[var(--color-border-muted)] bg-[var(--color-surface-translucent)] px-4 py-3"
      id="contact"
    >
      <div className="flex items-center justify-between gap-5 max-[720px]:flex-col max-[720px]:items-start">
        <div>
          <span className="block font-terminal text-xs tracking-[.16em] text-[var(--color-mission-bright)]">
            {t("shell.contactHud")}
          </span>
          <strong className="mt-1 block text-sm tracking-[.12em] text-[var(--color-system-bright)]">
            {t("shell.contactPending")}
          </strong>
        </div>

        <ul className="flex flex-wrap gap-2" aria-label={t("shell.contactChannels")}>
          {channels.map((channel) => (
            <li
              className="border border-system-lime/20 px-3 py-2 font-terminal text-xs tracking-[.1em] text-[var(--color-text-muted)]"
              key={channel}
            >
              {channel} // {t("shell.pending")}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
