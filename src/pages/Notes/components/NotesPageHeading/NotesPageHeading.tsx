import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface NotesPageHeadingProps {
    onOpen: () => void;
}

export default function NotesPageHeading({ onOpen } : NotesPageHeadingProps) {
    return (
        <>
            <div className="flex justify-between">
                <div className="pl-3 pt-3">
                    <h1 className="text-3xl md:text-4xl text-(--text-primary)">My Notes</h1>
                    <p className="mt-1 text-sm text-(--text-secondary)">Capture your thoughts and organize your workflows.</p>
                </div>
                <div className="p-3">
                    <Button onClick={onOpen} className="bg-(--accent-soft) text-(--accent) p-5">
                    <Plus />
                    Create New Note
                </Button>
                </div>
            </div>
        </>
    )
}