function Navbar() {

    const handleNewTaskClick = () => {
        const inputElement = document.getElementById('main-task-input');
        if(inputElement){
            inputElement.focus();
            inputElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    return(
    <nav className="bg-white/70 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
    <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
        <span className="text-white font-black text-xl italic">P</span>
        </div>
        <h1 className="text-xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Pro-Tasker
        </h1>
    </div>

    <div className="flex items-center gap-4">
        <button className="bg-slate-100 p-2 rounded-lg text-slate-600 hover:bg-slate-200 transition-all">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
        </button>
        <a  href="#add-task-area" onClick={handleNewTaskClick} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-md transition-all active:scale-95">
        + New Task
        </a>
    </div>
    </nav>
    )
}

export default Navbar