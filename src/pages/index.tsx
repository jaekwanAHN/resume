import Header from '@/components/Header';
import Projects from '@/components/Projects';
import { PersonalInformation } from '@/data/personal';
import { projects } from '@/data/projects';

export default function Page() {
  return (
    <main>
      <Header PersonalInformation={PersonalInformation} />

      <Projects projects={projects} />
    </main>
  );
}
