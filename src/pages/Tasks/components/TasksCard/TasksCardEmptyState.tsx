import { CheckCheck, ClipboardList } from "lucide-react";

interface TasksCardEmptyStateProps {
  type: "active" | "completed";
};

export default function TasksCardEmptyState({ type }: TasksCardEmptyStateProps) {
  const config = {
    active: {
      icon: <ClipboardList className="w-8 h-8 text-(--text-muted)" />,
      message: "Nothing on your plate right now.",
      sub: "Add a task and make today count.",
    },
    completed: {
      icon: <CheckCheck className="w-8 h-8 text-(--text-muted)" />,
      message: "No completed tasks yet today.",
      sub: "Finish something and it'll show up here.",
    },
  };

  const { icon, message, sub } = config[type];

  return (
    <div className="flex flex-col items-center gap-2 py-8 px-4">
      {icon}
      <p className="text-sm text-(--text-muted) text-center">{message}</p>
      <p className="text-xs text-(--text-muted) text-center opacity-60">
        {sub}
      </p>
    </div>
  );
}
