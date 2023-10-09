import { Skill } from '@/types/skill';

import { useContext } from 'react';

import SectionTitle from './sectionTitle';
import SkillList from './skillList';
import { DictionaryContext } from '@/context';

interface SkilSectionProps {
  skills: Skill[];
}

export default function SkilSection({ skills }: SkilSectionProps) {
  const dictionary = useContext(DictionaryContext);

  return (
    <div>
      <SectionTitle
        label={dictionary.skills.title}
        icon="/icons/cog-6-tooth.svg"
      />
      <SkillList skills={skills} />
    </div>
  );
}
