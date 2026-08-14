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
    <AppShell
      alia={<AliaModule />}
      certifications={<CertificationsPanel />}
      characterStage={<CharacterStage />}
      identity={<IdentityBrief />}
      systemStatus={<SystemStatus />}
    >
      <section id="projects">
        <MissionFiles />
      </section>

      <section className="app-shell__engineering">
        <div id="stack">
          <EngineeringMatrix />
        </div>
        <div id="engineering-log">
          <span aria-hidden="true" className="app-shell__anchor" id="experience" />
          <EngineeringLog />
        </div>
      </section>
    </AppShell>
  );
}

export default App;
