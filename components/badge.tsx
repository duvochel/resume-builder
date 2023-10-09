interface BadgeProps {
  label: string;
}

export default function Badge({ label }: BadgeProps) {
  return (
    <span className="flex items-center rounded-full bg-gray-50 dark:bg-gray-400 text-gray-600 dark:text-gray-900 px-3 py-1.5 font-medium  hover:bg-gray-100">
      {label}
    </span>
  );
}
