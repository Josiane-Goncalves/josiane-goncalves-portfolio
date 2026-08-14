import { useTranslation } from "react-i18next";

const channels = ["EMAIL", "LINKEDIN", "GITHUB"];

export function ContactHud() {
  const { t } = useTranslation();

  return (
    <footer
      aria-label={t("shell.contactHud")}
      className="mx-auto mt-4 max-w-[1800px] border border-[var(--hud-border)] bg-[rgba(3,6,4,.94)] px-4 py-3"
      id="contact"
    >
      <div className="flex items-center justify-between gap-5 max-[720px]:flex-col max-[720px]:items-start">
        <div>
          <span className="block text-[10px] tracking-[.2em] text-mission-amber">
            {t("shell.contactHud")}
          </span>
          <strong className="mt-1 block text-xs tracking-[.14em] text-system-lime">
            {t("shell.contactPending")}
          </strong>
        </div>

        <ul className="flex flex-wrap gap-2" aria-label={t("shell.contactChannels")}>
          {channels.map((channel) => (
            <li
              className="border border-system-lime/20 px-3 py-2 text-[10px] tracking-[.14em] text-[var(--hud-text-muted)]"
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
