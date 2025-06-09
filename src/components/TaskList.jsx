import TaskCard from './TaskCard';

const TaskList = ({ tasks, onToggle, onDelete, filter }) => {
  if (tasks.length === 0) {
    const messages = {
      all: { title: 'No tasks yet', subtitle: 'Add your first task above' },
      active: { title: 'No active tasks', subtitle: 'All tasks are completed!' },
      completed: { title: 'No completed tasks', subtitle: 'Complete some tasks to see them here' }
    };
    
    const message = messages[filter] || messages.all;
    
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-800 mb-1">{message.title}</h3>
        <p className="text-gray-500">{message.subtitle}</p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-200">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
