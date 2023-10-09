import { WorkExperience } from '@/types/experience';

import { useContext } from 'react';

import SectionTitle from './sectionTitle';
import Experience from './experience';
import { DictionaryContext } from '@/context';

interface ExperienceListProps {
  experiences: WorkExperience[];
}

export default function ExperienceList({ experiences }: ExperienceListProps) {
  const dictionary = useContext(DictionaryContext);

  return (
    <div>
      <SectionTitle label={dictionary.work.title} icon="/icons/briefcase.svg" />
      <div className="flex flex-col gap-8 divide-y">
        {experiences.map((exp, index) => (
          <Experience key={index} experience={exp} />
        ))}
      </div>
    </div>
  );
}
