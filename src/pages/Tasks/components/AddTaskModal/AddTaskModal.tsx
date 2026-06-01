import { Dialog } from "@/components/ui/dialog";
import AddTaskModalContent from "./AddTaskModalContent";
import type { AddTaskModalProps } from "../../lib/types";

export default function AddTaskModal({ onClose } : AddTaskModalProps) {
    return (
        <Dialog>
            <AddTaskModalContent onClose={onClose} />
        </Dialog>
    )
}