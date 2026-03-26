import Identity from "@/components/sections/Identity";
import EvidenceSection from "@/components/sections/EvidenceSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { content } from "@/content";

export default function Home() {
  return (
    <div className="scroll-container">
      <Identity />
      <EvidenceSection {...content.sections.evidence1} />
      <PhilosophySection quote={content.sections.philosophy1.quote} />
      <EvidenceSection {...content.sections.evidence2} />
      <PhilosophySection quote={content.sections.philosophy2.quote} />
      <EvidenceSection {...content.sections.evidence3} />
      <Projects />
      <Contact />
    </div>
  );
}
