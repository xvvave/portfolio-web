"use client"
import PropTypes from "prop-types"

const WideProject = ({ project, onProjectClick }) => {
  if (!project) return null

  return (
    <div
      className="relative bg-black rounded-md overflow-hidden h-32 sm:h-40 cursor-pointer group transition-transform duration-300 hover:scale-[1.02]"
      onClick={() => onProjectClick(project)}
    >
      {/* Contenido multimedia (imagen o video) */}
      {project.videoUrl ? (
        <video className="w-full h-full object-cover absolute inset-0" src={project.videoUrl} muted loop playsInline />
      ) : (
        <img
          src={project.thumbnail || "/images/placeholder.jpg"}
          alt={project.title}
          className="w-full h-full object-cover absolute inset-0"
        />
      )}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 group-hover:opacity-70 transition-opacity"></div>

      {/* Play button */}
      <div className="relative h-full w-full flex items-center justify-center">
        <button className="bg-black bg-opacity-70 rounded-md p-1 sm:p-2 transform group-hover:scale-110 transition-transform">
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 text-[#E6DADA] opacity-80"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Información del proyecto */}
      <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3">
        <h3 className="text-sm sm:text-lg font-semibold text-[#E6DADA]">{project.title}</h3>
      </div>
      <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-gray-200 bg-opacity-90 px-1 py-0.5 sm:px-2 sm:py-1 rounded text-[10px] sm:text-xs">
        {project.category}
      </div>
    </div>
  )
}

WideProject.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string.isRequired,
    category: PropTypes.string,
    thumbnail: PropTypes.string,
    videoUrl: PropTypes.string,
  }).isRequired,
  onProjectClick: PropTypes.func.isRequired,
}

export default WideProject

