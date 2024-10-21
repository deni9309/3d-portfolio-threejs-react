import { Canvas } from '@react-three/fiber'
import { OrbitControls, useProgress } from '@react-three/drei'
import { Suspense, useState } from 'react'

import { workExperiences } from '../constants'
import { CanvasLoader, Developer } from '../components'

const Experience = () => {
  const [animationName, setAnimationName] = useState('idle')
  const { progress } = useProgress()

  return (
    <section id="work" className="c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text !leading-normal">My Work Experience</h3>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={2} />
              <spotLight
                position={[0, -5, 2]}
                distance={0}
                color={0xfefce8}
                decay={1.4}
                intensity={90}
                angle={0.15}
                penumbra={1}
              />
              <directionalLight position={[10, -10, 10]} intensity={1} />

              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader progress={progress} />}>
                <Developer
                  position-y={-3}
                  scale={2.8}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() =>
                    setAnimationName(item.animation.toLowerCase())
                  }
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group"
                >
                  <div className="flex flex-col justify-start items-center h-full py-2">
                    <div className="work-content_logo">
                      <img
                        src={item.icon}
                        alt={item.position}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="text-white-800 font-semibold">
                      {item.position}
                    </p>
                    <p className="text-sm">{item.company}</p>
                    <p className="text-sm mb-5">{item.duration}</p>
                    <p className="group-hover:text-white transition ease-in-out duration-500">
                      {item.description1}
                      <br />
                      {item.description2}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
