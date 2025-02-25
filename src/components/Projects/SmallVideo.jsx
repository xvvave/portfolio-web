import React from 'react';

const SmallVideo = ({ project = {}, onProjectClick = () => {}, size = 'small' }) => {
  if (!project) return null;

  // Ajustamos las clases de altura para que todos los videos pequeños tengan la misma altura
  // y se ajusten de manera uniforme en el grid 2x2
  const sizeClasses = {
    small: 'h-full min-h-[160px]', // Altura mínima para asegurar una buena visualización
    medium: 'h-40',
    large: 'h-60'
  };

  const iconSizes = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-10 h-10'
  };

  return (
    <div 
      className={`relative bg-black rounded-md overflow-hidden ${sizeClasses[size]} cursor-pointer group`}
      onClick={() => onProjectClick(project)}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
      
      {/* Thumbnail image (uncomment when you have actual images) */}
      {/* <img 
        src={project.thumbnail} 
        alt={project.title} 
        className="w-full h-full object-cover" 
      /> */}
      
      {/* Play button */}
      <div className="relative h-full w-full flex items-center justify-center">
        <button className="bg-black bg-opacity-70 rounded-md p-1 transform group-hover:scale-110 transition-transform">
          <svg className={`${iconSizes[size]} text-white opacity-80`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5v14l11-7z" fill="currentColor"/>
          </svg>
        </button>
      </div>
      
      {/* Title y Category en la parte inferior */}
      <div className="absolute bottom-2 left-2 right-2 flex flex-col">
        <h3 className="text-sm font-medium text-black truncate">{project.title}</h3>
        <div className="text-xs bg-gray-200 bg-opacity-80 px-1 py-0.5 rounded self-start mt-1">
          {project.category}
        </div>
      </div>
    </div>
  );
};

export default SmallVideo;