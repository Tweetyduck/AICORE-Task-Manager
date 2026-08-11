import React, { useState } from 'react';
import { Task } from '../types/Task';

interface TaskFormProps {
  onSubmit: (task: Task) => Promise<void>;
  initialTask?: Task;
  isEditing?: boolean;
  onCancel?: () => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialTask, isEditing, onCancel }) => {
  const [formData, setFormData] = useState<Task>(
    initialTask || {
      title: '',
      description: '',
      status: 'TODO',
      dueDate: '',
    }
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string>('');

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.title || formData.title.trim() === '') {
      newErrors.title = 'Title is required';
    } else if (formData.title.length > 100) {
      newErrors.title = 'Title must be 100 characters or fewer';
    }

    if (formData.description && formData.description.length > 500) {
      newErrors.description = 'Description must be 500 characters or fewer';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      // Reset form only if not editing
      if (!isEditing) {
        setFormData({
          title: '',
          description: '',
          status: 'TODO',
          dueDate: '',
        });
      }
    } catch (error: any) {
      console.error('Error submitting form:', error);
      if (error.errors) {
        setErrors(error.errors);
      } else if (error.message) {
        setApiError(error.message);
      } else {
        setApiError('An error occurred while saving the task');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-section">
      {apiError && <div className="validation-error">{apiError}</div>}

      <div className="form-group">
        <label htmlFor="title">
          Title <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter task title"
          maxLength={100}
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && <span className="error-message">{errors.title}</span>}
        <small style={{ color: '#999' }}>
          {formData.title.length}/100 characters
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter task description"
          maxLength={500}
          value={formData.description}
          onChange={handleChange}
        />
        {errors.description && <span className="error-message">{errors.description}</span>}
        <small style={{ color: '#999' }}>
          {formData.description.length}/500 characters
        </small>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="TODO">TODO</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="DONE">Done</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dueDate">Due Date</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={formData.dueDate || ''}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="button-group">
        <button type="submit" className="btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : isEditing ? 'Update Task' : 'Create Task'}
        </button>
        {isEditing && onCancel && (
          <button type="button" className="btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};
