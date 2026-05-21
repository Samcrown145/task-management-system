I# TaskFlow - Simple Task Management Website

A modern, responsive task management application built with React and Vite.

## Features

✅ **Create Tasks** - Add new tasks with title, description, and status
✅ **Read/View Tasks** - Display all tasks in a clean dashboard
✅ **Update Tasks** - Edit existing tasks
✅ **Delete Tasks** - Remove tasks from the list
✅ **Mark as Completed** - Toggle task status between Pending and Completed
✅ **Persistent Storage** - Tasks are saved to localStorage
✅ **Responsive Design** - Works on desktop, tablet, and mobile devices

## Tech Stack

- **React 18.2** - UI library
- **Vite 4.3** - Build tool and dev server
- **CSS3** - Styling with modern CSS features
- **localStorage** - Client-side data persistence

## Project Structure

```
src/
  ├── components/
  │   ├── TaskForm.jsx       - Form for creating/editing tasks
  │   ├── TaskForm.css
  │   ├── TaskList.jsx       - Container for task items
  │   ├── TaskList.css
  │   ├── TaskItem.jsx       - Individual task component
  │   ├── TaskItem.css
  │   ├── EmptyState.jsx     - Empty state message
  │   └── EmptyState.css
  ├── App.jsx                - Main application component
  ├── App.css
  ├── main.jsx               - React entry point
  └── index.css              - Global styles
public/
index.html                    - HTML template
package.json                 - Project dependencies
vite.config.js               - Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or extract the project
2. Navigate to the project directory:
   ```bash
   cd "SIMPLE TASK MANAGEMENT SYSTEM CRUD WEBSITE"
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

```bash
npm run dev
```

The application will open in your default browser at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The optimized build will be generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Usage

1. **Create a Task**: Fill in the task form with a title, description (optional), and status, then click "Create Task"
2. **Edit a Task**: Click the ✏️ button on any task to edit it
3. **Delete a Task**: Click the 🗑️ button to remove a task
4. **Mark as Completed**: Check the checkbox next to a task to toggle its status
5. **View Tasks**: All tasks are displayed in the Task Dashboard with their status and creation date

## Features Implemented

### CRUD Operations
- ✅ **Create**: Add new tasks via the form
- ✅ **Read**: View all tasks in the dashboard
- ✅ **Update**: Edit task details
- ✅ **Delete**: Remove tasks from the list

### Responsive Design
- Mobile-first approach
- Works seamlessly on all screen sizes
- Touch-friendly buttons and controls

### Data Persistence
- Tasks are automatically saved to browser localStorage
- Data persists between sessions
- Sample tasks are provided on first load

## Code Quality

- Clean, component-based architecture
- Proper React hooks usage (useState, useEffect, useMemo)
- Semantic HTML and accessibility considerations
- CSS with CSS variables for easy theming
- Responsive design principles

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created as part of the Buildrix Frontend Internship assignment.

---

**Happy Task Managing! 🚀**
