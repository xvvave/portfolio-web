"use client"

const ProjectDestacado = ({ project, onProjectClick }) => {
  if (!project) return null

  return (
    <div
      className="relative bg-black rounded-md overflow-hidden h-full min-h-[280px] sm:min-h-[336px] cursor-pointer group w-[calc(100%-8px)] mx-auto sm:w-full"
      onClick={() => onProjectClick(project)}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>

      {/* Thumbnail image */}
      {project.thumbnail && (
        <img src={project.thumbnail || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
      )}

      {/* Play button */}
      <div className="relative h-full w-full flex items-center justify-center">
        <button className="bg-black bg-opacity-70 rounded-md p-2 sm:p-3 transform group-hover:scale-110 transition-transform">
          <svg
            className="w-8 h-8 sm:w-12 sm:h-12 text-[#E6DADA] opacity-80"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Información del proyecto */}
      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
        <h3 className="text-lg sm:text-2xl font-semibold text-[#E6DADA] truncate">{project.title}</h3>
        <p className="text-[#E6DADA] text-opacity-80 text-xs sm:text-sm mt-1 line-clamp-2">{project.description}</p>
        <div className="mt-1 sm:mt-2">
          <span className="bg-[#E6DADA] bg-opacity-20 text-[#E6DADA] px-1 py-0.5 sm:px-2 sm:py-1 rounded-md text-xs inline-block">
            {project.category}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProjectDestacado
