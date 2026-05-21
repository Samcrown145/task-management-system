import { useState } from "react";
import "./TaskForm.css";

function TaskForm({ initialTask, onSave, onCancel }) {
  const [title, setTitle] = useState(initialTask?.title || "");
  const [description, setDescription] = useState(initialTask?.description || "");
  const [status, setStatus] = useState(initialTask?.status || "Pending");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a task title");
      return;
    }

    onSave({
      title: title.trim(),
      description: description.trim(),
      status,
    });

    setTitle("");
    setDescription("");
    setStatus("Pending");
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setStatus("Pending");
    onCancel();
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>{initialTask ? "Edit Task" : "Create New Task"}</h2>

      <div className="form-group">
        <label htmlFor="title">Task Title *</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description (optional)"
          rows="4"
        />
      </div>

      <div className="form-group">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {initialTask ? "Update Task" : "Create Task"}
        </button>
        {initialTask && (
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default TaskForm;
