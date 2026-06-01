import { useQuery } from "@tanstack/react-query";
import SignInSuccessAlert from "../SignIn/components/SignInSuccessAlert";
import TaskItem from "./components/TaskItem";
import TasksPageHeading from "./components/TasksPageHeading";
import type { Task } from "./lib/types";
import { useState } from "react";
import AddTaskModal from "./components/AddTaskModal/AddTaskModal";

export default function TasksPage(){
    const [modalOpen, setModalOpen] = useState(false);
    const { data: tasks=[], isLoading } = useQuery<Task[]>({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await fetch("http://localhost:3000/tasks", { credentials: "include" })
            if (!res.ok) throw new Error("Failed to fetch tasks");
            return res.json();
        }
    })

    const pendingTasks = tasks.filter(task => task.status === 'pending');
    return (
        <>
            <SignInSuccessAlert />

            {/* components */}
            <TasksPageHeading onOpen={() => setModalOpen(true)} />
            <TaskItem />
            <AddTaskModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    )
}