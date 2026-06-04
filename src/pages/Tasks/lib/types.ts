export type Priority = "low" | "medium" | "high";

// Tasks page
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

// Tasks heading
export interface TasksPageHeadingProps {
  onOpen: () => void;
}

// Add task modal
export interface AddTaskModalProps {
  open: boolean;
  onClose: () => void;
}

// Modal
export interface ModalContentProps {
  formData: { title: string; description: string; priority: Priority; due_date?: string };
  updateForm: (field: string, value: string) => void;
  handleClose: () => void;
  isPending: boolean;
  onSubmit: () => void;
  title?: string;
  submitLabel?: string;
  showDueDate?: boolean;
}

// Recurring tasks
export interface RecurringTask {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  priority: Priority;
  last_generated: string | null;
  created_at: string;
  updated_at: string;
}

export interface RecurringTaskForm {
  title: string;
  description: string;
  priority: Priority;
};

export interface AddRecurringTaskModalProps {
  open: boolean;
  onClose: () => void;
}

// TasksCard
export interface ActiveTasksCardProps {
  tasks: Task[];
  isLoading: boolean;
  onToggle: (id: string) => void;
}

export interface CompletedTasksCardProps {
  tasks: Task[];
  onToggle: (id: string) => void;
}