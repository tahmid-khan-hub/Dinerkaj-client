// NotesPageModal
export type Category = "personal" | "coding" | "research" | "other";

export interface NotesForm {
    notesTitle: string;
    category: Category;
    notesDescription: string;
}

export interface NotesPageModalContentProps {
    formData: { notesTitle: string; category: Category; notesDescription: string; };
    updateForm: (field: string, value: string) => void;
    handleClose: () => void;
    isPending: boolean;
    onSubmit: () => void;
}