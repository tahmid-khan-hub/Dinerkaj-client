// NotesPageModal
export type Category = "personal" | "coding" | "research" | "other";

export interface NotesForm {
    title: string;
    category: Category;
    description: string;
}

export interface NotesPageModalContentProps {
    formData: { title: string; category: Category; description: string; };
    updateForm: (field: string, value: string) => void;
    handleClose: () => void;
    isPending: boolean;
    onSubmit: () => void;
}