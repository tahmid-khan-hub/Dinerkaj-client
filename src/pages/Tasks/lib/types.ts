export type Priority = "low" | "medium" | "high";

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: Priority;
  due_date?: string | null;
  status: "pending" | "completed";
  completed_at?: string | null;
}

export interface TaskForm {
  title: string;
  description: string;
  priority: Priority;
  due_date: string;
};

export interface TasksPageHeadingProps {
  onOpen: () => void;
}

export interface AddTaskModalProps {
  open: boolean;
  onClose: () => void;
}

export interface AddTaskModalContentProps {
  formData: TaskForm;
  updateForm: (field: keyof TaskForm, value: string) => void;
  handleClose: () => void;
  onClose: () => void;
}
