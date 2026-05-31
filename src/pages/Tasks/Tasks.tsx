import { useQuery } from "@tanstack/react-query";
import SignInSuccessAlert from "../SignIn/components/SignInSuccessAlert";
import TaskItem from "./components/TaskItem";
import TasksPageHeading from "./components/TasksPageHeading";
import type { Task } from "./lib/types";

export default function TasksPage(){
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
            <TasksPageHeading />
            <TaskItem />
        </>
    )
}