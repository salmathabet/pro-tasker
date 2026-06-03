import { useState , useEffect ,useRef} from "react";
function AddTask({ onAdd }) {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !title.trim()) return;
        onAdd(title);
        setTitle("");
        inputRef.current.focus();
    };

    useEffect(() => {
    inputRef.current.focus(); 
}, []);
    const inputRef = useRef(null);

    return (
        <form id="add-task-area"
            className="flex flex-col sm:flex-row gap-3 w-full" 
            onSubmit={handleSubmit}
        >
            <input id='main-task-input'
                type="text" 
                ref={inputRef}
                className="flex-1 bg-white border border-slate-200 rounded-xl px-5 py-3 
                           text-slate-700 placeholder:text-slate-400
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           transition-all duration-200 shadow-sm"
                placeholder="Write your next big task..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold 
                           px-8 py-3 rounded-xl shadow-lg shadow-blue-100
                           transition-all duration-200 active:scale-95
                           flex items-center justify-center gap-2"
            >
                <span className="text-xl">+</span>
                Add Task
            </button>
        </form>
    );
}

export default AddTask;