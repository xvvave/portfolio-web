"use client"

import { useState } from "react"
import ProjectFilter from "./ProjectFilter"
import Card from "./Card"
import VideoLightbox from "./VideoLightbox"
import WideProject from "./WideProject"

const Projects = () => {
  const [selectedFilters, setSelectedFilters] = useState([])
  const [lightboxProject, setLightboxProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Fragmented Echoes",
      category: "Video & Visual Effects",
      thumbnail: "/path/to/thumbnail1.jpg",
      videoUrl: "/path/to/video1.mp4",
      description:
        "An experimental visual project exploring fractured memories and disjointed narratives through visual metaphors.",
    },
    {
      id: 2,
      title: "Neural Mirage",
      category: "A.I (Artificial Intelligence)",
      thumbnail: "/path/to/thumbnail2.jpg",
      videoUrl: "/path/to/video2.mp4",
      description:
        "AI-generated visuals that create surreal dreamscapes, blending machine learning with artistic direction.",
    },
    {
      id: 3,
      title: "Echoform",
      category: "3D & Animation",
      thumbnail: "/path/to/thumbnail3.jpg",
      videoUrl: "/path/to/video3.mp4",
      description: "A 3D animation exploring sound visualization through organic, evolving forms.",
    },
    {
      id: 4,
      title: "Circuit Pulse",
      category: "Music & Sound",
      thumbnail: "/path/to/thumbnail4.jpg",
      videoUrl: "/path/to/video4.mp4",
      description: "An electronic music composition with synchronized visual elements reflecting digital circuitry.",
    },
    {
      id: 5,
      title: "Resonance Bloom",
      category: "Video Games",
      thumbnail: "/path/to/thumbnail5.jpg",
      videoUrl: "/path/to/video5.mp4",
      description: "An ambient soundscape where audio frequencies generate organic visual patterns.",
    },
    {
      id: 6,
      title: "Synesthetic Touch",
      category: "Interactivity",
      thumbnail: "/path/to/thumbnail6.jpg",
      videoUrl: "/path/to/video6.mp4",
      description:
        "An interactive installation translating touch into audiovisual feedback, exploring sensory crossover.",
    },
    {
      id: 7,
      title: "Lumina Verge",
      category: "3D & Animation",
      thumbnail: "/path/to/thumbnail7.jpg",
      videoUrl: "/path/to/video7.mp4",
      description: "A 3D animated short exploring light diffraction through abstract crystalline environments.",
    },
  ]

  const categories = [
    "3D & Animation",
    "A.I (Artificial Intelligence)",
    "AR/VR",
    "Graphic Design & Branding",
    "Interactivity",
    "Music & Sound",
    "Video Games",
    "Video & Visual Effects",
    "UX/UI & Prototyping",
  ]

  const handleFilterChange = (category) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(category) ? prevFilters.filter((filter) => filter !== category) : [...prevFilters, category],
    )
  }

  const filteredProjects =
    selectedFilters.length > 0 ? projects.filter((project) => selectedFilters.includes(project.category)) : projects

  const openLightbox = (project) => setLightboxProject(project)
  const closeLightbox = () => setLightboxProject(null)

  return (
    <div
      id="projects"
      className="scroll-mt-80 w-full min-h-screen bg-gradientprojects bg-cover bg-[#E6DADA] bg-center pb-20 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[46px] font-gopher text-[#0E1011] text-center mb-6">Projects</h2>

        {/* Filtros */}
        <div className="mb-5">
          <ProjectFilter
            categories={categories}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
          />
        </div>

        {/* Layout principal: Destacado vs Grid 2x2 de pequeños */}
        <div className="flex flex-col xl:flex-row gap-6 mb-6">
          {/* Columna izquierda - Proyecto destacado (50%) */}
          <div className="w-full xl:w-1/2">
            {filteredProjects.length > 0 && (
              <Card
                project={filteredProjects[0]}
                onClick={openLightbox}
                size="large"
                mediaType="image"
                showDescription={true}
                aspectRatio="standard"
              />
            )}
          </div>

          {/* Columna derecha - Grid 2x2 de proyectos pequeños (50%) */}
          <div className="w-full xl:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              {filteredProjects.slice(1, 5).map((project) => (
                <Card
                  key={project.id}
                  project={project}
                  onClick={openLightbox}
                  size="small"
                  mediaType="image"
                  showCategory={true}
                  aspectRatio="standard"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Proyectos anchos en la parte inferior - Usando el componente WideProject */}
        {filteredProjects.length > 5 && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {filteredProjects.slice(5, 7).map((project) => (
              <WideProject key={project.id} project={project} onProjectClick={openLightbox} />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox de video mejorado */}
      {lightboxProject && <VideoLightbox project={lightboxProject} onClose={closeLightbox} />}
    </div>
  )
}

export default Projects

