import type { RecurringTask } from "../../lib/types";

interface DailyRoutineItemProps {
  routine: RecurringTask;
}

export default function DailyRoutineItem({ routine }: DailyRoutineItemProps) {
  return (
    <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-(--bg-elevated)">
      <span className="text-sm text-(--text-primary) truncate">
        {routine.title}
      </span>
      <span className="text-xs px-2 py-0.5 rounded-full border capitalize shrink-0 ml-2 text-(--accent) bg-(--accent-soft) border-(--accent)/20">
        {routine.priority}
      </span>
    </div>
  );
}
