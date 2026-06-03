function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div 
      className={` cursor-pointer
        flex items-center justify-between 
        bg-white p-4 rounded-xl border border-slate-200 
        shadow-sm hover:shadow-md hover:border-blue-200 
        transition-all duration-300 group
        ${task.completed ? 'opacity-60 bg-slate-50' : ''}
        
      `}
      onClick={() => onToggle(task.id)}
    >
      <div className="flex items-center gap-4">
        <div className={`w-3 h-3 rounded-full ${task.completed ? 'bg-green-500' : 'bg-blue-500 animate-pulse'}`}></div>
        
        <h3 className={`text-slate-700 font-semibold transition-all ${task.completed ? 'line-through text-slate-400' : 'group-hover:text-blue-600'}`}>
          {task.title}
        </h3>
      </div>

      <div className="flex items-center gap-2">
        <button 
          className="bg-red-50 text-red-500 px-4 py-1.5 rounded-lg text-sm font-bold 
                     hover:bg-red-500 hover:text-white transition-all 
                     active:scale-95 shadow-sm"
          onClick={(e) => {e.stopPropagation(); onDelete(task.id)}}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;