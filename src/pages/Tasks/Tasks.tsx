import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import SignInSuccessAlert from "../SignIn/components/SignInSuccessAlert";
import TasksPageHeading from "./components/TasksPageHeading";
import type { Task } from "./lib/types";
import { useState } from "react";
import AddTaskModal from "./components/AddTaskModal/AddTaskModal";
import ActiveTasksCard from "./components/TasksCard/ActiveTasksCard";
import CompletedTasksCard from "./components/TasksCard/CompletedTasksCard";

export default function TasksPage(){
    const [modalOpen, setModalOpen] = useState(false);
    const queryClient = useQueryClient();
    const { data: tasks=[], isLoading } = useQuery<Task[]>({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await fetch("http://localhost:3000/api/tasks", { credentials: "include" })
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
        onError: () => {

        },
    })

    const pendingTasks = tasks.filter(task => task.status === 'pending');
    const completedTasks = tasks.filter(task => task.status === 'completed');

    const handleToggle = (id: string) => { toggleTask(id) }
    return (
        <>
            <SignInSuccessAlert />

            {/* components */}
            <TasksPageHeading onOpen={() => setModalOpen(true)} />
            {/* active tasks card - where user can see todays tasks */}
            <div className="p-3">
                <ActiveTasksCard tasks={pendingTasks} isLoading={isLoading} onToggle={handleToggle} />
            </div>
            {/* completed tasks card - shows the lists of completed task of particular day */}
            <div className="p-3">
                <CompletedTasksCard tasks={completedTasks} onToggle={handleToggle} />
            </div>
            {/* modal */}
            <AddTaskModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    )
}