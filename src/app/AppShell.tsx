import type { PropsWithChildren, ReactNode } from "react";
import { useTranslation } from "react-i18next";

import { LanguageSelector } from "../components/LanguageSelector";
import { ContactHud } from "../features/contacts/ContactHud";
import { MobileNavigation } from "../features/navigation/MobileNavigation";
import { SideNavigation } from "../features/navigation/SideNavigation";

type AppShellProps = PropsWithChildren<{
  identity: ReactNode;
  characterStage: ReactNode;
  systemStatus: ReactNode;
  alia: ReactNode;
  certifications: ReactNode;
  condition: ReactNode;
  clinicalSignal: ReactNode;
  quickContact: ReactNode;
  softSkills: ReactNode;
}>;

export function AppShell({
  identity,
  characterStage,
  systemStatus,
  alia,
  certifications,
  condition,
  clinicalSignal,
  quickContact,
  softSkills,
  children,
}: AppShellProps) {
  const { t } = useTranslation();

  return (
    <div className="app-shell pixel-grid">
      <a className="app-shell__skip-link" href="#main-content">
        {t("shell.skipToContent")}
      </a>

      <div aria-hidden="true" className="app-shell__frame" />
      <div aria-hidden="true" className="scanlines app-shell__scanlines" />

      <header
        aria-label={t("shell.systemHeader")}
        className="system-header"
      >
        <span className="system-header__brand">JOSIANE.G.DEV</span>
        <span className="system-header__interface">
          {t("shell.systemInterface")}
        </span>
        <div className="system-header__operations">
          <span className="system-header__online">
            <span aria-hidden="true" />
            {t("shell.systemOnline")}
          </span>
          <LanguageSelector />
        </div>
      </header>

      <main className="app-shell__main" id="main-content">
        <section
          aria-label={t("shell.primaryWorkspace")}
          className="app-shell__workspace"
        >
          <div className="app-shell__left" id="profile">
            {identity}
            <SideNavigation />

            <div className="app-shell__mobile-navigation">
              <MobileNavigation />
            </div>

            <div className="app-shell__condition">{condition}</div>
          </div>

          <div className="app-shell__center">
            <div className="app-shell__stage" id="character">
              {characterStage}
            </div>

            <div className="app-shell__clinical-signal">
              {clinicalSignal}
            </div>

            <div className="app-shell__certifications" id="certifications">
              {certifications}
            </div>
          </div>

          <aside
            aria-label={t("shell.systemModules")}
            className="app-shell__rail"
          >
            <div id="status">{systemStatus}</div>
            <div>{quickContact}</div>
            <div id="alia">{alia}</div>
            <div>{softSkills}</div>
          </aside>
        </section>

        <div className="app-shell__lower">{children}</div>
      </main>

      <ContactHud />
    </div>
  );
}
