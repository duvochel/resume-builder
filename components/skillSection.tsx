import { Skill } from '@/types/skill';

import { useContext } from 'react';

import SectionTitle from './sectionTitle';
import SkillList from './skillList';
import { LocaleContext } from '@/context';

interface SkilSectionProps {
  skills: Skill[];
}

export default function SkilSection({ skills }: SkilSectionProps) {
  const locale = useContext(LocaleContext);

  const title = locale === 'fr' ? 'compétence' : 'skills';
  return (
    <div>
      <SectionTitle label={title} icon="/icons/cog-6-tooth.svg" />
      <SkillList skills={skills} />
    </div>
  );
}
