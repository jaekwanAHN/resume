import Activities from '@/components/activities';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Certification from '@/components/certification';
import Education from '@/components/education';
import Skills from '@/components/skills';
import { personalInformation } from '@/data/personal';
import { projects } from '@/data/projects';
import { experiences } from '@/data/experiences';
import Experiences from '@/components/experiences';

export default function Page() {
  return (
    <main>
      <Header PersonalInformation={personalInformation} />
      <Experiences experiences={experiences} />
      <Projects projects={projects} />
      <Skills skills={personalInformation.skills} />
      <Activities activities={personalInformation.activities} />
      <Education education={personalInformation.education} />
      <Certification certification={personalInformation.certification} />
    </main>
  );
}
