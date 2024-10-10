import { PerspectiveCamera, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Leva } from 'leva'

import CanvasLoader from '../components/canvas-loader'
import Cube from '../components/cube'
import { HackerRoom } from '../components/hacker-room'
import ReactLogo from '../components/react-logo'
import Rings from '../components/rings'
import Target from '../components/target'
import { calculateSizes } from '../constants'

const Hero = () => {
  // Use media queries to determine device size
  const isSmall = useMediaQuery({ maxWidth: 440 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  const { progress } = useProgress()

  return (
    <section
      id="home"
      className="c-space md:mt-28 mt-32 min-h-screen w-full flex flex-col relative"
    >
      <div className="w-full mx-auto flex flex-col gap-2">
        <p className="sm:text-3xl text-xl font-light tracking-wide text-white text-center font-generalsans">
          Welcome to my portfolio
        </p>
        <p className="hero_tag-smaller text-gray_gradient">
          Showcasing Products & Brands
        </p>
      </div>

      <div className="absolute inset-0 w-full h-full">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader progress={progress} />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HackerRoom
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[0.1, -Math.PI, 0]}
            />

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Hero
