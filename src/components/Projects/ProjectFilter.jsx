// ProjectFilter.jsx - Filter component
import React, { useState } from 'react';

const ProjectFilter = ({ categories, selectedFilters, onFilterChange }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="relative">
      <button 
  className="flex items-center gap-2 bg-[#DDDDDD] px-4 py-2 rounded shadow mt-[-40px]" // Ajusté el margin-top
  onClick={() => setIsFilterOpen(!isFilterOpen)}
>
  Filter
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
  </svg>
</button>
      
      {isFilterOpen && (
        <div className="absolute top-full left-0 mt-2 bg-[#DDDDDD] shadow-lg rounded p-4 z-10 w-64">
          {categories.map((category) => (
            <div key={category} className="mb-2 flex items-center">
              <input
                type="checkbox"
                id={`filter-${category}`}
                checked={selectedFilters.includes(category)}
                onChange={() => onFilterChange(category)}
                className="mr-2 h-4 w-4"
              />
              <label htmlFor={`filter-${category}`} className="text-sm">
                {category}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectFilter;