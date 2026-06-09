// NotesPageModal
export type Category = "personal" | "coding" | "research" | "other";

export interface NotesForm {
    notesTitle: string;
    category: Category;
    notesDescription: string;
}
