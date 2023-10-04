import { TaskGroup } from "@/types/globalTypes";
import TaskList from "./taskList";

interface TaskGroupProps {
  tasks: TaskGroup;
}

export default function TaskGroup({ tasks }: TaskGroupProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {tasks.frontend.length > 0 && (
        <TaskList label="Front" tasks={tasks.frontend} />
      )}
      {tasks.backend.length > 0 && (
        <TaskList label="Back" tasks={tasks.backend} />
      )}
      {tasks.devops.length > 0 && (
        <TaskList label="DevOps" tasks={tasks.devops} />
      )}
      {tasks.lead.length > 0 && (
        <TaskList label="Lead" tasks={tasks.lead} />
      )}
      {tasks.other.length > 0 && (
        <TaskList label="Autres" tasks={tasks.other} />
      )}
    </div>
  );
}
