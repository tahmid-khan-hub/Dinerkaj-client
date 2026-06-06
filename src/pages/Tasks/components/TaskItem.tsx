import { cn } from "@/lib/utils";
import type { Task } from "../lib/types";
import { CheckCircle2, Circle, Trash2 } from "lucide-react";
import { useState } from "react";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
   const [confirmOpen, setConfirmOpen] = useState(false);
  const isCompleted = task.status === "completed";

  return (
    <div
      className={cn(
        "group flex items-start gap-3 px-4 py-3 rounded-lg border transition-all duration-200",
        isCompleted
          ? "border-transparent opacity-60"
          : "border-transparent hover:border-(--border) hover:bg-(--bg-elevated)",
      )}
    >
      {/* Checkbox */}
      <button onClick={() => onToggle(task.id)} className="mt-0.5 shrink-0">
        {isCompleted ? (
          <CheckCircle2 className="w-5 h-5 text-(--accent)" />
        ) : (
          <Circle className="w-5 h-5 text-(--text-muted) group-hover:text-(--accent) transition-colors duration-150" />
        )}
      </button>

      {/* Content */}
      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
        <span
          className={cn(
            "text-sm font-medium leading-snug truncate transition-colors duration-150",
            isCompleted
              ? "line-through text-(--text-muted)"
              : "text-(--text-primary)",
          )}
        >
          {task.title}
        </span>

        {/* Meta */}
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-xs text-(--text-muted) capitalize">
            {task.priority}
          </span>
          {task.due_date && !isCompleted && (
            <>
              <span className="text-xs text-(--text-muted)">·</span>
              <span className="text-xs text-(--text-muted)">
                Due {task.due_date}
              </span>
            </>
          )}
          {isCompleted && task.completed_at && (
            <>
              <span className="text-xs text-(--text-muted)">·</span>
              <span className="text-xs text-(--text-muted)">Completed</span>
            </>
          )}
        </div>
      </div>
      {/* Delete button */}
      {!isCompleted && (
        <button
          onClick={() => setConfirmOpen(true)}
          className="opacity-0 group-hover:opacity-100 transition-opacity mt-0.5 p-1 rounded text-(--text-muted) hover:text-red-400 hover:bg-(--bg-surface) shrink-0"
          aria-label={`Delete ${task.title}`}>
          <Trash2 className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
