import { useState, useEffect } from "react";
import AddTask from "./addTask";
import TaskItem from "./TaskItem";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5",
      );
      const data = await response.json();
      setTasks(data);
    };
    fetchTask();
  }, []);

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

const toggleComplete = (id) => {
  const updatedTasks = tasks.map((task) => 
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  setTasks(updatedTasks);
};

  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto p-4">
      
      <div className="bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-200">
        <AddTask onAdd={handleAddTask} />
      </div>

      <div className="flex flex-col gap-4">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem key={task.id} task={task} onDelete={deleteTask} onToggle={toggleComplete} />
          ))
        ) : (
          <p className="text-center text-slate-400 italic py-10">
            No tasks yet. Start by adding one above! 🚀
          </p>
        )}
      </div>
    </div>
  );
}

export default TaskList;