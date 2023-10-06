interface BadgeProps {
  label: string;
}

export default function Badge({ label }: BadgeProps) {
  return (
    <span className="flex items-center rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
      {label}
    </span>
  );
}
