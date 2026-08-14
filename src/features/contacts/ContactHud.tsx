import { useTranslation } from "react-i18next";

const channels = ["GITHUB", "LINKEDIN", "EMAIL"];

export function ContactHud() {
  const { t } = useTranslation();

  return (
    <footer
      aria-label={t("shell.contactHud")}
      className="contact-hud"
      id="contact"
    >
      <div className="contact-hud__identity">
        <span>{t("shell.contactHud")}</span>
        <strong>{t("shell.contactPending")}</strong>
      </div>

      <ul aria-label={t("shell.contactChannels")}>
        {channels.map((channel) => (
          <li key={channel}>
            {channel} // {t("shell.pending")}
          </li>
        ))}
        <li>
          {t("shell.curriculum")} // {t("shell.pending")}
        </li>
      </ul>

      <span className="contact-hud__location">{t("shell.location")}</span>
    </footer>
  );
}
