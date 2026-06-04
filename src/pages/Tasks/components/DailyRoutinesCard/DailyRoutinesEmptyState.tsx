import { Plus, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DailyRoutinesEmptyStateProps { 
    onAdd: () => void 
};

export default function DailyRoutinesEmptyState({ onAdd }: DailyRoutinesEmptyStateProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col items-center gap-2 py-4 text-center">
        <div className="w-10 h-10 rounded-full bg-(--bg-elevated) border border-(--border) flex items-center justify-center">
          <Repeat className="w-4 h-4 text-(--text-muted)" />
        </div>
        <p className="text-sm text-(--text-secondary)">No daily routines yet</p>
        <p className="text-xs text-(--text-muted) leading-relaxed">
          Add tasks you do every day, they'll appear in your active tasks automatically.
        </p>
      </div>
      <Button
        onClick={onAdd}
        className="w-full flex bg-(--accent-soft) text-(--accent) border border-(--accent)/20 hover:bg-(--accent)/20 transition-colors"
      >
        <Plus />
        Add Routine
      </Button>
    </div>
  );
}
