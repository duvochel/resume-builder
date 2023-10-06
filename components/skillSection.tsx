import { Locale } from '@/types/profileBasics';
import { Skill } from '@/types/skill'

import SectionTitle from './sectionTitle';
import SkillList from './skillList';

interface SkilSectionProps {
  skills: Skill[];
  locale: Locale;
}

export default function SkilSection({ skills, locale }: SkilSectionProps) {
  const title = locale === 'fr' ? 'compétence' : 'skills';
  return (
    <div>
      <SectionTitle label={title} icon="/icons/cog-6-tooth.svg" />
      <SkillList skills={skills} />
    </div>
  );
}
