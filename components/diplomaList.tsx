'user client';
import { IDiploma } from '@/types/education';

import { useContext } from 'react';

import SectionTitle from './sectionTitle';
import Diploma from '@/components/diploma';
import { LocaleContext } from '@/context';

interface DiplomaListProps {
  diplomas: IDiploma[];
}

export default function DiplomaList({ diplomas }: DiplomaListProps) {
  const locale = useContext(LocaleContext);

  const title = locale === 'fr' ? 'formation' : 'education';
  return (
    <div className="w-full">
      <SectionTitle label={title} icon="/icons/academic.svg" />
      <div className="flex flex-wrap gap-8 px-12">
        {diplomas.map((diploma, index) => (
          <Diploma key={index} diploma={diploma} />
        ))}
      </div>
    </div>
  );
}
