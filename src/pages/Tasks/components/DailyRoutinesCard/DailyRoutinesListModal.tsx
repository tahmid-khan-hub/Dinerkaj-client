import { DialogContent, DialogHeader, DialogTitle, } from "@/components/ui/dialog";
import { Dialog } from "@/components/ui/dialog";
import type { RecurringTask } from "../../lib/types";
import DailyRoutineItem from "./DailyRoutineItem";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import DeleteRoutineDialog from "./DeleteRoutine/DeleteRoutineDialog";

interface DailyRoutinesListModalProps {
  open: boolean;
  onClose: () => void;
  routines: RecurringTask[];
  onAdd: () => void;
};

async function deleteRoutine(id: string) {
  const res = await fetch(`http://localhost:3000/api/recurring-tasks/${id}`, { method: "DELETE", credentials: "include" });
  if (!res.ok) throw new Error("Failed to delete routine");
}

export default function DailyRoutinesListModal({ open, onClose, routines, onAdd, } : DailyRoutinesListModalProps) {
  const queryClient = useQueryClient();
  const [pendingDelete, setPendingDelete] = useState<RecurringTask | null>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteRoutine(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recurring-tasks"] });
      setPendingDelete(null);
    },
  });

  return (
    <>
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="border-(--border) bg-(--bg-surface) text-(--text-primary)">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl text-(--text-primary)">
              Daily Routines
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2 mt-2">
            {routines.map((routine) => (
              <DailyRoutineItem key={routine.id} routine={routine} onDelete={setPendingDelete} />
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

      <DeleteRoutineDialog
        open={!!pendingDelete}
        routineTitle={pendingDelete?.title ?? ""}
        isPending={isPending}
        onConfirm={() => pendingDelete && mutate(pendingDelete.id)}
        onCancel={() => setPendingDelete(null)} />
    </>
  );
}
