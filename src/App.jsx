
import { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import Filter from './components/Filter';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const getFilteredTasks = () => {
    if (filter === 'completed') return tasks.filter(task => task.completed);
    if (filter === 'active') return tasks.filter(task => !task.completed);
    return tasks;
  };

  const taskCounts = {
    all: tasks.length,
    active: tasks.filter(task => !task.completed).length,
    completed: tasks.filter(task => task.completed).length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Task Manager</h1>
          <p className="text-gray-600">Keep track of your daily tasks</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">

          <AddTask onAdd={addTask} />

          <Filter
            currentFilter={filter}
            onFilterChange={setFilter}
            counts={taskCounts}
          />

          <TaskList
            tasks={getFilteredTasks()}
            onToggle={toggleTask}
            onDelete={deleteTask}
            filter={filter}
          />

          {tasks.length > 0 && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600">
                {taskCounts.active} of {taskCounts.all} tasks remaining
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default App;