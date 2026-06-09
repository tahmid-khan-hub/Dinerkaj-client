import { Button } from "@/components/ui/button";
import { DialogContent, DialogHeader, DialogTitle, } from "@/components/ui/dialog";

export default function NotesPageModalContent() {
    return (
        <>
            <DialogContent className="font-serif border-(--border) text-(--text-primary) bg-(--bg-surface)">
                <DialogHeader>
                    <DialogTitle className="font-serif text-xl text-(--text-primary)"> Create New Note </DialogTitle>
                </DialogHeader>

                <div className="flex flex-col gap-4 mt-2">
                    {/* Notes Title */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-(--text-secondary) uppercase tracking-wide"> Notes Title </label>
                        <input
                        type="text" placeholder="Enter a descriptive title..."
                        className="w-full bg-(--bg-elevated) border border-(--border) rounded-md px-3 py-2 text-sm text-(--text-primary) placeholder:text-(--text-muted) outline-none focus:border-(--accent) transition-colors"
                        />
                    </div>
                    {/* select category */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-(--text-secondary) uppercase tracking-wide"> Category </label>  
                    </div>
                    {/* text field */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-(--text-secondary) uppercase tracking-wide"> Write your thoughts </label>
                        <textarea
                        placeholder="Start typing your brilliance here..." rows={6}
                        className="w-full bg-(--bg-elevated) border border-(--border) rounded-md px-3 py-2 text-sm text-(--text-primary) placeholder:text-(--text-muted) outline-none focus:border-(--accent) transition-colors resize-none"
                        />
                    </div>
                    {/* Actions */}
                    <div className="flex gap-2 pt-1">
                        <Button
                        className="flex-1 bg-transparent border border-(--border) text-(--text-secondary) hover:bg-(--bg-elevated) hover:text-(--text-primary) transition-colors"
                        >
                            Cancel
                        </Button>
                        <Button
                        className="flex-1 bg-(--accent-soft) text-(--accent) border border-(--accent)/20 hover:bg-(--accent)/20 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                            Save Note
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </>
    )
}