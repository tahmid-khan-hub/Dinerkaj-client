import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import SignInSuccessAlert from "../SignIn/components/SignInSuccessAlert";
import TasksPageHeading from "./components/TasksPageHeading";
import type { Task } from "./lib/types";
import { useState } from "react";
import AddTaskModal from "./components/AddTaskModal/AddTaskModal";
import ActiveTasksCard from "./components/TasksCard/ActiveTasksCard";
import CompletedTasksCard from "./components/TasksCard/CompletedTasksCard";
import DailyRoutinesCard from "./components/DailyRoutinesCard/DailyRoutinesCard";
import { AnimatePresence } from "framer-motion";
import { SuccessAlert } from "@/hooks/Alert/SuccessAlert";
import { ErrorAlert } from "@/hooks/Alert/ErrorAlert";
import TaskProgressCircle from "./components/TaskProgressCircle/TaskProgressCircle";

export default function TasksPage(){
    const [alertType, setAlertType] = useState<"success" | "error" | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const queryClient = useQueryClient();
    const { data: tasks = [], isLoading } = useQuery<Task[]>({
        queryKey: ["tasks"],
        queryFn: async () => {
            await fetch("http://localhost:3000/api/recurring-tasks/generate", {
                method: "PATCH",
                credentials: "include",
            });
            const res = await fetch("http://localhost:3000/api/tasks", { credentials: "include" });
            if (!res.ok) throw new Error("Failed to fetch tasks");
            return res.json();
        }
    })

    const { mutate: toggleTask } = useMutation({
        mutationFn: async(id: string) => {
            const res = await fetch(`http://localhost:3000/api/tasks/${id}/toggle`, {
                method: 'PATCH',
                credentials: 'include',
            });
            if(!res.ok) throw new Error("Failed to toggle task");
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] })
        },
    })

    const { mutate: deleteTask } = useMutation({
        mutationFn: async(id: string) => {
            const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {method: "DELETE", credentials: "include",});
            if(!res.ok) throw new Error("Failed to toggle task");
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
    })

    const pendingTasks = tasks.filter(task => task.status === 'pending');
    const completedTasks = tasks.filter(task => task.status === 'completed');
    const handleToggle = (id: string) => { toggleTask(id) }
    const handleDelete = (id: string) => deleteTask(id);
    return (
        <>
            <SignInSuccessAlert />
            <TasksPageHeading taskCount={pendingTasks.length} onOpen={() => setModalOpen(true)} />
            <div className="p-3 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-3 items-start">
                {/* Left column */}
                <div className="flex flex-col gap-3">
                <ActiveTasksCard tasks={pendingTasks} isLoading={isLoading} onToggle={handleToggle} onDelete={handleDelete} />
                    {/* Mobile only */}
                    <div className="lg:hidden mt-9 pb-3"> <TaskProgressCircle /> </div>
                <CompletedTasksCard tasks={completedTasks} onToggle={handleToggle} />
                </div>
                {/* Right column */}
                <div className="hidden lg:block">
                    <TaskProgressCircle />
                    <DailyRoutinesCard onSuccess={() => setAlertType("success")} onError={() => setAlertType("error")} />
                </div>
            </div>
            {/* Mobile only */}
            <div className="lg:hidden px-3 pb-3">
                <DailyRoutinesCard onSuccess={() => setAlertType("success")} onError={() => setAlertType("error")} />
            </div>
            <AddTaskModal open={modalOpen} onClose={() => setModalOpen(false)}
            onSuccess={() => setAlertType("success")} onError={() => setAlertType("error")} />

            {/* Alerts */}
            <AnimatePresence>
                {alertType === "success" && (
                    <SuccessAlert
                        title="Done!"
                        description="Your task has been added successfully."
                        onClose={() => setAlertType(null)}
                    />
                )}
                {alertType === "error" && (
                    <ErrorAlert
                        title="Something went wrong"
                        description="Failed to add task. Please try again."
                        onClose={() => setAlertType(null)}
                    />
                )}
            </AnimatePresence>
        </>
    )
}