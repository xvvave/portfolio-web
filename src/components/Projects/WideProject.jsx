"use client"

const WideProject = ({ project, onProjectClick }) => {
  return (
    <div
      className="relative bg-black rounded-md overflow-hidden h-28 xs:h-32 sm:h-40 cursor-pointer group transition-transform duration-300 hover:scale-[1.02] max-w-full w-[calc(100%-4px)] mx-auto xs:w-full"
      onClick={() => onProjectClick(project)}
    >
      <img
        src={project.imageUrl || "/placeholder.svg"}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
      <div className="absolute bottom-1 xs:bottom-2 sm:bottom-3 left-1 xs:left-2 sm:left-3 right-1 xs:right-2 sm:right-3">
        <h3 className="text-xs xs:text-sm sm:text-lg font-semibold text-[#E6DADA] truncate">{project.title}</h3>
      </div>
      <div className="absolute top-1 xs:top-2 sm:top-3 right-1 xs:right-2 sm:right-3 bg-gray-200 bg-opacity-90 px-1 py-0.5 sm:px-2 sm:py-1 rounded text-[8px] xs:text-[10px] sm:text-xs">
        {project.category}
      </div>
    </div>
  )
}

export default WideProject
  