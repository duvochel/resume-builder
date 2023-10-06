import { IDiploma } from '@/types/education';
import { Locale } from '@/types/profileBasics';

import SectionTitle from './sectionTitle';
import Diploma from '@/components/diploma';

interface DiplomaListProps {
  diplomas: IDiploma[];
  locale: Locale;
}

export default function DiplomaList({ diplomas, locale }: DiplomaListProps) {
  const title = locale === 'fr' ? 'formation' : 'education';
  return (
    <div className="w-full">
      <SectionTitle label={title} icon="/academic.svg" />
      <div className="flex flex-wrap gap-8">
        {diplomas.map((diploma, index) => (
          <Diploma key={index} diploma={diploma} />
        ))}
      </div>
    </div>
  );
}
