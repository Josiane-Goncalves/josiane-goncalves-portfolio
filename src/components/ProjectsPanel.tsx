import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { projects } from "../data/portfolio";
import { Panel } from "./Panel";

const AUTO_ROTATE_TIME = 4500;
const CLICK_PAUSE_TIME = 1000;

export function ProjectsPanel() {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const resumeTimeoutRef = useRef<number | null>(null);

  const totalProjects = projects.length;
  const anglePerItem = 360 / totalProjects;

  function goToProject(index: number) {
    setActiveIndex(index);
    setIsPaused(true);

    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = window.setTimeout(() => {
      setIsPaused(false);
    }, CLICK_PAUSE_TIME);
  }

  function handlePrevious() {
    const previousIndex =
      activeIndex === 0 ? totalProjects - 1 : activeIndex - 1;

    goToProject(previousIndex);
  }

  function handleNext() {
    const nextIndex = (activeIndex + 1) % totalProjects;

    goToProject(nextIndex);
  }

  useEffect(() => {
    if (isPaused || totalProjects === 0) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        return (currentIndex + 1) % totalProjects;
      });
    }, AUTO_ROTATE_TIME);

    return () => {
      window.clearInterval(interval);
    };
  }, [isPaused, totalProjects]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        window.clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <Panel title={t("common.projects")}>
      <div className="relative overflow-hidden">
        <div className="projects-carousel-mask">
          <div className="projects-carousel-scene">
            <div
              className="projects-carousel-wheel"
              style={{
                transform: `rotateY(${-activeIndex * anglePerItem}deg)`,
              }}
            >
              {projects.map((project, index) => {
                const isActive = index === activeIndex;
                const translationPath = `projects.${project.translationKey}`;

                const projectTitle = t(`${translationPath}.title`);
                const projectStatus = t(`${translationPath}.status`);
                const projectDescription = t(`${translationPath}.description`);

                return (
                  <button
                    key={project.id}
                    type="button"
                    className={`projects-carousel-card ${
                      isActive ? "projects-carousel-card-active" : ""
                    }`}
                    style={{
                      transform: `
                        rotateY(${index * anglePerItem}deg)
                        translateZ(250px)
                      `,
                    }}
                    onClick={() => goToProject(index)}
                    aria-label={projectTitle}
                  >
                    <div className="relative h-full border border-[#4b5040] bg-[#080c09] p-3 text-left">
                      <span className="absolute -left-2 -top-2 z-10 border border-[#4b5040] bg-[#080c09] px-2 py-1 text-xs text-[#e0e99a]">
                        {String(project.id).padStart(2, "0")}
                      </span>

                      <div
                        className={`project-preview project-preview-${project.variant}`}
                      >
                        <span>{projectStatus}</span>
                      </div>

                      <h3 className="mt-3 text-lg tracking-[0.08em] text-[#e3b95f]">
                        {projectTitle}
                      </h3>

                      <p className="mt-2 min-h-14 text-xs leading-5 text-[#d0c8ac]">
                        {projectDescription}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="border border-[#465127] px-2 py-1 text-[9px] text-[#b9d153]"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative z-20 mt-4 flex items-center justify-center gap-5">
          <button
            type="button"
            className="border border-[#515747] bg-[#0b100c] px-5 py-2 text-[#b9d261] transition hover:bg-[#182016]"
            onClick={handlePrevious}
            aria-label={t("common.previousProject")}
          >
            ◀
          </button>

          <span className="min-w-16 text-center tracking-[0.2em] text-[#c3d575]">
            {activeIndex + 1} / {totalProjects}
          </span>

          <button
            type="button"
            className="border border-[#515747] bg-[#0b100c] px-5 py-2 text-[#b9d261] transition hover:bg-[#182016]"
            onClick={handleNext}
            aria-label={t("common.nextProject")}
          >
            ▶
          </button>
        </div>

        <div className="mt-3 flex justify-center gap-2">
          {projects.map((project, index) => {
            const translationPath = `projects.${project.translationKey}`;
            const projectTitle = t(`${translationPath}.title`);

            return (
              <button
                key={project.id}
                type="button"
                onClick={() => goToProject(index)}
                aria-label={`${t("common.goToProject")} ${projectTitle}`}
                className={`h-1.5 transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-[#b9d261] shadow-[0_0_8px_rgba(185,210,97,.8)]"
                    : "w-3 bg-[#3c4233] hover:bg-[#68734a]"
                }`}
              />
            );
          })}
        </div>

        <p className="mt-3 text-center text-[10px] tracking-[0.14em] text-[#6f7852]">
          {isPaused
            ? t("common.rotationPaused")
            : t("common.autoRotationActive")}
        </p>
      </div>
    </Panel>
  );
}
