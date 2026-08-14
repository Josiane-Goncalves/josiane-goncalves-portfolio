import { useTranslation } from "react-i18next";

import { experiences } from "../data/portfolio";
import { Panel } from "./Panel";

export function ExperiencePanel() {
  const { t } = useTranslation();

  return (
    <Panel title={t("common.experience")}>
      <div className="grid gap-4">
        {experiences.map((experienceId) => {
          const translationPath = `experience.items.${experienceId}`;

          return (
            <article
              className="relative border-l border-[#5f6843] pl-4.5"
              key={experienceId}
            >
              <span className="absolute -left-1 top-1 h-1.75 w-1.75 bg-terminal-green shadow-[0_0_8px_#9ebc5a]" />

              <time className="text-xs text-terminal-green">
                {t(`${translationPath}.period`)}
              </time>

              <h3 className="mb-0.5 mt-1 text-[15px] text-[#d3ae69]">
                {t(`${translationPath}.role`)}
              </h3>

              <strong className="text-xs text-[#c6c2b1]">
                {t(`${translationPath}.company`)}
              </strong>

              <p className="text-xs leading-[1.45] text-[#9a9b90]">
                {t(`${translationPath}.description`)}
              </p>
            </article>
          );
        })}
      </div>
    </Panel>
  );
}
