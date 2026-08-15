import { useTranslation } from "react-i18next";

import { HudPanel } from "../../components/HudPanel";
import { softSkills } from "../../data/professional";
import { InsightsWaves } from "./InsightsWaves";

export function SoftSkillsPanel() {
  const { t } = useTranslation();

  return (
    <HudPanel
      bodyClassName="soft-skills__body"
      className="soft-skills"
      headerAccessory={
        <span className="soft-skills__insights-label">
          {t("softSkills.insightsLabel")}
        </span>
      }
      title={t("softSkills.title")}
      variant="system"
    >
      <InsightsWaves />
      <ul className="soft-skills__list">
        {softSkills.map((skill) => (
          <li key={skill}>{t(`softSkills.items.${skill}`)}</li>
        ))}
      </ul>
    </HudPanel>
  );
}
