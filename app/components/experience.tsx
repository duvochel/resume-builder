import Image from "next/image";

interface WorkExperience {
  company: string;
  endDate: string;
  highlights: string[];
  position: string;
  startDate: string;
  summary: string;
  website: string;
  icon: string;
}
interface ExperienceProps {
  experience: WorkExperience;
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex mx-auto gap-12">
        <Image
                width={150}
                height={150}
                src={experience.icon}
                alt=""
                className="h-20 w-20 rounded-full bg-gray-50"
              />
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {experience.company}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {experience.position}
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime="2020-03-16" className="text-gray-500">
                {experience.startDate}
              </time>
              <a
                href="#"
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                Marketing
              </a>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  {experience.website}
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {experience.summary}
              </p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <Image
                width={300}
                height={300}
                src={experience.icon}
                alt=""
                className="h-10 w-10 rounded-full bg-gray-50"
              />
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Michael Foster
                  </a>
                </p>
                <p className="text-gray-600">Co-Founder / CTO</p>
              </div>
            </div>
          </article>
          More posts...
        </div>
      </div>
    </div>
  );
}
