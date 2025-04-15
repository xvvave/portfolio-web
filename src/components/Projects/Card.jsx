"use client"

const sizeClasses = {
  small: "min-h-[140px] xs:min-h-[160px]",
  medium: "min-h-[180px] xs:min-h-[220px]",
  large: "min-h-[240px] xs:min-h-[280px] md:min-h-[336px]",
}

const aspectRatioClasses = {
  "1:1": "aspect-square",
  "4:3": "aspect-video",
  "16:9": "aspect-video",
}

const titleClasses = {
  small: "text-xs sm:text-sm font-medium truncate",
  medium: "text-xs xs:text-sm sm:text-lg font-semibold truncate",
  large: "text-sm xs:text-lg sm:text-xl md:text-2xl font-semibold truncate",
}

const Card = ({ project, size = "medium", aspectRatio, onClick }) => {
  return (
    <div
      className={`relative bg-black rounded-md overflow-hidden cursor-pointer group h-full transition-transform duration-300 hover:scale-[1.02] max-w-full ${sizeClasses[size]} ${aspectRatio ? aspectRatioClasses[aspectRatio] : ""}`}
      onClick={() => onClick(project)}
    >
      <img
        src={project.cover || "/placeholder.svg"}
        alt={project.title}
        className="absolute inset-0 object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 w-full p-4">
        <h3 className={`text-white ${titleClasses[size]}`}>{project.title}</h3>
        <p className="text-xs text-gray-300 line-clamp-2">{project.description}</p>
      </div>
    </div>
  )
}

export default Card
