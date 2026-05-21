import Navbar from './components/navbar'
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-black text-slate-800 tracking-tight">
            Pro-Tasker <span className="text-blue-600">Dashboard</span>
          </h1>
          <p className="text-slate-500 mt-2 font-medium">Manage your daily tasks efficiently</p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-2 md:p-6">
           <TaskList />
        </div>

      </main>
    </div>
  );
}

export default App;