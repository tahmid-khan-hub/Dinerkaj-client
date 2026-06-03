import type { CompletedTasksCardProps } from "../../lib/types";
import TaskItem from "../TaskItem";

export default function CompletedTasksCard({ tasks, onToggle, }: CompletedTasksCardProps) {
  
  return (
    <>
      <div>
        <h2 className="font-medium text-(--text-secondary) uppercase tracking-wide px-2 my-3">
          Completed Today
        </h2>
      </div>
      <div className="rounded-xl border border-(--border) bg-(--bg-surface) p-4 flex flex-col gap-2">
        {tasks.length === 0 && <p>no completed tasks yet</p>}
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={onToggle} />
        ))}
      </div>
    </>
  );
}
