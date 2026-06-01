import { Dialog } from "@/components/ui/dialog";
import AddTaskModalContent from "./AddTaskModalContent";
import type { AddTaskModalProps, TaskForm } from "../../lib/types";
import { useState } from "react";

export default function AddTaskModal({ open, onClose } : AddTaskModalProps) {
    const initialForm: TaskForm = {
        title: "",
        description: "",
        priority: "medium",
        due_date: "",
    }

    const [formData, setFormData] = useState<TaskForm>(initialForm);

    const updateForm = (field: keyof TaskForm, value: string) => {
        setFormData(prev => ({...prev, [field]: value}))
    }

    const handleClose = () => {
        setFormData(initialForm)
        onClose()
    }
    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <AddTaskModalContent 
            formData={formData}
            updateForm={updateForm}
            handleClose={handleClose}
            onClose={onClose} />
        </Dialog>
    )
}