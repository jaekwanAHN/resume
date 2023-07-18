import Header from '@/components/Header';
import Projects from '@/components/Projects';

export default function Page() {
  const PersonalInformation = {
    name: '안재관',
    phoneNumber: '010-8003-3635',
    eMail: 'ggstork@gmail.com',
    github: 'https://github.com/jaekwanAHN',
    blog: 'https://jaekwan.tistory.com/',
  };

  return (
    <main className="container mx-auto">
      <Header PersonalInformation={PersonalInformation} />
      <hr />
      <Projects />
    </main>
  );
}
