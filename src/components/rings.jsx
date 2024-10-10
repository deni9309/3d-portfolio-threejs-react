import { useGSAP } from '@gsap/react'
import { Center, useTexture } from '@react-three/drei'
import gsap from 'gsap'
import { useCallback, useRef } from 'react'

const Rings = ({ position }) => {
  const listRef = useRef([])

  const getRef = useCallback((mesh) => {
    if (mesh && !listRef.current.includes(mesh)) {
      listRef.current.push(mesh)
    }
  }, [])

  const texture = useTexture('/textures/rings.png')

  useGSAP(
    () => {
      if (listRef.current.length === 0) return

      listRef.current.forEach((el) => {
        el.position.set(position[0], position[1], position[2])
      })

      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.5,
        })
        .to(
          listRef.current.map((el) => el.rotation),
          {
            x: `-=${Math.PI * 2}`,
            y: `+=${Math.PI * 2}`,
            duration: 2.5,
            stagger: { each: 0.15 },
          },
        )
    },
    { dependencies: position },
  )

  return (
    <Center>
      <group scale={0.5}>
        {Array.from({ length: 4 }, (_, i) => (
          <mesh key={i} ref={getRef}>
            <torusGeometry args={[(i + 1) * 0.5, 0.1]} />
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  )
}

export default Rings
