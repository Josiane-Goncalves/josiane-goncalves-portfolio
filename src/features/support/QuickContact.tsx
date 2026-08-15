import { useTranslation } from "react-i18next";

import { HudPanel } from "../../components/HudPanel";
import { contactChannels, professionalProfile } from "../../data/professional";

export function QuickContact() {
  const { t } = useTranslation();

  return (
    <HudPanel
      bodyClassName="quick-contact__body"
      className="quick-contact"
      title={t("quickContact.title")}
      variant="system"
    >
      <nav aria-label={t("quickContact.navigationLabel")}>
        <ul className="quick-contact__links">
          {contactChannels.map(({ external, href, id, label }) => (
            <li key={id}>
              <a
                href={href}
                rel={external ? "noopener noreferrer" : undefined}
                target={external ? "_blank" : undefined}
              >
                {label}
              </a>
            </li>
          ))}
          {professionalProfile.resumeUrl ? (
            <li>
              <a
                href={professionalProfile.resumeUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                CV
              </a>
            </li>
          ) : null}
        </ul>
      </nav>
      <a className="quick-contact__full-link" href="#contact">
        {t("quickContact.viewContacts")}
        <span aria-hidden="true">→</span>
      </a>
    </HudPanel>
  );
}
