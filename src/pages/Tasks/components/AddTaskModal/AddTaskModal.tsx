import { Dialog } from "@/components/ui/dialog";
import type { AddTaskModalProps, TaskForm } from "../../lib/types";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ModalContent from "../ModalContent";

async function createNewTask(data: TaskForm) {
    const res = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    if(!res.ok) throw new Error("Failed to create new task");
    return res.json();
}

export default function AddTaskModal({ open, onClose } : AddTaskModalProps) {
    const queryClient = useQueryClient();
    const initialForm: TaskForm = {
        title: "",
        description: "",
        priority: "medium",
        due_date: "",
    }

    const [formData, setFormData] = useState<TaskForm>(initialForm);

    const { mutate, isPending } = useMutation({
        mutationFn: createNewTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] })
            handleClose()
        },
        onError: () => {

        }
    })

    const updateForm = (field: keyof TaskForm, value: string) => {
        setFormData(prev => ({...prev, [field]: value}))
    }

    const handleClose = () => {
        setFormData(initialForm)
        onClose()
    }

    const handleSubmit = () => {
        if(!formData.title.trim()) return;
        mutate({
            ...formData,
            title: formData.title.trim(),
            description: formData.description.trim(),
            due_date: formData.due_date || "",
        })
    }
    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <ModalContent
            formData={formData}
            updateForm={updateForm}
            handleClose={handleClose}
            isPending={isPending}
            onSubmit={handleSubmit}
            />
        </Dialog>
    )
}