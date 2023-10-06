import { WorkExperience } from '@/types/experience';
import { Locale } from '@/types/profileBasics';
import SectionTitle from './sectionTitle';
import Experience from './experience';

interface ExperienceListProps {
  experiences: WorkExperience[];
  locale: Locale;
}

export default function ExperienceList({
  experiences,
  locale,
}: ExperienceListProps) {
    const title = locale === 'fr' ? 'expérience' : 'experience';
  return (
    <div>
      <SectionTitle label={title} icon="/briefcase.svg" />
      <div className="flex flex-col gap-8 divide-y">
        {experiences.map((exp, index) => (
          <Experience key={index} experience={exp} />
        ))}
      </div>
    </div>
  );
}
