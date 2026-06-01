import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth"
import { Plus } from "lucide-react";
import type { TasksPageHeadingProps } from "../lib/types";

export default function TasksPageHeading({ onOpen } : TasksPageHeadingProps) {
    const { user } = useAuth();
    const firstName = user?.name?.split(" ")[0];

    return (
        <div className="flex items-start justify-between gap-4 p-3">
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl md:text-4xl text-(--text-primary)">
                    Welcome back, <span className="font-serif text-(--accent)">{firstName}</span>.
                </h1>
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