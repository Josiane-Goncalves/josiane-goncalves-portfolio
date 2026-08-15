import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { navigationItems } from "./items";

function getCurrentDestination() {
  const currentHash = window.location.hash;

  return navigationItems.some(({ href }) => href === currentHash)
    ? currentHash
    : navigationItems[0].href;
}

export function SideNavigation() {
  const { t } = useTranslation();
  const [activeHref, setActiveHref] = useState(getCurrentDestination);

  useEffect(() => {
    const handleHashChange = () => setActiveHref(getCurrentDestination());

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <aside className="app-shell__desktop-navigation">
      <nav
        aria-label={t("shell.primaryNavigation")}
        className="game-navigation"
      >
        <div className="game-navigation__header">
          <span>{t("shell.commandIndex")}</span>
          <strong>JG // 01</strong>
        </div>

        <ul className="game-navigation__list">
          {navigationItems.map(({ code, href, labelKey }) => {
            const isActive = activeHref === href;

            return (
              <li key={href}>
                <a
                  aria-current={isActive ? "location" : undefined}
                  className="game-navigation__link"
                  data-active={isActive || undefined}
                  href={href}
                  onClick={() => setActiveHref(href)}
                >
                  <span aria-hidden="true" className="game-navigation__indicator" />
                  <span className="game-navigation__code">{code}</span>
                  <span>{t(labelKey)}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
