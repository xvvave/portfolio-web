import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const VideoLightbox = ({ project, onClose }) => {
  useEffect(() => {
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
    
    // Handle escape key press
    const handleEscKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscKey);
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);

  if (!project) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div className="w-full max-w-4xl bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
        <div className="relative aspect-video">
          <video 
            className="w-full h-full object-contain"
            src={project.videoUrl || ''}
            controls
            autoPlay
            playsInline
          >
            {/* Añadimos pista de subtítulos si está disponible */}
            {project.captionsUrl && (
              <track kind="captions" src={project.captionsUrl} label="Español" />
            )}
          </video>
        </div>
        <div className="p-6 bg-gray-800 text-[#E6DADA]">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <button 
              className="text-gray-400 hover:text-[#E6DADA]"
              onClick={onClose}
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mb-2">
            <span className="inline-block bg-gray-700 px-2 py-1 rounded text-sm">
              {project.category}
            </span>
          </div>
          <p className="text-gray-300">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

VideoLightbox.propTypes = {
  project: PropTypes.shape({
    videoUrl: PropTypes.string,
    captionsUrl: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

export default VideoLightbox;