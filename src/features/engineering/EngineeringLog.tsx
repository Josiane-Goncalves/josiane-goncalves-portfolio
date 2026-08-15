import { useTranslation } from "react-i18next";

import { HudPanel } from "../../components/HudPanel";
import { professionalExperiences } from "../../data/professional";
import { ExperienceIndicator } from "./ExperienceIndicator";

export function EngineeringLog() {
  const { t } = useTranslation();

  return (
    <HudPanel
      className="engineering-log"
      headerAccessory={<ExperienceIndicator />}
      title={t("engineering.logTitle")}
      variant="system"
    >
      <p className="max-w-4xl text-base leading-7 text-[var(--color-text-muted)]">
        {t("professional.trajectory")}
      </p>

      <section className="engineering-log__timeline mt-7" aria-labelledby="experience-title">
        <h3
          className="font-terminal text-xs uppercase tracking-[.16em] text-[var(--color-mission-bright)]"
          id="experience-title"
        >
          {t("professional.experienceTitle")}
        </h3>
        <ol className="engineering-log__entries mt-3">
          {professionalExperiences.map(
            ({ id, organization, skills, translationKey }) => (
              <li
                className="engineering-log__entry"
                key={id}
              >
                <span aria-hidden="true" className="engineering-log__node" />
                <article>
                  <div className="flex items-start justify-between gap-4 max-[640px]:flex-col">
                    <div>
                      <span className="font-terminal text-xs uppercase tracking-[.12em] text-[var(--color-text-muted)]">
                        {t(`professional.experiences.${translationKey}.track`)}
                      </span>
                      <h4 className="mt-1 font-heading text-xl font-semibold text-[var(--color-text)]">
                        {organization}
                      </h4>
                      <p className="mt-1 text-sm font-semibold text-[var(--color-system-bright)]">
                        {t(`professional.experiences.${translationKey}.role`)}
                      </p>
                    </div>
                    <span className="font-terminal text-xs text-[var(--color-mission-bright)]">
                      {t(`professional.experiences.${translationKey}.period`)}
                    </span>
                  </div>
                  <p className="mt-4 max-w-3xl text-sm leading-6 text-[var(--color-text-muted)]">
                    {t(`professional.experiences.${translationKey}.summary`)}
                  </p>
                  <ul className="engineering-log__skills mt-4">
                    {skills.map((skill) => (
                      <li key={skill}>
                        {t(`professional.skills.${skill}`)}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ),
          )}
        </ol>
      </section>

    </HudPanel>
  );
}
