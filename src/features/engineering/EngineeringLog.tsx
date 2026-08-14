import { useTranslation } from "react-i18next";

import { HudPanel } from "../../components/HudPanel";
import { StatusBadge } from "../../components/StatusBadge";
import {
  education,
  engineeringWorkflow,
  incrementalPractices,
  professionalExperiences,
  tddCycle,
} from "../../data/professional";

export function EngineeringLog() {
  const { t } = useTranslation();

  return (
    <HudPanel
      className="h-full"
      headerAccessory={
        <StatusBadge status="operational">
          {t("professional.trajectoryMapped")}
        </StatusBadge>
      }
      title={t("engineering.logTitle")}
      variant="neutral"
    >
      <p className="max-w-4xl text-base leading-7 text-[var(--color-text-muted)]">
        {t("professional.trajectory")}
      </p>

      <section className="mt-7" aria-labelledby="experience-title">
        <h3
          className="font-terminal text-xs uppercase tracking-[.16em] text-[var(--color-mission-bright)]"
          id="experience-title"
        >
          {t("professional.experienceTitle")}
        </h3>
        <ol className="mt-3 grid gap-3">
          {professionalExperiences.map(
            ({ id, organization, skills, translationKey }) => (
              <li
                className="border border-[var(--color-border-muted)] bg-[var(--color-surface-elevated)] p-4"
                key={id}
              >
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
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <li
                        className="border border-[var(--color-border-muted)] px-2 py-1 font-terminal text-xs text-[var(--color-text-muted)]"
                        key={skill}
                      >
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

      <section className="mt-8" aria-labelledby="education-title">
        <h3
          className="font-terminal text-xs uppercase tracking-[.16em] text-[var(--color-mission-bright)]"
          id="education-title"
        >
          {t("professional.educationTitle")}
        </h3>
        <div className="mt-3 grid grid-cols-2 gap-3 max-[640px]:grid-cols-1">
          {education.map(({ id, institution, primary, translationKey }) => (
            <article
              className="border border-[var(--color-border-muted)] bg-[var(--color-surface-elevated)] p-4"
              data-primary={primary || undefined}
              key={id}
            >
              <h4 className="font-heading text-lg font-semibold text-[var(--color-text)]">
                {t(`professional.education.${translationKey}.course`)}
              </h4>
              <p className="mt-2 text-sm text-[var(--color-system-bright)]">{institution}</p>
              <p className="mt-2 font-terminal text-xs text-[var(--color-text-muted)]">
                {t(`professional.education.${translationKey}.status`)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8" aria-labelledby="workflow-title">
        <h3
          className="font-terminal text-xs uppercase tracking-[.16em] text-[var(--color-mission-bright)]"
          id="workflow-title"
        >
          {t("professional.workflowTitle")}
        </h3>
        <ol className="mt-3 flex flex-wrap items-center gap-2">
          {engineeringWorkflow.map((step, index) => (
            <li className="flex items-center gap-2" key={step}>
              <span className="border border-system-lime/25 px-2 py-1 font-terminal text-xs text-[var(--color-system-bright)]">
                {t(`professional.workflow.${step}`)}
              </span>
              {index < engineeringWorkflow.length - 1 ? (
                <span aria-hidden="true" className="text-[var(--color-border)]">→</span>
              ) : null}
            </li>
          ))}
        </ol>

        <div className="mt-5 grid grid-cols-[auto_minmax(0,1fr)] gap-4 border-l-2 border-system-lime pl-4 max-[540px]:grid-cols-1">
          <div>
            <span className="font-terminal text-xs uppercase tracking-[.12em] text-[var(--color-system-bright)]">
              TDD
            </span>
            <ol className="mt-2 flex flex-wrap gap-2">
              {tddCycle.map((phase) => (
                <li className="font-terminal text-xs text-[var(--color-text)]" key={phase}>
                  {phase}
                </li>
              ))}
            </ol>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              {t("professional.tddWhenApplicable")}
            </p>
          </div>
          <div>
            <span className="font-terminal text-xs uppercase tracking-[.12em] text-[var(--color-text-muted)]">
              {t("professional.incrementalTitle")}
            </span>
            <ul className="mt-2 flex flex-wrap gap-2">
              {incrementalPractices.map((practice) => (
                <li className="font-terminal text-xs text-[var(--color-text-muted)]" key={practice}>
                  {t(`professional.practices.${practice}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </HudPanel>
  );
}
