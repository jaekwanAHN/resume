import Header from '@/components/Header';
import Projects from '@/components/Projects';
import { PersonalInformation } from '@/data/personal';
import { projects } from '@/data/projects';

export default function Page() {
  return (
    <main className="container mx-auto">
      <Header PersonalInformation={PersonalInformation} />
      <hr />
      <Projects projects={projects} />
    </main>
  );
}
