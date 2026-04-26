function TaskItem({ task, onDelete }) {
  return (
    <div className={`task-card ${task.completed ? 'task-card--completed' : ''}`}>
      <h3 className="task-card__title">{task.title}</h3>
      <div className="task-card__actions">
        <button 
          className="task-card__btn task-card__btn--delete"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;