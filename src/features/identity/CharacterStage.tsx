import { useId } from "react";
import { useTranslation } from "react-i18next";

type CharacterAsset = {
  src: string;
  alt: string;
};

type CharacterStageProps = {
  asset?: CharacterAsset;
};

export function CharacterStage({ asset }: CharacterStageProps) {
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
          {asset ? (
            <img
              alt={asset.alt}
              className="character-stage__asset"
              data-asset-state="ready"
              draggable={false}
              src={asset.src}
            />
          ) : (
            <div
              aria-label={t("shell.characterPlaceholder")}
              className="character-stage__placeholder"
              data-asset-state="pending"
              role="img"
            >
              <span aria-hidden="true" className="character-stage__silhouette" />
              <strong aria-hidden="true">JG</strong>
              <span>{t("shell.assetPending")}</span>
            </div>
          )}
        </div>

        <div aria-hidden="true" className="character-stage__notebook">
          <span>JG // DEV</span>
        </div>
      </div>

      <div aria-hidden="true" className="character-stage__bracket character-stage__bracket--top" />
      <div aria-hidden="true" className="character-stage__bracket character-stage__bracket--bottom" />

      <div className="character-stage__footer">
        <span>FRAME // 01</span>
        <span>{t("shell.stageReady")}</span>
      </div>
    </section>
  );
}
