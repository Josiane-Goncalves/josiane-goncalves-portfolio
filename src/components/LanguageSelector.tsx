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
      className="flex items-center gap-1 border border-[#3e4731] bg-[#080c09] p-1 text-[10px]"
      role="group"
    >
      <button
        type="button"
        aria-pressed={currentLanguage === "pt"}
        onClick={() => handleChangeLanguage("pt")}
        className={`px-2 py-1 transition ${
          currentLanguage === "pt"
            ? "bg-[#9fbd58] text-[#080c09]"
            : "text-[#9fbd58] hover:bg-[#182016]"
        }`}
      >
        PT
      </button>

      <span className="text-[#4f5b39]">/</span>

      <button
        type="button"
        aria-pressed={currentLanguage === "en"}
        onClick={() => handleChangeLanguage("en")}
        className={`px-2 py-1 transition ${
          currentLanguage === "en"
            ? "bg-[#9fbd58] text-[#080c09]"
            : "text-[#9fbd58] hover:bg-[#182016]"
        }`}
      >
        EN
      </button>
    </div>
  );
}
