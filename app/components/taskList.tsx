interface TaskListProps {
  label: string;
  tasks: string[];
}

export default function TaskList({ label, tasks }: TaskListProps) {
  return (
    <div className="shadow p-2 rounded">
      <span className="leading-7 font-medium">{label}</span>
      <ul className="px-2">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
