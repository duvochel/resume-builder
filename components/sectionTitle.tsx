import Image from "next/image";

interface SectionTitleProps {
  label: string;
  icon: string;
}

export default function SectionTitle({ label, icon }: SectionTitleProps) {
  return (
    <div className="flex gap-4">
      <Image src={icon} width={20} height={20} alt="" className="dark:stroke-slate-100" />
      <h2 className="text-2xl my-8">{label.toUpperCase()}</h2>
    </div>
  );
}
