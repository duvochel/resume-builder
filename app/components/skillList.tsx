import Image from "next/image";
import Badge from "./badge";

interface SkillListProps {
  skills: Skill[];
  isIcon?: boolean;
}

interface Skill {
  name: string;
  icon: string;
  level: string;
  keywords: string[];
}

export default function SkillList({ skills, isIcon }: SkillListProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {skills.map((skill, index) => (
        <div key={index}>
          {isIcon && skill.icon ? (
            <Image
              src={skill.icon}
              alt=""
              width={150}
              height={150}
              className="h-10 w-10"
            />
          ) : (
            <Badge label={skill.name} />
          )}
        </div>
      ))}
    </div>
  );
}
