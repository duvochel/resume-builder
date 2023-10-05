interface SummaryProps {
  summary: string;
}

export default function Summary({ summary }: SummaryProps) {
  return (
      <article className="text-base mt-6 text-justify italic">{summary}</article>
  );
}
