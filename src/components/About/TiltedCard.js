"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
}

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  className = "",
  aspectRatio = 16 / 9, // Default aspect ratio
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
}) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useMotionValue(0), springValues)
  const rotateY = useSpring(useMotionValue(0), springValues)
  const scale = useSpring(1, springValues)
  const opacity = useSpring(0)
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  })

  const [lastY, setLastY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  // Check screen size
  useEffect(() => {
    const checkSize = () => {
      setWindowWidth(window.innerWidth)
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkSize()

    // Add resize listener
    window.addEventListener("resize", checkSize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkSize)
    }
  }, [])

  // Determine if we're in the problematic ranges
  const isProblematicRange = (windowWidth >= 1000 && windowWidth <= 1300) || windowWidth < 640

  function handleMouse(e) {
    if (!ref.current || isMobile) return

    const rect = ref.current.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2

    // Reduce rotation amplitude in the problematic range
    const adjustedAmplitude = isProblematicRange ? rotateAmplitude * 0.7 : rotateAmplitude

    const rotationX = (offsetY / (rect.height / 2)) * -adjustedAmplitude
    const rotationY = (offsetX / (rect.width / 2)) * adjustedAmplitude

    rotateX.set(rotationX)
    rotateY.set(rotationY)

    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)

    const velocityY = offsetY - lastY
    rotateFigcaption.set(-velocityY * 0.6)
    setLastY(offsetY)
  }

  function handleMouseEnter() {
    if (isMobile) return
    // Reduce scale effect in problematic range
    const adjustedScale = isProblematicRange ? 1 + (scaleOnHover - 1) * 0.5 : scaleOnHover
    scale.set(adjustedScale)
    opacity.set(1)
  }

  function handleMouseLeave() {
    opacity.set(0)
    scale.set(1)
    rotateX.set(0)
    rotateY.set(0)
    rotateFigcaption.set(0)
  }

  return (
    <figure
      ref={ref}
      className={`relative flex flex-col items-center justify-center ${className}`}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && isMobile && (
        <div className="absolute top-4 text-center text-sm z-10">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <motion.div
        className="relative w-full [transform-style:preserve-3d]"
        style={{
          width: "100%",
          paddingBottom: `${100 / aspectRatio}%`, // Create aspect ratio container
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          scale: isMobile ? 1 : scale,
          perspective: "800px",
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-[15px] will-change-transform [transform:translateZ(0)]"
        />

        {displayOverlayContent && overlayContent && (
          <motion.div className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)] w-full h-full">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && !isMobile && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-text-[#E6DADA] px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3]"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          {captionText}
        </motion.figcaption>
      )}

      {/* Always visible caption for mobile and problematic ranges */}
      {captionText && (isMobile || isProblematicRange) && (
        <div className="mt-3 text-center font-medium">{captionText}</div>
      )}
    </figure>
  )
}

