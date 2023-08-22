import Activities from '@/components/activities/indext';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Certification from '@/components/certification';
import Education from '@/components/education';
import Experiences from '@/components/experiences';
import Skills from '@/components/skills';
import { personalInformation } from '@/data/personal';
import { projects } from '@/data/projects';

export default function Page() {
  return (
    <main>
      <Header PersonalInformation={personalInformation} />
      <Projects projects={projects} />
      <Skills skills={personalInformation.skills} />
      <Activities activities={personalInformation.activities} />
      <Experiences experiences={personalInformation.experiences} />
      <Education education={personalInformation.education} />
      <Certification certification={personalInformation.certification} />
    </main>
  );
}
