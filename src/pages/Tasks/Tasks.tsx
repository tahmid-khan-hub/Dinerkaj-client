import { useQuery } from "@tanstack/react-query";
import SignInSuccessAlert from "../SignIn/components/SignInSuccessAlert";
import TasksPageHeading from "./components/TasksPageHeading";
import type { Task } from "./lib/types";
import { useState } from "react";
import AddTaskModal from "./components/AddTaskModal/AddTaskModal";
import ActiveTasksCard from "./components/TasksCard/ActiveTasksCard";

export default function TasksPage(){
    const [modalOpen, setModalOpen] = useState(false);
    const { data: tasks=[], isLoading } = useQuery<Task[]>({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await fetch("http://localhost:3000/api/tasks", { credentials: "include" })
            if (!res.ok) throw new Error("Failed to fetch tasks");
            return res.json();
        }
    })

    const pendingTasks = tasks.filter(task => task.status === 'pending');
    const completedTasks = tasks.filter(task => task.status === 'completed');

    const handleToggle = (id: string) => {
        console.log(id);
    }
    return (
        <>
            <SignInSuccessAlert />

            {/* components */}
            <TasksPageHeading onOpen={() => setModalOpen(true)} />
            {/* active tasks card - where user can see todays tasks */}
            <div className="p-3">
                <ActiveTasksCard tasks={pendingTasks} isLoading={isLoading} onToggle={handleToggle} />
            </div>
            {/* modal */}
            <AddTaskModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    )
}