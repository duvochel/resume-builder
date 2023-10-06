import Experience from './components/experience';
import Diploma from './components/diploma';
import Header from './components/header';

import PROFILE from './linkedIn-toJSON_fr.json';
import SectionTitle from './components/sectionTitle';
import Summary from './components/summary';
import SkillList from './components/skillList';

export default function Home() {
  const experiences = PROFILE.work;
  const education = PROFILE.education;
  return (
    <>
      <Header />
      <main className="flex min-h-screen w-a4 mx-auto flex-col gap-8 items-center justify-between px-14 pb-6">
        <Summary summary={PROFILE.basics.summary} />
        <SkillList isIcon skills={PROFILE.skills} />
        <div>
          <SectionTitle label="expérience" icon="/briefcase.svg" />
          <div className="flex flex-col gap-8 divide-y">
            {experiences.map((exp, index) => (
              <Experience key={index} experience={exp} />
            ))}
          </div>
        </div>
        <div className="w-full">
          <SectionTitle label="formation" icon="/academic.svg" />
          <div className="flex flex-wrap gap-8">
            {education.map((diploma, index) => (
              <Diploma key={index} diploma={diploma} />
            ))}
          </div>
        </div>
        <div>
          <SectionTitle label="compétence" icon="/icons/cog-6-tooth.svg" />
          <SkillList skills={PROFILE.skills} />
        </div>
      </main>
    </>
  );
}
