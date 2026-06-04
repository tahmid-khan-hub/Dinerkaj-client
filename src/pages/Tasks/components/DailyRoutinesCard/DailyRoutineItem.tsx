import { Trash2 } from "lucide-react";
import type { RecurringTask } from "../../lib/types";

interface DailyRoutineItemProps {
  routine: RecurringTask;
  onDelete?: (routine: RecurringTask) => void;
}

export default function DailyRoutineItem({ routine, onDelete  }: DailyRoutineItemProps) {
  return (
    <div className="group flex items-center justify-between py-2 px-3 rounded-lg bg-(--bg-elevated)">
      <span className="text-sm text-(--text-primary) truncate">
        {routine.title}
      </span>
      
      <div className="flex items-center gap-2 shrink-0 ml-2">
        <span className="text-xs px-2 py-0.5 rounded-full border capitalize shrink-0 ml-2 text-(--accent) bg-(--accent-soft) border-(--accent)/20">
          {routine.priority}
        </span>
        {onDelete && <button
          onClick={() => onDelete(routine)}
          className="transition-opacity p-1 rounded text-(--text-muted) hover:text-red-400 hover:bg-(--bg-surface)"
          aria-label={`Delete ${routine.title}`}
        >
          <Trash2 className="" size={20} />
        </button>}
      </div>
    </div>
  );
}
