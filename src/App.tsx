import { BottomNav } from "./components/BottomNav";
import { ContactPanel } from "./components/ContactPanel";
import { ExperiencePanel } from "./components/ExperiencePanel";
import { LanguageSelector } from "./components/LanguageSelector";
import { ProfilePanel } from "./components/ProfilePanel";
import { ProjectsPanel } from "./components/ProjectsPanel";
import { SkillsPanel } from "./components/SkillsPanel";
import { StatsPanel } from "./components/StatsPanel";
import { SystemLogPanel } from "./components/SystemLogPanel";

function App() {
  return (
    <main className="pixel-grid relative min-h-screen px-4.5 pb-29.5 pt-4.5 max-[840px]:px-2.5 max-[840px]:pb-42.5 max-[840px]:pt-2.5">
      <div className="pointer-events-none fixed inset-1.5 z-20 border-[7px] border-ridge border-[#35332e] shadow-[inset_0_0_0_2px_#090a08,inset_0_0_28px_#000,0_0_30px_#000]" />
      <div className="scanlines pointer-events-none fixed inset-0 z-30 opacity-10" />

      <header className="mb-3 grid min-h-14.5 grid-cols-[240px_1fr_160px] items-center gap-4 border-[5px] border-ridge border-metal bg-[linear-gradient(180deg,#171914,#080b08)] uppercase tracking-[.08em] shadow-[inset_0_0_0_2px_#020302,inset_0_0_18px_#000] max-[840px]:grid-cols-1 max-[840px]:gap-1 max-[840px]:p-2.5 max-[840px]:text-center">
        <span className="px-4.5 py-2.5 text-[#d2c29a] max-[840px]:p-0.5">
          PERSONAL DATA
        </span>
        <div className="text-center text-[clamp(12px,1.4vw,18px)] text-terminal-green">
          CAIRON HENRIQUE // PORTFOLIO TERMINAL
        </div>
        <div className="flex justify-end">
          <LanguageSelector />
        </div>
      </header>

      <div className="grid grid-cols-[minmax(250px,1fr)_minmax(520px,2.2fr)_minmax(280px,1fr)] items-start gap-3 max-[1180px]:grid-cols-[290px_1fr] max-[840px]:grid-cols-1">
        <aside className="grid gap-3" id="profile">
          <ProfilePanel />
          <StatsPanel />
          <SystemLogPanel />
        </aside>

        <section className="grid gap-3" id="projects">
          <ProjectsPanel />
          <div id="contact">
            <ContactPanel />
          </div>
        </section>

        <aside className="grid gap-3 max-[1180px]:col-span-full max-[1180px]:grid-cols-2 max-[840px]:grid-cols-1">
          <div id="skills">
            <SkillsPanel />
          </div>
          <div id="experience">
            <ExperiencePanel />
          </div>
        </aside>
      </div>

      <BottomNav />
    </main>
  );
}

export default App;
