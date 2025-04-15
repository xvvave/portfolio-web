"use client"

import { useEffect } from "react"
import PropTypes from "prop-types"

const VideoLightbox = ({ project, onClose }) => {
  useEffect(() => {
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden"

    // Handle escape key press
    const handleEscKey = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscKey)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleEscKey)
    }
  }, [onClose])

  if (!project) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-2 md:p-6 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="w-[calc(100%-24px)] sm:w-[calc(100%-48px)] md:w-full max-w-4xl bg-gray-900 rounded-lg overflow-hidden shadow-2xl my-4">
        <div className="relative aspect-video w-full">
          <video className="w-full h-full object-contain" src={project.videoUrl || ""} controls autoPlay playsInline>
            {project.captionsUrl && <track kind="captions" src={project.captionsUrl} label="Español" />}
          </video>
        </div>
        <div className="p-4 sm:p-6 bg-gray-800 text-[#E6DADA]">
          <div className="flex justify-between items-start mb-3">
            <h2 className="text-lg sm:text-2xl font-bold pr-2">{project.title}</h2>
            <button
              className="text-gray-400 hover:text-[#E6DADA] flex-shrink-0 p-1 rounded-full hover:bg-gray-700 transition-colors"
              onClick={onClose}
              aria-label="Close"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mb-2">
            <span className="inline-block bg-gray-700 px-2 py-1 rounded text-xs sm:text-sm">{project.category}</span>
          </div>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base line-clamp-3 sm:line-clamp-none">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  )
}

VideoLightbox.propTypes = {
  project: PropTypes.shape({
    videoUrl: PropTypes.string,
    captionsUrl: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
}

export default VideoLightbox
