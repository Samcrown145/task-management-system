import { useEffect, useMemo, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import EmptyState from "./components/EmptyState";
import "./App.css";



const storageKey = "taskflow-tasks";

const initialTasks = [
  {
    id: crypto.randomUUID(),
    title: "Plan weekly priorities",
    description: "Review deadlines, meetings, and the three most important tasks.",
    status: "Pending",
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    title: "Send project update",
    description: "Share progress with the team and highlight blockers.",
    status: "Completed",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
  },
];

function getInitialTasks() {
  if (typeof window === "undefined") {
    return initialTasks;
  }

  const savedTasks = window.localStorage.getItem(storageKey);

  if (!savedTasks) {
    return initialTasks;
  }

  try {
    const parsedTasks = JSON.parse(savedTasks);
    return Array.isArray(parsedTasks) ? parsedTasks : initialTasks;
  } catch {
    return initialTasks;
  }
}

function App() {
  const [tasks, setTasks] = useState(getInitialTasks);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const editingTask = useMemo(
    () => tasks.find((task) => task.id === editingTaskId) || null,
    [editingTaskId, tasks]
  );

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(tasks));
  }, [tasks]);

  const handleSaveTask = (taskData) => {
    if (editingTask) {
      setTasks((currentTasks) =>
        currentTasks.map((task) =>
          task.id === editingTask.id ? { ...task, ...taskData } : task
        )
      );
      setEditingTaskId(null);
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      ...taskData,
      createdAt: new Date().toISOString(),
    };

    setTasks((currentTasks) => [newTask, ...currentTasks]);
  };

  const handleEditTask = (task) => {
    setEditingTaskId(task.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteTask = (taskId) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId));
    if (editingTaskId === taskId) {
      setEditingTaskId(null);
    }
  };

  const handleToggleTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: task.status === "Completed" ? "Pending" : "Completed",
            }
          : task
      )
    );
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
  };

  return (
    <main className="app-shell">
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
      <section className="hero">
        <div>
          <p className="eyebrow">TaskFlow</p>
          <h1>Simple Task Management Website</h1>
          <p className="hero-copy">
            Create, update, mark as completed, and delete daily tasks in one clean dashboard.
          </p>
        </div>

        <div className="stats-card" aria-label="task summary">
          <strong>{tasks.length}</strong>
          <span>Total tasks</span>
        </div>
      </section>

      <section className="panel">
        <TaskForm
          key={editingTask ? editingTask.id : "new-task"}
          initialTask={editingTask}
          onSave={handleSaveTask}
          onCancel={handleCancelEdit}
        />
      </section>

      <section className="panel">
        <div className="panel-heading">
          <div>
            <h2>Task Dashboard</h2>
            <p>Track tasks and keep your work organized.</p>
          </div>
        </div>

        {tasks.length === 0 ? (
          <EmptyState />
        ) : (
          <TaskList
            tasks={tasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onToggle={handleToggleTask}
          />
        )}
      </section>
    </main>
  );
}

export default App;
