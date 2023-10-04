import Image from "next/image";

import PROFILE from "../linkedIn-toJSON_fr.json";

export default function Header() {
  const profiles = PROFILE.basics.profiles;
  return (
    <header className="flex flex-col w-full gap-12 max-w-screen-xl mx-auto pt-10 pb-6 px-6 customShadow">
      <div className="grid grid-flow-col auto-cols-max">
        <Image
          src="/avatar.jpeg"
          alt=""
          width={300}
          height={275}
          className="w-44 h-44 rounded-full drop-shadow-md"
        />
        <div className=" flex flex-wrap pl-8">
          <div className="flex text-4xl grow justify-left pr-8 font-bold items-center">
            <span>{PROFILE.basics.name}</span>
          </div>
          <div className="flex text-xl items-center">
            <span>{PROFILE.basics.label}</span>
          </div>
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
