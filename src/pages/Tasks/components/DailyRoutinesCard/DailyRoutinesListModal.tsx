import { DialogContent, DialogHeader, DialogTitle, } from "@/components/ui/dialog";
import { Dialog } from "@/components/ui/dialog";
import type { RecurringTask } from "../../lib/types";
import DailyRoutineItem from "./DailyRoutineItem";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface DailyRoutinesListModalProps {
  open: boolean;
  onClose: () => void;
  routines: RecurringTask[];
  onAdd: () => void;
};

export default function DailyRoutinesListModal({ open, onClose, routines, onAdd, } : DailyRoutinesListModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="border-(--border) bg-(--bg-surface) text-(--text-primary)">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl text-(--text-primary)">
            Daily Routines
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2 mt-2">
          {routines.map((routine) => (
            <DailyRoutineItem key={routine.id} routine={routine} />
          ))}
        </div>
        <Button
          onClick={onAdd}
          className="w-full flex mt-2 bg-(--accent-soft) text-(--accent) border border-(--accent)/20 hover:bg-(--accent)/20 transition-colors"
        >
          <Plus />
          Add Routine
        </Button>
      </DialogContent>
    </Dialog>
  );
}
