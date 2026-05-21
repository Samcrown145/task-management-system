import "./EmptyState.css";

function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">📭</div>
      <h3>No tasks yet</h3>
      <p>Create your first task to get started!</p>
    </div>
  );
}

export default EmptyState;
