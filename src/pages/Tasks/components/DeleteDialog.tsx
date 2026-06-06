import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction, } from "@/components/ui/alert-dialog";
import { Loader2 } from "lucide-react";
import type { DeleteDialogProps } from "../lib/types";

export default function DeleteDialog({ open, title, description, isPending, onConfirm, onCancel, }: DeleteDialogProps) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="bg-(--bg-surface) border border-(--border)">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-(--text-primary)">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-(--text-secondary)">
            {description}
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
