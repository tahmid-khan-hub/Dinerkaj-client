import { Button } from "@/components/ui/button";
import { DialogContent, DialogHeader, DialogTitle, } from "@/components/ui/dialog";
import { CalendarDays, Loader2 } from "lucide-react";
import type { ModalContentProps } from "../lib/types";
import { priorities } from "../lib/utils";

export default function ModalContent({ formData, updateForm, handleClose, isPending, onSubmit, title, submitLabel, showDueDate = true } : ModalContentProps) {
  return (
    <DialogContent className="font-serif border-(--border) text-(--text-primary) bg-(--bg-surface)">
      <DialogHeader>
        <DialogTitle className="font-serif text-xl text-(--text-primary)"> {title ?? "New Task"} </DialogTitle>
      </DialogHeader>

      <div className="flex flex-col gap-4 mt-2">
        {/* Title */}
        <div className="flex flex-col gap-1.5">
            <label className="text-xs text-(--text-secondary) uppercase tracking-wide">
              Title <span className="text-(--accent)">*</span>
            </label>
            <input
              type="text" placeholder="What needs to be done?"
              value={formData.title} 
              onChange={e => updateForm("title", e.target.value)}
              className="w-full bg-(--bg-elevated) border border-(--border) rounded-md px-3 py-2 text-sm text-(--text-primary) placeholder:text-(--text-muted) outline-none focus:border-(--accent) transition-colors"
            />
        </div>
        {/* Description */}
        <div className="flex flex-col gap-1.5">
            <label className="text-xs text-(--text-secondary) uppercase tracking-wide">
              Description <span className="text-(--text-muted)">(optional)</span>
            </label>
            <textarea
              placeholder="Add some details..." rows={3}
              value={formData.description}
              onChange={e => updateForm("description", e.target.value)}
              className="w-full bg-(--bg-elevated) border border-(--border) rounded-md px-3 py-2 text-sm text-(--text-primary) placeholder:text-(--text-muted) outline-none focus:border-(--accent) transition-colors resize-none"
            />
        </div>
        {/* Priority */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-(--text-secondary) uppercase tracking-wide">
            Priority
          </label>
          <div className="flex gap-2">
            {priorities.map(priority => (
              <button
                key={priority.value}
                onClick={() => updateForm("priority", priority.value)}
                className={`flex-1 py-1.5 rounded-md text-xs font-medium border transition-all duration-150
                  ${formData.priority === priority.value
                    ? "border-(--accent) bg-(--accent-soft) text-(--accent)"
                    : "border-(--border) bg-(--bg-elevated) text-(--text-secondary) hover:border-(--accent)/40 hover:text-(--text-primary)"
                  }`}
              >
                {priority.label}
              </button>
            ))}
          </div>
        </div>
        {/* Due Date */}
        {showDueDate && <div className="flex flex-col gap-1.5">
            <label className="text-xs text-(--text-secondary) uppercase tracking-wide">
              Due Date <span className="text-(--text-muted)">(optional)</span>
            </label>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-(--text-muted)" />
              <input
                type="date"
                value={formData.due_date ?? ""}
                onChange={e => updateForm("due_date", e.target.value)}
                className="w-full bg-(--bg-elevated) border border-(--border) rounded-md pl-9 pr-3 py-2 text-sm text-(--text-primary) outline-none focus:border-(--accent) transition-colors"
              />
            </div>
        </div> }
        {/* Actions */}
        <div className="flex gap-2 pt-1">
            <Button
              onClick={handleClose}
              className="flex-1 bg-transparent border border-(--border) text-(--text-secondary) hover:bg-(--bg-elevated) hover:text-(--text-primary) transition-colors"
            >
              Cancel
            </Button>
            <Button
              onClick={onSubmit}
              disabled={!formData.title.trim() || isPending}
              className="flex-1 bg-(--accent-soft) text-(--accent) border border-(--accent)/20 hover:bg-(--accent)/20 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              {isPending ? (
              <span className="flex items-center gap-2"> <Loader2 className="w-3 h-3 animate-spin" /> Adding... </span>
              ) : (submitLabel ?? "Add Task")}
            </Button>
        </div>
      </div>
    </DialogContent>
  );
}
