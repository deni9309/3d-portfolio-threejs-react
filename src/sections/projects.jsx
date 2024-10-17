import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls, useProgress } from '@react-three/drei'

import { CanvasLoader, DemoComputer } from '../components'
import { myProjects } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const projectCount = myProjects.length

const Projects = () => {
  const { progress } = useProgress()
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)

  const currentProject = myProjects[selectedProjectIndex]

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
      }
    })
  }

  useGSAP(() => {
    gsap.from('#current-project', {
      opacity: 0.1,
      duration: 2,
      ease: 'power1.inOut',
    })
  }, [selectedProjectIndex])

  return (
    <section id="projects" className="c-space my-20">
      <p className="head-text">My Work</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 w-full mt-12">
        <div className="flex flex-col gap-5 sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div id="current-project" className="opacity-100">
            <div className="absolute top-0 right-0">
              <img
                src={currentProject.spotlight}
                alt="spotlight"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>

            <div
              className="p-0.5 w-16 h-16 flex items-center justify-center backdrop-filter backdrop-blur-3xl rounded-lg"
              style={currentProject.logoStyle}
            >
              <img
                src={currentProject.logo}
                alt={currentProject.title}
                className="w-11 h-11 object-contain"
                title={currentProject.title}
              />
            </div>
            <div className="flex flex-col gap-5 text-white-600 my-5">
              <p className="font-semibold text-white text-2xl animatedText">
                {currentProject.title}
              </p>
              <p className="animatedText">{currentProject.desc}</p>
              <p className="animatedText">{currentProject.subdesc}</p>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-5">
              <div className="flex items-center gap-3">
                {currentProject.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="tech-logo"
                    style={currentProject.tagsStyle || undefined}
                  >
                    <img src={tag.path} alt={tag.name} title={tag.name} />
                  </div>
                ))}
              </div>
              <div className="relative flex flex-col gap-1 *:text-sm">
                {currentProject.href && (
                  <a
                    href={currentProject.href}
                    target="_blank"
                    className="flex items-center gap-2 cursor-pointer text-white-600"
                  >
                    <p>Check Live Site</p>
                    <img
                      src="/assets/arrow-up.png"
                      alt="arrow up"
                      className="w-3 h-3"
                    />
                  </a>
                )}
                {currentProject.github && (
                  <a
                    href={currentProject.github}
                    target="_blank"
                    className="flex items-center gap-2 cursor-pointer text-white-600"
                  >
                    <p>View Source Code</p>
                    <img
                      src="/assets/arrow-up.png"
                      alt="arrow up"
                      className="w-3 h-3"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation('previous')}
            >
              <img
                src="/assets/left-arrow.png"
                alt="left arrow"
                className="w-4 h-4"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation('next')}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        {/* -- Start of Computer 3D model -- */}
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader progress={progress} />}>
                <group
                  scale={1.7}
                  position={[0, -3, 0]}
                  rotation={[0, -0.1, 0]}
                >
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default Projects
