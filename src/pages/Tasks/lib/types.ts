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
  taskCount: number;
  onOpen: () => void;
}

// Add task modal
export interface AddTaskModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onError: () => void;
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
  onSuccess: () => void;
  onError: () => void;
}

// DailyRoutine Card
export interface DailyRoutinesCardProps {
  onSuccess: () => void;
  onError: () => void;
}

// TasksCard
export interface ActiveTasksCardProps {
  tasks: Task[];
  isLoading: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export interface CompletedTasksCardProps {
  tasks: Task[];
  onToggle: (id: string) => void;
}

// DeleteRoutine
export interface DeleteRoutineDialogProps {
  open: boolean;
  routineTitle: string;
  isPending: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

// DeleteDialog 
export interface DeleteDialogProps {
  open: boolean;
  title: string;
  description: string;
  isPending: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}