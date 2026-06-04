import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth"
import { Plus } from "lucide-react";
import type { TasksPageHeadingProps } from "../lib/types";

export default function TasksPageHeading({ taskCount, onOpen } : TasksPageHeadingProps) {
    const { user } = useAuth();
    const firstName = user?.name?.split(" ")[0];

    return (
        <div className="flex items-start justify-between gap-4 p-3">
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl md:text-4xl text-(--text-primary)">
                    Welcome back, <span className="font-serif text-(--accent)">{firstName}</span>.
                </h1>
                <p className="text-sm text-(--text-secondary)">
                    {taskCount === 0 ? "You're all caught up for today." : 
                    <>You have <span className="text-(--accent)">{taskCount}</span> active {taskCount === 1 ? "task" : "tasks"} for today.</>}
                </p>
            </div>
            <div>
                <Button onClick={onOpen} className="bg-(--accent-soft) text-(--accent) p-4">
                    <Plus />
                    New Task
                </Button>
            </div>
        </div>
    )
}