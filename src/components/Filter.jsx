const Filter = ({ currentFilter, onFilterChange, counts }) => {
  const filters = [
    { key: 'all', label: 'All', count: counts.all },
    { key: 'active', label: 'Active', count: counts.active },
    { key: 'completed', label: 'Completed', count: counts.completed }
  ];

  return (
    <div className="flex border-b border-gray-200">
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={`flex-1 py-3 px-4 text-sm font-medium border-b-2 ${
            currentFilter === filter.key
              ? 'border-blue-500 text-blue-600 bg-blue-50'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
          }`}
        >
          {filter.label}
          <span className="ml-2 px-2 py-1 bg-gray-200 text-gray-600 rounded-full text-xs">
            {filter.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Filter;
