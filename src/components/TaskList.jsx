
import { useState, useEffect } from 'react';
import AddTask from './addTask';
import TaskItem from './TaskItem';


function TaskList (){
    const [tasks, setTasks] = useState([]);
    const handleAddTask = (title) => {
        const newTask = {
            id: Date.now(),
            title:title,
            completed: false
        }
        setTasks([newTask, ...tasks])
    }
    useEffect(() => {
        const fetchTask = async() => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
            const data = await response.json();
            setTasks(data)
        }
        fetchTask()
    },[])

    const deleteTask = (id) =>{
        const updatedTasks = tasks.filter(task => task.id !== id)
        setTasks(updatedTasks)
    }

    return(
        <div className='task-manager'>
            <AddTask onAdd={handleAddTask} />
            <div className="task-list">
                {tasks.map(task => (
                <TaskItem 
                    key={task.id} 
                    task={task} 
                    onDelete={deleteTask} 
                />
                ))}
            </div>
        </div>
    )
}

export default TaskList