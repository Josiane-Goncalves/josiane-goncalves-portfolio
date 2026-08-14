import { useId } from "react";
import { useTranslation } from "react-i18next";

export function CharacterStage() {
  const { t } = useTranslation();
  const titleId = useId();

  return (
    <section
      aria-labelledby={titleId}
      className="relative min-h-155 overflow-hidden border border-system-lime/35 bg-[radial-gradient(circle_at_50%_38%,rgba(163,230,53,.12),transparent_28%),linear-gradient(180deg,#071009,#020403)] shadow-[inset_0_0_80px_rgba(0,0,0,.85),0_0_28px_rgba(163,230,53,.06)] max-[840px]:min-h-120"
    >
      <div className="pointer-events-none absolute inset-0 screen-grid text-system-lime opacity-[.06]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_49.8%,rgba(163,230,53,.14)_50%,transparent_50.2%),linear-gradient(transparent_49.8%,rgba(163,230,53,.09)_50%,transparent_50.2%)]" />

      <div className="relative z-10 flex items-center justify-between border-b border-system-lime/20 px-4 py-3">
        <h2
          className="font-terminal text-sm uppercase tracking-[.14em] text-[var(--color-system-bright)]"
          id={titleId}
        >
          {t("shell.operativeName")}
        </h2>
        <span className="font-terminal text-xs tracking-[.14em] text-[var(--color-mission-bright)]">
          {t("shell.visualChannel")}
        </span>
      </div>

      <div className="relative z-10 grid min-h-135 place-items-center p-8 max-[840px]:min-h-100">
        <div
          aria-label={t("shell.characterPlaceholder")}
          className="relative grid aspect-[3/4] h-[min(68vh,520px)] max-w-full place-items-center border border-system-lime/30 bg-[linear-gradient(180deg,rgba(163,230,53,.035),rgba(3,6,4,.8))] max-[840px]:h-[min(62vh,420px)]"
          role="img"
        >
          <span className="absolute -left-px -top-px h-10 w-10 border-l-2 border-t-2 border-mission-amber" />
          <span className="absolute -right-px -top-px h-10 w-10 border-r-2 border-t-2 border-mission-amber" />
          <span className="absolute -bottom-px -left-px h-10 w-10 border-b-2 border-l-2 border-system-lime" />
          <span className="absolute -bottom-px -right-px h-10 w-10 border-b-2 border-r-2 border-system-lime" />

          <div className="text-center">
            <strong className="block font-heading text-[clamp(5rem,12vw,10rem)] font-bold leading-none tracking-[-.08em] text-system-lime/25">
              JG
            </strong>
            <span className="mt-4 block font-terminal text-xs uppercase tracking-[.18em] text-[var(--color-text-muted)]">
              {t("shell.assetPending")}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 left-4 right-4 z-10 flex justify-between font-terminal text-xs tracking-[.12em] text-[var(--color-text-muted)]">
        <span>FRAME // 01</span>
        <span className="text-system-lime">{t("shell.stageReady")}</span>
      </div>
    </section>
  );
}
