import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import HackerRoom from '../components/hacker-room'

const Hero = () => {
  return (
    <section className="max-sm:mt-12 relative flex flex-col min-h-screen w-full">
      <div className="flex flex-col w-full mx-auto sm:mt-36 mt-20 c-space gap-3">
        <p className="text-2xl sm:text-3xlfont-medium font-generalsans text-center text-white">
          Welcome to my portfolio<span className="waving-hand">👋🏻</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Showcasing Products & Brands
        </p>
      </div>

      <div className="absolute inset-0 w-full h-full">
        <Canvas className="w-full h-full">
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />

          <HackerRoom />
        </Canvas>
      </div>
    </section>
  )
}

export default Hero
