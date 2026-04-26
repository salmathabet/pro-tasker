import TaskList from './components/TaskList';
import './App.css'; // تأكدي من استيراد ملف الـ CSS

function App() {
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h1>Pro-Tasker Dashboard</h1>
      </header>
      <main className="dashboard__content">
        <TaskList />
      </main>
    </div>
  );
}
export default App;