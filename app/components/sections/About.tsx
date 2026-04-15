import { personalInfo } from "~/data/personal";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeading } from "~/components/ui/SectionHeading";

export function About() {
  return (
    <AnimatedSection id="about">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading title="About Me" subtitle="Get to know me better" />
        <p className="text-[#a1a1aa] leading-relaxed text-base">
          {personalInfo.bio}
        </p>
      </div>
    </AnimatedSection>
  );
}
