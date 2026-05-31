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
