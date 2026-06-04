import { useQuery } from "@tanstack/react-query"
import { Repeat } from "lucide-react";
import { useState } from "react"
import AddRecurringTaskModal from "../AddRecurringTaskModal/AddRecurringTaskModal";
import DailyRoutineItem from "./DailyRoutineItem";
import type { RecurringTask } from "../../lib/types";

export default function DailyRoutinesCard() {
    const [addOpenModal, setAddOpenModal] = useState(false)
    const [listModalOpen, setListModalOpen] = useState(false)

    const { data: routines = [] } = useQuery({
        queryKey: ["recurring-tasks"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/api/recurring-tasks`, {
                method: "GET",
                credentials: "include",
            });
            if (!res.ok) throw new Error("Failed to fetch recurring tasks");
            return res.json();
        },
    });

    const preview = routines.slice(0, 3);
    return (
        <>
            <div>
                <h2 className="font-medium text-(--text-secondary) uppercase tracking-wide px-2 my-3"> Daily Routines </h2>
            </div>
            <div className="rounded-xl border border-(--border) bg-(--bg-surface) p-4 flex flex-col gap-3">
                {/* Header */}
                <div className="flex items-center gap-2">
                    <Repeat className="w-4 h-4 text-(--accent)" />
                    <span className="text-sm font-medium text-(--text-primary)">Auto-added every day</span>
                </div>
                {/* Content */}
                {routines.length === 0 ? 
                    <p>add routine</p>
                    : 
                    <>
                        <div className="flex flex-col gap-1">
                            {preview.map((routine: RecurringTask) => (
                                <DailyRoutineItem key={routine.id} routine={routine} />
                            ))}
                        </div>
                        <button
                        onClick={() => setListModalOpen(true)}
                        className="text-xs text-(--accent) hover:text-(--accent)/70 transition-colors text-left"
                        >
                            {routines.length > 3 ? `See all ${routines.length} routines →`
                            : "Manage routines →"}
                        </button>
                    </>
                }
            </div>

            <AddRecurringTaskModal open={addOpenModal} onClose={() => setAddOpenModal(false)} />
            
        </>
    )
}