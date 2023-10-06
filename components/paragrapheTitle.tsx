interface ParagrapheTitleProps {
  label: string;
}

export default function ParagrapheTitle({ label }: ParagrapheTitleProps) {
  return <span className="text-black font-thin text-xl max-w-fit -ml-4">{label}</span>;
}
