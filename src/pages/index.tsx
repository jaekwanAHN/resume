import Activities from '@/components/activities/indext';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Certification from '@/components/certification';
import Education from '@/components/education';
import Experiences from '@/components/experiences';
import Skills from '@/components/skills';
import { PersonalInformation } from '@/data/personal';
import { projects } from '@/data/projects';

export default function Page() {
  return (
    <main>
      <Header PersonalInformation={PersonalInformation} />
      <Projects projects={projects} />
      <Skills skills={PersonalInformation.skills} />
      <Activities activities={PersonalInformation.activities} />
      <Experiences />
      <Education education={PersonalInformation.education} />
      <Certification certification={PersonalInformation.certification} />
    </main>
  );
}
