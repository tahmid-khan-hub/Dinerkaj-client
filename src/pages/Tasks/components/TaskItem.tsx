import { CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TaskItem() {
    const isCompleted = 'completed';
    return (
        <div>
            {/* checkbox */}
            <button>
                {isCompleted ? (<CheckCircle2 className="w-5 h-5 text-(--accent)" />) : (<Circle
                className=
                "w-5 h-5 transition-colors duration-150 hover:text-(--text-muted) hover:text-(--text-muted)" />) }
            </button>
            {/* content */}
            <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                <span
                className={cn(
                "text-sm font-medium leading-snug truncate transition-colors duration-150",
                isCompleted ? "line-through text-(--text-muted)"
                : "text-(--text-primary)")}>
                    title
                </span>
            </div>
        </div>
    )
}