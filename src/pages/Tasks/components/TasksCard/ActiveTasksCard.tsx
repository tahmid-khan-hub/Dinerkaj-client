import type { ActiveTasksCardProps } from "../../lib/types";
import TaskItem from "../TaskItem";

export default function ActiveTasksCard({ tasks, isLoading, onToggle, }: ActiveTasksCardProps) {
  if (isLoading) return <p>loading...</p>;
  if (tasks.length === 0) return <p>no active tasks</p>;
  
  return (
    <>
        <div>
            <h2 className="font-medium text-(--text-secondary) uppercase tracking-wide px-2 my-3">
                Active Tasks
            </h2>
        </div>
        <div className="rounded-xl border border-(--border) bg-(--bg-surface) p-3 flex flex-col gap-2">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onToggle={onToggle} />
            ))}
        </div>
    </>
  );
}
