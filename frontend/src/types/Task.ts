export interface Task {
  id?: number;
  title: string;
  description: string;
  status: 'TODO' | 'IN_PROGRESS' | 'DONE';
  dueDate?: string;
}

export interface ApiError {
  status: number;
  message?: string;
  errors?: Record<string, string>;
}
