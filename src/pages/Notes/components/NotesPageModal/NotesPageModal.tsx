import { Dialog } from "@/components/ui/dialog";
import NotesPageModalContent from "./NotesPageModalContent";
import type { NotesForm } from "../../lib/types";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface NotesPageModalProps {
    open: boolean;
    onClose: () => void;
}

export default function NotesPageModal({ open, onClose }:NotesPageModalProps) {
  const queryClient = useQueryClient();
  const NotesInitialForm: NotesForm = {
    title: "",
    category: "personal",
    description: "",
  }

  const [notesFormData, setNotesFormData] = useState<NotesForm>(NotesInitialForm);

  const { mutate, isPending } = useMutation({
    mutationFn: async(data: NotesForm) => {
      const res = await fetch(`http://localhost:3000/api/notes`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if(!res.ok) throw new Error("Failed to create new note");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] })
      CloseNotesModal()
    },
    onError: () => {  }
  })

  const updateNotesForm = (field: string, value: string) => {
    setNotesFormData(prev => ({...prev, [field]: value}))
  }

  const CloseNotesModal = () => {
    setNotesFormData(NotesInitialForm);
    onClose();
  }

  const submitNote = () => {
    if(!notesFormData.title.trim()) return;
    mutate({...notesFormData, 
      title: notesFormData.title.trim(),
      description: notesFormData.description.trim(),
    })
  }
  return (
    <>
      <Dialog open={open} onOpenChange={CloseNotesModal}>
        <NotesPageModalContent
        formData={notesFormData}
        updateForm={updateNotesForm}
        handleClose={CloseNotesModal}
        isPending={isPending}
        onSubmit={submitNote} />
      </Dialog>
    </>
  )
}