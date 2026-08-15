import { useTranslation } from "react-i18next";

import { HudPanel } from "../../components/HudPanel";
import { SignalBars } from "../../components/SignalBars";
import { softSkills } from "../../data/professional";

export function SoftSkillsPanel() {
  const { t } = useTranslation();

  return (
    <HudPanel
      bodyClassName="soft-skills__body"
      className="soft-skills"
      title={t("softSkills.title")}
      variant="neutral"
    >
      <ul className="soft-skills__list">
        {softSkills.map((skill) => (
          <li key={skill}>{t(`softSkills.items.${skill}`)}</li>
        ))}
      </ul>
      <SignalBars pattern={2} size="wide" />
    </HudPanel>
  );
}
