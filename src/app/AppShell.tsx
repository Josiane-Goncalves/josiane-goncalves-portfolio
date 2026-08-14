import type { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

import { LanguageSelector } from "../components/LanguageSelector";
import { ContactHud } from "../features/contacts/ContactHud";
import { MobileNavigation } from "../features/navigation/MobileNavigation";
import { SideNavigation } from "../features/navigation/SideNavigation";

export function AppShell({ children }: PropsWithChildren) {
  const { t } = useTranslation();

  return (
    <div className="pixel-grid relative min-h-screen bg-[var(--color-background)] px-4 pb-4 pt-4 max-[840px]:px-2 max-[840px]:pt-2">
      <a
        className="sr-only z-50 bg-[var(--color-system-bright)] px-4 py-2 font-semibold text-[var(--color-background)] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        href="#main-content"
      >
        {t("shell.skipToContent")}
      </a>

      <div className="pointer-events-none fixed inset-1.5 z-20 border border-[var(--color-border-muted)]" />
      <div className="scanlines pointer-events-none fixed inset-0 z-30 opacity-[.06]" />

      <header className="relative z-10 mx-auto mb-4 grid min-h-16 max-w-[1800px] grid-cols-[220px_1fr_180px] items-center gap-4 border border-[var(--color-border-muted)] bg-[var(--color-surface-translucent)] px-4 uppercase tracking-[.08em] shadow-[var(--shadow-elevated)] max-[840px]:grid-cols-1 max-[840px]:gap-2 max-[840px]:py-3 max-[840px]:text-center">
        <span className="font-terminal text-xs tracking-[.16em] text-[var(--color-mission-bright)]">
          TACTICAL DEV HUD // 01
        </span>
        <h1 className="text-center font-heading text-[clamp(1rem,1.5vw,1.25rem)] font-semibold tracking-[.1em] text-[var(--color-system-bright)]">
          JOSIANE GONÇALVES // SOFTWARE ENGINEERING TERMINAL
        </h1>
        <div className="flex justify-end max-[840px]:justify-center">
          <LanguageSelector />
        </div>
      </header>

      <div className="relative z-10 mx-auto grid max-w-[1800px] grid-cols-[220px_minmax(0,1fr)] items-start gap-4 max-[980px]:grid-cols-1">
        <SideNavigation />
        <main className="min-w-0" id="main-content">
          <MobileNavigation />
          {children}
        </main>
      </div>

      <div className="relative z-10">
        <ContactHud />
      </div>
    </div>
  );
}
