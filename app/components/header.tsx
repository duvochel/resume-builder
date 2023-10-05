import Image from "next/image";

import PROFILE from "../linkedIn-toJSON_fr.json";
import { CHINESE_FLAG_ICON, ENG_FLAG_ICON, FRENCH_FLAG_ICON } from "@/constantes";

export default function Header() {
  const profiles = PROFILE.basics.profiles;
  return (
    <header className="flex flex-col w-full max-w-screen-lg mx-auto p-6 customShadow">
      <div className="grid grid-cols-6">
        <Image
          src="/avatar.jpeg"
          alt=""
          width={300}
          height={275}
          className="w-36 h-36 rounded-full drop-shadow-md"
        />
        <div className=" flex flex-col col-span-4 justify-center pl-8 gap-2">
          <div className="flex text-3xl justify-left font-bold">
            <h1 className="text-light-gray">{PROFILE.basics.name}</h1>
          </div>
          <div className="flex text-lg w-96 justify-end">
            <span>{PROFILE.basics.label}</span>
          </div>
        </div>
        <div className="flex flex-row gap-1 justify-end">
          <Image src={ENG_FLAG_ICON} alt="" width={20} height={20} />
          <Image src={FRENCH_FLAG_ICON} alt="" width={20} height={20} />
          <Image src={CHINESE_FLAG_ICON} alt="" width={20} height={20} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 max-w-fit self-end">
        {profiles.map((profile, index) => (
          <div key={index} className="flex gap-4">
            <Image
              src={profile.icon}
              alt={profile.network}
              width={20}
              height={20}
            />
            <a href={profile.url}>{profile.url}</a>
          </div>
        ))}
      </div>
    </header>
  );
}
