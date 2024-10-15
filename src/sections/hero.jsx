import { PerspectiveCamera, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { useMediaQuery } from 'react-responsive'

import {
  Button,
  CanvasLoader,
  Cube,
  HeroCamera,
  ReactLogo,
  Rings,
  Target,
  NightOwlsDesk,
} from '../components'
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
      className="md:mt-[100px] mt-[110px] min-h-screen w-full flex flex-col relative"
    >
      <div className="c-space relative z-10 w-full mx-auto flex flex-col gap-2">
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
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <NightOwlsDesk
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.4, -Math.PI * 0.5, 0]}
              />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={2} />
            <directionalLight position={[0, 5, 5]} intensity={4} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute z-10 left-0 right-0 bottom-7 w-full c-space">
        <a href="#contact" className="w-fit">
          <Button
            name="Let's Work Together"
            isBeam
            containerClasses="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  )
}

export default Hero
