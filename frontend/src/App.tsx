import { useEffect, useState } from 'react';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { Task, ApiError } from './types/Task';
import { taskService } from './services/taskService';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState<string>('');
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch tasks on component mount
  useEffect(() => {
    loadTasks();
  }, []);

  // Clear success message after 3 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const loadTasks = async () => {
    setIsLoading(true);
    setApiError('');
    try {
      const data = await taskService.getAllTasks();
      setTasks(data);
    } catch (error) {
      console.error('Error loading tasks:', error);
      setApiError('Failed to load tasks. Please ensure the backend server is running.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateOrUpdateTask = async (task: Task) => {
    try {
      if (editingTask && editingTask.id) {
        // Update existing task
        const updated = await taskService.updateTask(editingTask.id, task);
        setTasks(tasks.map(t => (t.id === editingTask.id ? updated : t)));
        setSuccessMessage('Task updated successfully!');
        setEditingTask(null);
      } else {
        // Create new task
        const created = await taskService.createTask(task);
        setTasks([...tasks, created]);
        setSuccessMessage('Task created successfully!');
      }
    } catch (error: any) {
      console.error('Error saving task:', error);
      throw error;
    }
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteTask = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setIsDeleting(true);
      try {
        await taskService.deleteTask(id);
        setTasks(tasks.filter(t => t.id !== id));
        setSuccessMessage('Task deleted successfully!');
      } catch (error) {
        console.error('Error deleting task:', error);
        setApiError('Failed to delete task. Please try again.');
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>📋 Task Manager</h1>
        <p>Organize your work, one task at a time</p>
      </div>

      {apiError && <div className="api-error">{apiError}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      <TaskForm
        onSubmit={handleCreateOrUpdateTask}
        initialTask={editingTask || undefined}
        isEditing={!!editingTask}
        onCancel={handleCancelEdit}
      />

      <h2 style={{ marginBottom: '20px', color: '#333' }}>
        Tasks ({tasks.length})
      </h2>

      {isLoading ? (
        <div className="empty-state">
          <div style={{ fontSize: '48px', marginBottom: '15px' }}>⏳</div>
          <p>Loading tasks...</p>
        </div>
      ) : (
        <TaskList
          tasks={tasks}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
          isDeleting={isDeleting}
        />
      )}
    </div>
  );
}

export default App;
