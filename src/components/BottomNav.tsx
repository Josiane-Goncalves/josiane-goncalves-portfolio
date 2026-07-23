import { useState } from "react";

const tabs = ["PROFILE", "PROJECTS", "SKILLS", "EXPERIENCE", "CONTACT"];

export function BottomNav() {
  const [active, setActive] = useState("PROFILE");

  const scrollTo = (tab: string) => {
    setActive(tab);
    document
      .getElementById(tab.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const buttonClass =
    "min-h-[42px] cursor-pointer border-2 border-ridge border-[#383a32] bg-[#101310] text-[#c3c1ae] transition hover:border-[#697247] hover:text-terminal-bright";

  return (
    <footer className="metal-border-thick fixed bottom-3.5 left-4.5 right-4.5 z-30 bg-[#080a08] max-[840px]:bottom-2 max-[840px]:left-2 max-[840px]:right-2">
      <div className="grid grid-cols-[120px_55px_repeat(5,minmax(110px,1fr))_55px_120px] items-center gap-1.5 p-2.5 max-[1180px]:grid-cols-[100px_repeat(5,1fr)_90px] max-[840px]:grid-cols-3 max-[560px]:grid-cols-2">
        <span className="grid min-h-10.5 place-items-center border-2 border-ridge border-[#3d3b35] text-[#c8c1aa] max-[840px]:hidden">
          COMMAND
        </span>
        <span className="grid min-h-10.5 place-items-center border-2 border-ridge border-[#3d3b35] text-[#c8c1aa] max-[1180px]:hidden">
          L1
        </span>
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`${buttonClass} ${active === tab ? "border-[#697247] text-terminal-bright shadow-[inset_0_0_14px_rgba(141,177,71,.2)]" : ""}`}
            onClick={() => scrollTo(tab)}
          >
            {tab}
          </button>
        ))}
        <span className="grid min-h-10.5 place-items-center border-2 border-ridge border-[#3d3b35] text-[#c8c1aa] max-[1180px]:hidden">
          R1
        </span>
        <button type="button" className={`${buttonClass} text-[#c35a4e]`}>
          EXIT
        </button>
      </div>
      <div className="border-t border-[#3d4134] px-[20%] py-1 text-terminal-green tracking-[.08em] max-[840px]:px-1 max-[840px]:text-center max-[560px]:hidden">
        Select a category.
      </div>
    </footer>
  );
}
