interface SectionTitleProps {
  label: string;
}

export default function SectionTitle({ label }: SectionTitleProps) {
  return <span className="text-black font-thin text-2xl max-w-fit">{label}</span>;
}
