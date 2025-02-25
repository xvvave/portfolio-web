import React from 'react';

const ProjectDestacado = ({ project, onProjectClick }) => {
  if (!project) return null;
  
  return (
    <div 
      className="relative bg-black rounded-md overflow-hidden h-full min-h-[336px] cursor-pointer group"
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
        <button className="bg-black bg-opacity-70 rounded-md p-3 transform group-hover:scale-110 transition-transform">
          <svg className="w-12 h-12 text-[#E6DADA] opacity-80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5v14l11-7z" fill="currentColor"/>
          </svg>
        </button>
      </div>
      
      {/* Información del proyecto */}
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-2xl font-semibold text-[#E6DADA]">{project.title}</h3>
        <p className="text-[#E6DADA] text-opacity-80 text-sm mt-1 line-clamp-2">{project.description}</p>
        <div className="mt-2 bg-[#E6DADA] bg-opacity-20 text-[#E6DADA] px-2 py-1 rounded-md text-xs inline-block">
          {project.category}
        </div>
      </div>
    </div>
  );
};

export default ProjectDestacado;