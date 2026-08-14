import { AppShell } from "./app/AppShell";
import { AliaModule } from "./features/alia/AliaModule";
import { CertificationsPanel } from "./features/certifications/CertificationsPanel";
import { EngineeringLog } from "./features/engineering/EngineeringLog";
import { EngineeringMatrix } from "./features/engineering/EngineeringMatrix";
import { CharacterStage } from "./features/identity/CharacterStage";
import { IdentityBrief } from "./features/identity/IdentityBrief";
import { MissionFiles } from "./features/missions/MissionFiles";
import { SystemStatus } from "./features/status/SystemStatus";

function App() {
  return (
    <AppShell>
      <section
        className="grid grid-cols-[minmax(220px,.8fr)_minmax(480px,2fr)_minmax(260px,.9fr)] items-stretch gap-4 max-[1280px]:grid-cols-[minmax(240px,.8fr)_minmax(480px,1.8fr)] max-[840px]:grid-cols-1"
        id="profile"
      >
        <IdentityBrief />
        <CharacterStage />
        <aside className="max-[1280px]:col-span-full">
          <SystemStatus />
        </aside>
      </section>

      <section className="mt-4" id="projects">
        <MissionFiles />
      </section>

      <section className="mt-4 grid grid-cols-2 items-start gap-4 max-[840px]:grid-cols-1">
        <div id="skills">
          <EngineeringMatrix />
        </div>
        <div id="experience">
          <EngineeringLog />
        </div>
      </section>

      <section className="mt-4 grid grid-cols-2 items-stretch gap-4 max-[840px]:grid-cols-1">
        <div id="alia">
          <AliaModule />
        </div>
        <div id="certifications">
          <CertificationsPanel />
        </div>
      </section>
    </AppShell>
  );
}

export default App;
