import { WorkExperience } from '@/types/experience';

import { useContext } from 'react';

import SectionTitle from './sectionTitle';
import Experience from './experience';
import { DictionaryContext } from '@/context';
import { Locale } from '@/i18n-config';

interface ExperienceListProps {
  experiences: WorkExperience[];
  locale: Locale;
}

export default function ExperienceList({
  experiences,
  locale,
}: ExperienceListProps) {
  const dictionary = useContext(DictionaryContext);

  return (
    <div>
      <SectionTitle label={dictionary.work.title} icon="/icons/briefcase.svg" />
      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <Experience key={index} experience={exp} locale={locale} />
        ))}
      </div>
    </div>
  );
}
