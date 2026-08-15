import { useId } from "react";
import { useTranslation } from "react-i18next";

import aliaMascot from "../../assets/characters/alia-mascot.png";
import josianeCharacter from "../../assets/characters/josiane-character.png";

export function CharacterStage() {
  const { t } = useTranslation();
  const titleId = useId();

  return (
    <section
      aria-labelledby={titleId}
      className="character-stage"
    >
      <div aria-hidden="true" className="character-stage__environment" />
      <div aria-hidden="true" className="character-stage__grid screen-grid" />
      <div aria-hidden="true" className="character-stage__radar character-stage__radar--outer" />
      <div aria-hidden="true" className="character-stage__radar character-stage__radar--inner" />
      <div aria-hidden="true" className="character-stage__axis" />

      <div className="character-stage__header">
        <h2 id={titleId}>{t("shell.operativeName")}</h2>
        <span>{t("shell.visualChannel")}</span>
      </div>

      <div className="character-stage__viewport">
        <div className="character-stage__asset-layer">
          <img
            alt={t("shell.characterAlt")}
            className="character-stage__asset"
            data-asset-state="ready"
            decoding="async"
            draggable={false}
            fetchPriority="high"
            height="1536"
            src={josianeCharacter}
            width="1024"
          />
        </div>

        <div aria-hidden="true" className="character-stage__frame-marker">
          <span>FRAME // 01</span>
        </div>

        <figure
          aria-label={t("alia.mascotAriaLabel")}
          className="character-stage__alia"
          tabIndex={0}
        >
          <img
            alt=""
            className="character-stage__alia-image"
            decoding="async"
            draggable={false}
            height="320"
            src={aliaMascot}
            width="320"
          />
          <figcaption className="character-stage__alia-label">
            <strong>A.L.I.A.</strong>
          </figcaption>
        </figure>
      </div>

      <div aria-hidden="true" className="character-stage__bracket character-stage__bracket--top" />
      <div aria-hidden="true" className="character-stage__bracket character-stage__bracket--bottom" />
    </section>
  );
}
