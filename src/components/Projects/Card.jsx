import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ 
  project, 
  onClick, 
  size = 'medium', 
  mediaType = 'image',
  showCategory = true,
  showDescription = false,
  aspectRatio = 'standard'
}) => {
  // Variables condicionales según tamaño
  const sizeClasses = {
    small: 'min-h-[160px]',
    medium: 'min-h-[220px]',
    large: 'min-h-[336px]'
  };
  
  const titleClasses = {
    small: 'text-sm font-medium',
    medium: 'text-lg font-semibold',
    large: 'text-2xl font-semibold'
  };
  
  const iconSizes = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };
  
  const buttonSizes = {
    small: 'p-1',
    medium: 'p-2',
    large: 'p-3'
  };
  
  // Clases para diferentes relaciones de aspecto
  const aspectRatioClasses = {
    standard: 'aspect-video', // 16:9
    square: 'aspect-square',
    wide: 'aspect-[21/9]',
    portrait: 'aspect-[3/4]'
  };
  
  // Renderiza el contenido multimedia según el tipo
  const renderMedia = () => {
    switch(mediaType) {
      case 'video':
        return project.videoUrl ? (
          <video 
            className="w-full h-full object-cover absolute inset-0" 
            src={project.videoUrl}
            muted
            loop
            playsInline
          />
        ) : null;
      case 'image':
      default:
        return project.thumbnail ? (
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-full object-cover absolute inset-0" 
          />
        ) : null;
    }
  };

  return (
    <div 
      className={`relative bg-black rounded-md overflow-hidden cursor-pointer group h-full transition-transform duration-300 hover:scale-[1.02] ${sizeClasses[size]} ${aspectRatio ? aspectRatioClasses[aspectRatio] : ''}`}
      onClick={() => onClick(project)}
    >
      {/* Contenido multimedia (imagen o video) */}
      {renderMedia()}
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 group-hover:opacity-70 transition-opacity"></div>
      
      {/* Play button o ícono */}
      <div className="relative h-full w-full flex items-center justify-center">
        <button className={`bg-black bg-opacity-70 rounded-md ${buttonSizes[size]} transform group-hover:scale-110 transition-transform`}>
          <svg className={`${iconSizes[size]} text-[#E6DADA] opacity-80`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5v14l11-7z" fill="currentColor"/>
          </svg>
        </button>
      </div>
      
      {/* Información del proyecto */}
      <div className="absolute bottom-3 left-3 right-3 flex flex-col">
        <h3 className={`${titleClasses[size]} text-[#E6DADA] line-clamp-1`}>{project.title}</h3>
        
        {showDescription && size === 'large' && (
          <p className="text-[#E6DADA] text-opacity-80 text-sm mt-1 line-clamp-2">{project.description}</p>
        )}
        
        {showCategory && (
          <div className={`mt-1 ${size === 'small' ? 'self-start' : ''}`}>
            <span className={`
              bg-[#E6DADA] bg-opacity-20 text-[#E6DADA] px-2 py-1 rounded-md text-xs inline-block
              ${size === 'small' ? 'text-xs px-1 py-0.5 bg-gray-200 bg-opacity-80 text-[#0E1011]' : ''}
            `}>
              {project.category}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string.isRequired,
    category: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.string,
    videoUrl: PropTypes.string
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  mediaType: PropTypes.oneOf(['image', 'video']),
  showCategory: PropTypes.bool,
  showDescription: PropTypes.bool,
  aspectRatio: PropTypes.oneOf(['standard', 'square', 'wide', 'portrait'])
};

export default Card;