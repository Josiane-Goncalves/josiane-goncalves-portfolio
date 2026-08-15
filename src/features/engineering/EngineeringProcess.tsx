import { useTranslation } from "react-i18next";

import { HudPanel } from "../../components/HudPanel";
import {
  engineeringProcessSteps,
  incrementalCycle,
  tddCycle,
} from "../../data/professional";

type ProcessSequenceProps = {
  steps: readonly string[];
  translationRoot?: string;
  loop?: boolean;
  variant?: "system" | "mission";
};

function ProcessSequence({
  steps,
  translationRoot,
  loop = false,
  variant = "system",
}: ProcessSequenceProps) {
  const { t } = useTranslation();

  return (
    <ol className="engineering-process__sequence" data-variant={variant}>
      {steps.map((step, index) => (
        <li
          data-step={translationRoot ? undefined : step.toLowerCase()}
          key={step}
        >
          <span>{translationRoot ? t(`${translationRoot}.${step}`) : step}</span>
          {index < steps.length - 1 || loop ? (
            <span aria-hidden="true">
              {loop && index === steps.length - 1 ? "↺" : "→"}
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export function EngineeringProcess() {
  const { t } = useTranslation();

  return (
    <HudPanel
      className="engineering-process"
      title={t("professional.processTitle")}
      variant="neutral"
    >
      <div className="engineering-process__sections">
        <section aria-labelledby="engineering-workflow-title">
          <h3 id="engineering-workflow-title">
            {t("professional.workflowTitle")}
          </h3>
          <ProcessSequence
            steps={engineeringProcessSteps}
            translationRoot="professional.workflow"
          />
          <p>{t("professional.workflowDescription")}</p>
        </section>

        <section aria-labelledby="incremental-delivery-title">
          <h3 id="incremental-delivery-title">
            {t("professional.incrementalTitle")}
          </h3>
          <ProcessSequence
            loop
            steps={incrementalCycle}
            translationRoot="professional.incrementalCycle"
            variant="mission"
          />
          <p>{t("professional.incrementalDescription")}</p>
        </section>

        <section
          aria-labelledby="tdd-process-title"
          className="engineering-process__tdd"
        >
          <div>
            <h3 id="tdd-process-title">
              TDD // {t("professional.whenApplicable")}
            </h3>
            <p>{t("professional.tddDescription")}</p>
          </div>
          <ProcessSequence steps={tddCycle} variant="mission" />
        </section>
      </div>
    </HudPanel>
  );
}
