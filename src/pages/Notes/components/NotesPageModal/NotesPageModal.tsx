import { Dialog } from "@/components/ui/dialog";
import NotesPageModalContent from "./NotesPageModalContent";

interface NotesPageModalProps {
    open: boolean;
    onClose: () => void;
}

export default function NotesPageModal({ open, onClose }:NotesPageModalProps) {
    return (
        <>
            <Dialog open={open}>
              <NotesPageModalContent />
            </Dialog>
        </>
    )
}