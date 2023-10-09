import { Basics } from '@/types/profile';

import Image from 'next/image';
import Link from 'next/link';

import {
  CHINESE_FLAG_ICON,
  ENG_FLAG_ICON,
  FRENCH_FLAG_ICON,
} from '@/constantes';

interface HeaderProps {
  profileBasics: Basics;
}

export default function Header({ profileBasics }: HeaderProps) {
  return (
    <header className="flex flex-col w-a4 gap-4 max-w-screen-lg mx-auto py-6 px-8 customShadow">
      <div className="grid grid-cols-7">
        <Image
          src="/avatar.jpeg"
          alt=""
          width={300}
          height={275}
          className="w-24 h-24 rounded-full drop-shadow-md"
        />
        <div className=" flex flex-col col-span-5 justify-center pl-8 gap-2">
          <div className="flex text-3xl justify-left font-bold">
            <h1 className="text-light-gray dark:text-slate-200 font-medium">
              {profileBasics.name}
            </h1>
          </div>
          <div className="flex text-lg  w-96 justify-end">
            <span>{profileBasics.label.toLocaleUpperCase()}</span>
          </div>
        </div>
        <div className="flex flex-row gap-1 justify-end">
          <Link href="/fr" className="self-center">
            <Image src={FRENCH_FLAG_ICON} alt="" width={20} height={20} />
          </Link>
          <Link href="/en" className="self-center">
            <Image src={ENG_FLAG_ICON} alt="" width={20} height={20} />
          </Link>
          <Image src={CHINESE_FLAG_ICON} alt="" width={20} height={20} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 max-w-fit self-end">
        {profileBasics.socialMedias.map((media, index) => (
          <div key={index} className="flex gap-4">
            <Image
              src={media.icon}
              alt={media.network}
              width={15}
              height={15}
            />
            <a href={media.url} className="text-sm">
              {media.url}
            </a>
          </div>
        ))}
      </div>
    </header>
  );
}
