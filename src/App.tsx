import { AppShell } from "./app/AppShell";
import { AliaModule } from "./features/alia/AliaModule";
import { CertificationsPanel } from "./features/certifications/CertificationsPanel";
import { EngineeringLog } from "./features/engineering/EngineeringLog";
import { EngineeringMatrix } from "./features/engineering/EngineeringMatrix";
import { EngineeringProcess } from "./features/engineering/EngineeringProcess";
import {
  ClinicalSignalPanel,
  ConditionPanel,
} from "./features/health/HealthTechHud";
import { CharacterStage } from "./features/identity/CharacterStage";
import { IdentityBrief } from "./features/identity/IdentityBrief";
import { MissionFiles } from "./features/missions/MissionFiles";
import { SystemStatus } from "./features/status/SystemStatus";
import { QuickContact } from "./features/support/QuickContact";
import { SoftSkillsPanel } from "./features/support/SoftSkillsPanel";

function App() {
  return (
    <AppShell
      alia={<AliaModule />}
      certifications={<CertificationsPanel />}
      characterStage={<CharacterStage />}
      clinicalSignal={<ClinicalSignalPanel />}
      condition={<ConditionPanel />}
      identity={<IdentityBrief />}
      quickContact={<QuickContact />}
      softSkills={<SoftSkillsPanel />}
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

      <section id="engineering-process">
        <EngineeringProcess />
      </section>
    </AppShell>
  );
}

export default App;
