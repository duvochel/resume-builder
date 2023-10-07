"use client"
import Header from '@/components/header';
import Summary from '@/components/summary';
import SkillList from '@/components/skillList';
import ExperienceList from '@/components/experienceList';
import DiplomaList from '@/components/diplomaList';
import SkilSection from '@/components/skillSection';

import { LocaleContext } from '@/context';

interface ProfileProps {
  profile: any;
}

export default function Profile({ profile }: ProfileProps) {

  return (
    <LocaleContext.Provider value={profile.locale}>
      <Header profileBasics={profile.basics} />
      <main className="flex min-h-screen w-a4 mx-auto flex-col gap-8 items-center justify-between px-14 pb-6">
        <Summary summary={profile.basics.summary} />
        <SkillList isIcon skills={profile.skills} />
        <ExperienceList experiences={profile.work}/>
        <DiplomaList diplomas={profile.education}/>
        <SkilSection skills={profile.skills}/>
      </main>
    </LocaleContext.Provider>
  );
}
