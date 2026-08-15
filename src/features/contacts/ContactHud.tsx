import { useTranslation } from "react-i18next";

import {
  contactChannels,
  professionalProfile,
} from "../../data/professional";

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
        <strong>
          <span aria-hidden="true" className="contact-hud__availability-dot" />
          {t("profile.availability")}
        </strong>
      </div>

      <ul aria-label={t("shell.contactChannels")}>
        {contactChannels.map(({ external, href, id, label, value }) => (
          <li key={id}>
            <a
              aria-label={`${label}: ${value}`}
              href={href}
              rel={external ? "noopener noreferrer" : undefined}
              target={external ? "_blank" : undefined}
            >
              {label} // {value}
            </a>
          </li>
        ))}
        {professionalProfile.resumeUrl ? (
          <li>
            <a
              aria-label={t("shell.downloadResume")}
              href={professionalProfile.resumeUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              {t("shell.curriculum")} // PDF
            </a>
          </li>
        ) : null}
      </ul>

      <span className="contact-hud__location">
        {professionalProfile.location}
      </span>
    </footer>
  );
}
