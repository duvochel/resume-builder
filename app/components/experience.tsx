import Image from "next/image";

import SectionTitle from "./sectionTitle";
import { WorkExperience } from "@/types/globalTypes";
import TaskGroup from "./taskGroup";

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
          className="h-16 -ml-12"
        />
        <div className="flex flex-col">
          <h2 className="text-2xl tracking-tight text-gray-900 sm:text-3xl">
            {experience.company}
          </h2>
          <div className="flex items-center gap-x-4 text-xs justify-end">
            <span className="text-gray-500">{experience.startDate}</span>
            <span>-</span>
            <span className="text-gray-500">{experience.endDate}</span>
            <span>({experience.summary})</span>
          </div>
        </div>
      </div>
      <article className="flex flex-col items-start justify-between">
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 text-center">
            <span className="absolute inset-0"></span>
            {experience.position}
          </h3>
          <div className="flex flex-col gap-4">
            <SectionTitle label="Projet" />
            <p className="text-gray-600 text-justify px-2">
              {experience.project}
            </p>
          </div>
        </div>
      </article>
      <div className="flex flex-row gap-4 items-end">
        <SectionTitle label="Equipe" />
        <span>{experience.team}</span>
      </div>
      <div className="flex flex-col gap-4">
        <SectionTitle label="Responsabilités" />
        <ul className="px-4">
          {experience.scopes.map((scope, index) => (
            <li key={index}>{scope}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <SectionTitle label="Tâches" />
        <TaskGroup tasks={experience.tasks} />
      </div>
      <SectionTitle label="Stack" />
      <div className="flex flex-wrap gap-4">
        {experience.stack.map((s, index) => (
          <span
            key={index}
            className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
