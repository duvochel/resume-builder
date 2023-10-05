import Image from "next/image";

import ParagrapheTitle from "./paragrapheTitle";
import { WorkExperience } from "@/types/experience";
import TaskGroup from "./taskGroup";
import Badge from "./badge";

interface ExperienceProps {
  experience: WorkExperience;
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <div className="flex flex-col gap-4 bg-white py-10 sm:py-6 px-12 rounded-xl border border-gray-100">
      <div className="flex items-center gap-12 relative">
        <Image
          width={150}
          height={130}
          src={experience.icon}
          alt="logo"
          className="h-12 w-16 -ml-4"
        />
        <div className="flex flex-col">
          <h2 className="text-xl tracking-tight text-gray-900">
            {experience.company}
          </h2>
          <div className="flex items-center gap-x-4 text-xs justify-end">
            <span className="text-gray-500">{experience.startDate}</span>
            <span>-</span>
            <span className="text-gray-500">{experience.endDate}</span>
            <span>({experience.rangeString})</span>
          </div>
        </div>
      </div>
      <article className="flex flex-col items-start justify-between">
        <div className="group relative">
          <h3 className="mt-3 text-base font-semibold leading-6 text-gray-900 group-hover:text-gray-600 text-center">
            <span className="absolute inset-0"></span>
            {experience.position}
          </h3>
          <div className="flex flex-col gap-4">
            <ParagrapheTitle label="Projet" />
            <p className="text-gray-600 text-justify px-2">
              {experience.summary}
            </p>
          </div>
        </div>
      </article>
      <div className="flex flex-row gap-4 items-end">
        <span className="font-medium">Equipe : </span>
        <span>{experience.team}</span>
      </div>
      <div className="flex flex-col gap-4">
        <ParagrapheTitle label="Responsabilités" />
        <ul className="px-4">
          {experience.scopes.map((scope, index) => (
            <li key={index}>{scope}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <ParagrapheTitle label="Tâches" />
        <TaskGroup tasks={experience.tasks} />
      </div>
      <ParagrapheTitle label="Stack" />
      <div className="flex flex-wrap gap-4">
        {experience.stack.map((s, index) => (
          <Badge key={index} label={s} />
        ))}
      </div>
    </div>
  );
}
