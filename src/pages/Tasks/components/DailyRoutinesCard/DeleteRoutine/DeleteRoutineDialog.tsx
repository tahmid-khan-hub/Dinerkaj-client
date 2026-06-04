import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction, } from "@/components/ui/alert-dialog";
import type { DeleteRoutineDialogProps } from "@/pages/Tasks/lib/types";
import { Loader2 } from "lucide-react";

export default function DeleteRoutineDialog({ open, routineTitle, isPending, onConfirm, onCancel, }: DeleteRoutineDialogProps) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="bg-(--bg-surface) border border-(--border)">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-(--text-primary)">
            Delete routine?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-(--text-secondary)">
            <span className="text-(--text-primary) font-medium">
              "{routineTitle}"
            </span>{" "}
            will be permanently removed. Tasks already generated for today won't be affected.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={onCancel}
            disabled={isPending}
            className="bg-transparent border border-(--border) text-(--text-secondary) hover:bg-(--bg-elevated) hover:text-(--text-primary)"
          >
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={onConfirm}
            disabled={isPending}
            className="bg-red-900/40 text-red-400 border border-red-900/60 hover:bg-red-900/60 flex items-center gap-2"
          >
            {isPending && <Loader2 className="size-3.5 animate-spin" />}
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
