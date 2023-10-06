import Link from 'next/link';
import { ReactNode } from 'react';

interface CustomLinkProps {
  to: string;
  children: ReactNode;
}

function CustomLink({ to, children }: CustomLinkProps) {
  return (
    <Link
      href={to}
      className="rounded-full w-56 bg-lime-400 hover:bg-lime-700 transition-all duration-300 hover:text-gray-50 shadow py-2 px-3"
    >
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <div className="mt-32 mx-auto p-8 w-fit flex flex-col gap-4 text-xl text-center">
      <CustomLink to="/fr">Français</CustomLink>
      <CustomLink to="/en">English</CustomLink>
    </div>
  );
}
