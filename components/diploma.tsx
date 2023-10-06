import { Diploma } from "@/types/education";
import Image from "next/image";

interface DiplomaProps {
  diploma: Diploma;
}

export default function Diploma({ diploma }: DiplomaProps) {
  return (
    <div className="mb-8">
      <div className="grid grid-rows-3 grid-flow-col gap-2">
        <div className="row-span-3">
          {diploma.icon && (
            <Image
              src={diploma.icon}
              width={90}
              height={90}
              alt=""
              className="w-10 h-10"
            />
          )}
        </div>
        <div className="text-base">
          <div>{diploma.institution}</div>
        </div>
        <div className="font-medium">{diploma.area}</div>
        <div className="text-xs leading-3">
          <span>{diploma.startDate}</span>
          <span> - </span>
          <span>{diploma.endDate}</span>
        </div>
      </div>
      {diploma.courses.length > 0 && (
        <ul>
          {diploma.courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
