import { useContext } from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import { fr, enUS } from 'date-fns/locale';

import ParagrapheTitle from './paragrapheTitle';
import TaskGroup from './taskGroup';
import Badge from './badge';
import { DictionaryContext } from '@/context';
import { capitalizeFirstLetter } from '@/utils/format';
import { Locale } from '@/i18n-config';

import { WorkExperience } from '@/types/experience';
import { dateRangeInWords } from '@/utils/date';

interface ExperienceProps {
  experience: WorkExperience;
  locale: Locale;
}

export default function Experience({ experience, locale }: ExperienceProps) {
  const dictionary = useContext(DictionaryContext);
  const dateFnsLocale = locale === 'en' ? enUS : fr;

  const enDate = experience.endDate
    ? format(new Date(experience.endDate), 'MMM yyyy', {
        locale: dateFnsLocale,
      })
    : 'Today';

  return (
    <div className="flex flex-col gap-4 py-10 sm:py-6 px-12">
      <div className="flex items-center gap-12 w-11/12">
        {experience.icon && (
          <Image
            width={150}
            height={130}
            src={experience.icon}
            alt="logo"
            className="w-16 -ml-4 dark:bg-gray-100"
          />
        )}
        <div className="flex w-full justify-between">
          <h2 className="text-3xl tracking-tight text-gray-900 dark:text-slate-200 font-thin">
            {experience.company}
          </h2>
          <div className="flex items-end text-xs justify-end">
            <span className="text-gray-500">
              {format(new Date(experience.startDate), 'MMM yyyy', {
                locale: dateFnsLocale,
              })}
            </span>
            <span>-</span>
            <span className="text-gray-500">{enDate}</span>
            <span className="ml-4 font-medium italic">
              (
              {dateRangeInWords(
                experience.startDate,
                experience.endDate,
                dateFnsLocale
              )}
              )
            </span>
          </div>
        </div>
      </div>
      <article className="flex flex-col items-start justify-between">
        <div className="group relative">
          <div className="flex justify-center items-baseline gap-2">
            <h3 className="text-base font-semibold leading-6 group-hover:text-gray-600 text-center">
              {experience.position.toLocaleUpperCase()}
            </h3>
            <span className="italic">{experience.mainLanguage}</span>
          </div>
          <div className="flex flex-col">
            <ParagrapheTitle label={dictionary.work.summary} />
            <p className="text-justify px-2">{experience.summary}</p>
          </div>
        </div>
      </article>
      {experience.team && (
        <div className="flex flex-row items-end">
          <span className="font-medium mr-4">
            {capitalizeFirstLetter(dictionary.work.team)}
          </span>
          <span>{experience.team}</span>
        </div>
      )}
      {experience.scopes.length > 0 && (
        <div className="flex flex-col">
          <ParagrapheTitle label={dictionary.work.scopes} />
          <ul className="px-4">
            {experience.scopes.map((scope, index) => (
              <li key={index}>{scope}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex flex-col gap-4">
        <ParagrapheTitle label={dictionary.work.tasks} />
        <TaskGroup tasks={experience.tasks} />
      </div>
      <ParagrapheTitle label={dictionary.work.stack} />
      <div className="flex flex-wrap gap-4">
        {experience.stack.map((s, index) => (
          <Badge key={index} label={s} />
        ))}
      </div>
      {experience.spacer && (
        <div style={{ height: `${experience.spacer}px` }} />
      )}
    </div>
  );
}
