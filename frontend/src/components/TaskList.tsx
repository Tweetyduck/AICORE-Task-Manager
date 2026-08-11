import React from 'react';
import { Task } from '../types/Task';

interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: number) => Promise<void>;
  isDeleting: boolean;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete, isDeleting }) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'TODO':
        return 'status-todo';
      case 'IN_PROGRESS':
        return 'status-in-progress';
      case 'DONE':
        return 'status-done';
      default:
        return '';
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'IN_PROGRESS':
        return 'In Progress';
      case 'DONE':
        return 'Done';
      default:
        return status;
    }
  };

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div style={{ fontSize: '48px', marginBottom: '15px' }}>📝</div>
        <h3>No tasks yet</h3>
        <p>Create your first task using the form above to get started!</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <div key={task.id} className="task-item">
          <div className="task-content">
            <div className="task-title">{task.title}</div>
            {task.description && <div className="task-description">{task.description}</div>}
            <div className="task-meta">
              <span className={`status-badge ${getStatusClass(task.status)}`}>
                {getStatusLabel(task.status)}
              </span>
              {task.dueDate && (
                <span>Due: {formatDate(task.dueDate)}</span>
              )}
            </div>
          </div>
          <div className="task-actions">
            <button
              className="btn-edit"
              onClick={() => onEdit(task)}
              disabled={isDeleting}
            >
              Edit
            </button>
            <button
              className="btn-danger"
              onClick={() => onDelete(task.id!)}
              disabled={isDeleting}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
