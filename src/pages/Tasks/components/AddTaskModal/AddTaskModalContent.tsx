import { Button } from "@/components/ui/button";
import { DialogContent, DialogHeader, DialogTitle, } from "@/components/ui/dialog";
import { CalendarDays } from "lucide-react";
import type { AddTaskModalContentProps } from "../../lib/types";

export default function AddTaskModalContent({ onClose } : AddTaskModalContentProps) {
  return (
    <DialogContent className="font-serif border-(--border) text-(--text-primary) bg-(--bg-surface)">
      <DialogHeader>
        <DialogTitle className="font-serif text-xl text-(--text-primary)"> New Task </DialogTitle>
      </DialogHeader>

      <div className="flex flex-col gap-4 mt-2">
        {/* Title */}
        <div className="flex flex-col gap-1.5">
            <label className="text-xs text-(--text-secondary) uppercase tracking-wide">
              Title <span className="text-(--accent)">*</span>
            </label>
            <input
              type="text"
              placeholder="What needs to be done?"
              className="w-full bg-(--bg-elevated) border border-(--border) rounded-md px-3 py-2 text-sm text-(--text-primary) placeholder:text-(--text-muted) outline-none focus:border-(--accent) transition-colors"
            />
        </div>
        {/* Description */}
        <div className="flex flex-col gap-1.5">
            <label className="text-xs text-(--text-secondary) uppercase tracking-wide">
              Description <span className="text-(--text-muted)">(optional)</span>
            </label>
            <textarea
              placeholder="Add some details..."
              rows={3}
              className="w-full bg-(--bg-elevated) border border-(--border) rounded-md px-3 py-2 text-sm text-(--text-primary) placeholder:text-(--text-muted) outline-none focus:border-(--accent) transition-colors resize-none"
            />
        </div>
        {/* Due Date */}
        <div className="flex flex-col gap-1.5">
            <label className="text-xs text-(--text-secondary) uppercase tracking-wide">
              Due Date <span className="text-(--text-muted)">(optional)</span>
            </label>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-(--text-muted)" />
              <input
                type="date"
                className="w-full bg-(--bg-elevated) border border-(--border) rounded-md pl-9 pr-3 py-2 text-sm text-(--text-primary) outline-none focus:border-(--accent) transition-colors"
              />
            </div>
        </div>
        {/* Actions */}
        <div className="flex gap-2 pt-1">
            <Button
              onClick={onClose}
              className="flex-1 bg-transparent border border-(--border) text-(--text-secondary) hover:bg-(--bg-elevated) hover:text-(--text-primary) transition-colors"
            >
              Cancel
            </Button>
            <Button
              className="flex-1 bg-(--accent-soft) text-(--accent) border border-(--accent)/20 hover:bg-(--accent)/20 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Add Task
            </Button>
        </div>
      </div>
    </DialogContent>
  );
}
