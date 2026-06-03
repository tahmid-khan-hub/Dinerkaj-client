import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AddRecurringTaskModalProps, RecurringTaskForm } from "../../lib/types";
import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import ModalContent from "../ModalContent";

const initialForm: RecurringTaskForm = {
  title: "",
  description: "",
  priority: "medium",
};

async function createRecurringTasks(data: RecurringTaskForm) {
    const res = await fetch(`http://localhost:3000/api/recurring-tasks`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if(!res.ok) throw new Error("Failed to create recurring task");
    return res.json();
}

export default function AddRecurringTaskModal({ open, onClose }: AddRecurringTaskModalProps) {
    const queryClient = useQueryClient();
    const [formData, setFormData] = useState<RecurringTaskForm>(initialForm);

    const { mutate, isPending } = useMutation({
        mutationFn: createRecurringTasks,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["recurring-tasks"] });
            handleClose();
        },
        onError: () => {

        },
    })

    const updateForm = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleClose = () => {
        setFormData(initialForm);
        onClose()
    }

    const handleSubmit = () => {
        if(!formData.title.trim()) return;
        mutate({
            ...formData,
            title: formData.title.trim(),
            description: formData.description.trim(),
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
            title="New Daily Routine"
            submitLabel="Add Routine"
            showDueDate={false} />
        </Dialog>
    )
}