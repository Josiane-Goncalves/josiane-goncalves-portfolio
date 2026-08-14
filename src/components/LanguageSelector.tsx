import { useTranslation } from "react-i18next";

export function LanguageSelector() {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language.startsWith("en") ? "en" : "pt";

  function handleChangeLanguage(language: "pt" | "en") {
    i18n.changeLanguage(language);
    localStorage.setItem("portfolio-language", language);
  }

  return (
    <div
      aria-label={t("common.languageSelector")}
      className="flex items-center gap-1 border border-[var(--color-border)] bg-[var(--color-surface)] p-1 font-terminal text-xs"
      role="group"
    >
      <button
        type="button"
        aria-pressed={currentLanguage === "pt"}
        onClick={() => handleChangeLanguage("pt")}
        className={`px-2 py-1 transition ${
          currentLanguage === "pt"
            ? "bg-[var(--color-system-bright)] text-[var(--color-background)]"
            : "text-[var(--color-system-bright)] hover:bg-[var(--color-surface-elevated)]"
        }`}
      >
        PT
      </button>

      <span aria-hidden="true" className="text-[var(--color-border)]">/</span>

      <button
        type="button"
        aria-pressed={currentLanguage === "en"}
        onClick={() => handleChangeLanguage("en")}
        className={`px-2 py-1 transition ${
          currentLanguage === "en"
            ? "bg-[var(--color-system-bright)] text-[var(--color-background)]"
            : "text-[var(--color-system-bright)] hover:bg-[var(--color-surface-elevated)]"
        }`}
      >
        EN
      </button>
    </div>
  );
}
