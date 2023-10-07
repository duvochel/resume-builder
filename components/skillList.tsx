import { Skill } from "@/types/skill";

import Image from "next/image";
import Badge from "./badge";

interface SkillListProps {
  skills: Skill[];
  isIcon?: boolean;
}

export default function SkillList({ skills, isIcon }: SkillListProps) {
  return (
    <div className="flex flex-wrap gap-4 px-12">
      {skills.map((skill, index) => (
        <div key={index}>
          {isIcon && skill.icon ? (
            <Image
              src={skill.icon}
              alt=""
              width={150}
              height={150}
              className="h-8 w-8"
            />
          ) : (
            <Badge label={skill.name} />
          )}
        </div>
      ))}
    </div>
  );
}
