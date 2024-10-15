import { useState, useRef, useEffect } from 'react'
import Globe from 'react-globe.gl'
//import {GlobeMethods} from 'react-globe.gl'

import { Button } from '../components'

const About = () => {
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('deni9309@gmail.com')
    setHasCopied(true)

    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }

  return (
    <section id='about' className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full h-fit sm:h-[276px] object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I&apos;m Denitsa</p>
              <p className="grid-subtext mb-3">
                With 3 years of experience, I have honed my skills in front-end
                and backend development, with a focus on new web technologies.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="h-fit w-full max-md:max-w-[330px] max-sm:w-full mx-auto object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext mb-3">
                I specialize in JavaScript and TypeScript, particularly within
                the React and Next.js ecosystems. Additionally, I have
                experience working with backend technologies like C# with
                ASP.NET, as well as Node.js and Express.js. I am proficient in
                database management using both SQL and MongoDB, and I have a
                solid foundation in front-end development with HTML, CSS, and
                Tailwind CSS.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="flex items-center justify-center w-full max-h-[200px] h-full rounded-3xl">
              <video
                muted
                playsInline
                autoPlay
                preload="auto"
                className="rounded-2xl h-full w-full pointer-events-none object-cover overflow-hidden"
                loop
              >
                <source
                  src="/assets/earth-video-1280-720.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div>
              <p className="grid-headtext mt-2">
                I work remotely accross most timezones.
              </p>
              <p className="grid-subtext">
                I am based in Bulgaria, with remote work available.
              </p>
              <Button
                name="Contact Me"
                isBeam
                containerClasses="w-full mt-10 mb-3"
              />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full h-full max-h-[220px] object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext mb-3">
                Coding is more than just a profession—it&apos;s a way of life
                for me. I&apos;m passionate about solving problems and building
                things through code. I&apos;m constantly exploring new projects,
                learning new technologies, and embracing every challenge that
                comes my way.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="flex max-h-[220px] h-full object-contain"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Get in touch</p>
              <div
                className="copy-container"
                role="button"
                disabled={hasCopied}
                onClick={handleCopy}
              >
                <img
                  src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-white text-gray_gradient mb-3">
                  deni9309@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
