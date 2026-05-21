import "./TaskItem.css";

function TaskItem({ task, onEdit, onDelete, onToggle }) {
  const formattedDate = new Date(task.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className={`task-item ${task.status === "Completed" ? "completed" : ""}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.status === "Completed"}
          onChange={() => onToggle(task.id)}
          className="task-checkbox"
          aria-label={`Toggle task: ${task.title}`}
        />

        <div className="task-info">
          <h3 className="task-title">{task.title}</h3>
          {task.description && <p className="task-description">{task.description}</p>}

          <div className="task-meta">
            <span className={`task-status status-${task.status.toLowerCase()}`}>
              {task.status}
            </span>
            <span className="task-date">{formattedDate}</span>
          </div>
        </div>
      </div>

      <div className="task-actions">
        <button
          className="btn-icon btn-edit"
          onClick={() => onEdit(task)}
          title="Edit task"
          aria-label={`Edit task: ${task.title}`}
        >
          ✏️
        </button>
        <button
          className="btn-icon btn-delete"
          onClick={() => onDelete(task.id)}
          title="Delete task"
          aria-label={`Delete task: ${task.title}`}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
