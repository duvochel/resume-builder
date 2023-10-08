import { WorkExperience } from '@/types/experience';

import { useContext } from 'react';

import SectionTitle from './sectionTitle';
import Experience from './experience';

import { LocaleContext } from '@/context';

interface ExperienceListProps {
  experiences: WorkExperience[];
}

export default function ExperienceList({ experiences }: ExperienceListProps) {
  const locale = useContext(LocaleContext);

  const title = locale === 'fr' ? 'expérience' : 'experience';
  return (
    <div>
      <SectionTitle label={title} icon="/icons/briefcase.svg" />
      <div className="flex flex-col gap-8 divide-y">
        {experiences.map((exp, index) => (
          <Experience key={index} experience={exp} />
        ))}
      </div>
    </div>
  );
}
