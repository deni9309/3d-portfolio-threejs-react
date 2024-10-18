import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Float, useGLTF, useTexture } from '@react-three/drei'
import { useRef, useState } from 'react'

const Cube = ({ ...props }) => {
  const { nodes } = useGLTF('/models/cube.glb')
  const texture1 = useTexture('/textures/cube.png')
  const texture2 = useTexture('/textures/desk/cpu.png')

  const cubeRef = useRef()
  const [hovered, setHovered] = useState(false)

  useGSAP(() => {
    gsap
      .timeline({ repeat: -1, repeatDelay: 0.5 })
      .to(cubeRef.current.rotation, {
        x: hovered ? '+=2' : `-=${Math.PI * 2}`,
        y: hovered ? '+=2' : `+=${Math.PI * 2}`,
        duration: 2.5,
        stagger: { each: 0.15 },
      })
  })

  return (
    <Float floatIntensity={2}>
      <group
        {...props}
        position={[props.position[0], props.position[1], 0]}
        rotation={[2.6, 0.8, -1.8]}
        scale={0.74}
        dispose={null}
      >
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          onPointerEnter={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshMatcapMaterial matcap={texture2} map={texture1} />
        </mesh>
      </group>
    </Float>
  )
}

useGLTF.preload('/models/cube.glb')

export default Cube
