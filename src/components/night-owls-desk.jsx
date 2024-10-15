import React, { useRef } from 'react'
import { useGLTF, useAnimations, useTexture } from '@react-three/drei'

export default function NightOwlsDesk(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(
    '/models/the_night_owls_desk.glb',
  )

  const woodTexture = useTexture('textures/desk/wood.png')
  const laptopTexture = useTexture('textures/desk/laptop.png')
  const mugTexture = useTexture('textures/desk/mug.png')
  const glossyTexture = useTexture('textures/glossy.png')
  const brownTexture = useTexture('textures/brown-surface.png')
  const screenTexture = useTexture('textures/desk/screen2.png')
  const leatherTexture = useTexture('textures/desk/leather.png')
 
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[0.11, 0.234, -2.305]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group
            name="45b254b5d2ae41faa5304c013dfba576fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="calculator"
                  position={[14.688, -0.289, 23.299]}
                  rotation={[0, 0.563, 0]}
                  scale={[1.346, 0.573, 1.313]}
                >
                  <mesh
                    name="calculator_buttons_calc_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.calculator_buttons_calc_0.geometry}
                    material={materials.buttons_calc}
                  />
                  <mesh
                    name="calculator_base_calc_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.calculator_base_calc_0.geometry}
                    material={materials.base_calc}
                  >
                    <meshMatcapMaterial
                      matcap={mugTexture}
                      map={laptopTexture}
                    />               
                  </mesh>
                  <mesh
                    name="calculator_display_calc_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.calculator_display_calc_0.geometry}
                    material={materials.display_calc}
                  />
                  <group name="transform40" position={[0, 0.774, 0]} />
                </group>
                <group
                  name="computer"
                  position={[-16.098, 0.302, -0.609]}
                  scale={1.91}
                >
                  <mesh
                    name="computer_gold_cpu_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.computer_gold_cpu_0.geometry}
                    material={materials.gold_cpu}
                  >
                    <meshPhongMaterial
                      map={laptopTexture}
                      shininess={100}
                      emissive={0x000000}
                      color={0x303036}
                    />
                  </mesh>
                  <mesh
                    name="computer_base_cpu_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.computer_base_cpu_0.geometry}
                    material={materials.base_cpu}
                  >
                    <meshMatcapMaterial
                      matcap={brownTexture}
                      map={glossyTexture}
                    />
                  </mesh>
                  <mesh
                    name="computer_screen_cpu_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.computer_screen_cpu_0.geometry}
                    material={materials.screen_cpu}
                  >
                    <meshMatcapMaterial
                      matcap={glossyTexture}
                      map={screenTexture}
                    />
                  </mesh>
                </group>
                <group
                  name="lamp"
                  position={[-12.292, 1.107, 33.01]}
                  rotation={[0, 0.631, 0]}
                  scale={1.383}
                >
                  <mesh
                    name="lamp_gold_lamp_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.lamp_gold_lamp_0.geometry}
                    material={materials.gold_lamp}
                  />
                  <mesh
                    name="lamp_dark_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.lamp_dark_0.geometry}
                    material={materials.dark}
                  />
                  <mesh
                    name="lamp_metal_lamp_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.lamp_metal_lamp_0.geometry}
                    material={materials.metal_lamp}
                  />
                  <mesh
                    name="lamp_bulb_lamp_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.lamp_bulb_lamp_0.geometry}
                    material={materials.bulb_lamp}
                  />
                </group>
                <group
                  name="pSphere3"
                  position={[15.635, 0.496, 3.717]}
                  rotation={[-1.683, 0.477, 0.241]}
                >
                  <mesh
                    name="pSphere3_standardSurface4_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pSphere3_standardSurface4_0.geometry}
                    material={materials.standardSurface4}
                  />
                  <mesh
                    name="pSphere3_chrome1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pSphere3_chrome1_0.geometry}
                    material={materials.chrome1}
                  />
                  <mesh
                    name="pSphere3_pasted__chrome1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pSphere3_pasted__chrome1_0.geometry}
                    material={materials.pasted__chrome1}
                  />
                </group>
                <group
                  name="pCylinder5"
                  position={[7.458, -0.119, -29.27]}
                  rotation={[0, -1.256, 0]}
                  scale={2.003}
                >
                  <mesh
                    name="pCylinder5_base_mug_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCylinder5_base_mug_0.geometry}
                    material={materials.base_mug}
                  >
                    <meshMatcapMaterial matcap={glossyTexture} />
                  </mesh>
                  <mesh
                    name="pCylinder5_Default_Material_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCylinder5_Default_Material_0.geometry}
                    material={materials.Default_Material}
                  />
                  <mesh
                    name="pCylinder5_fluid_mug_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCylinder5_fluid_mug_0.geometry}
                    material={materials.fluid_mug}
                  />
                  <mesh
                    name="pCylinder5_coaster_mug_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCylinder5_coaster_mug_0.geometry}
                    material={materials.coaster_mug}
                  >
                    <meshPhysicalMaterial
                      map={leatherTexture}
                      metalness={1}
                      metalnessMap={glossyTexture}
                    />
                  </mesh>
                </group>
                <group name="pCube1" scale={[12.975, 1, 8.224]}>
                  <group name="transform6" />
                </group>
                <group
                  name="pTorus1"
                  position={[0, 6.221, 3]}
                  rotation={[Math.PI / 2, 0.196, 0]}
                >
                  <group name="transform1" />
                </group>
                <group
                  name="pTorus2"
                  position={[0, 6.221, -3]}
                  rotation={[Math.PI / 2, 0.196, 0]}
                >
                  <group name="transform2" />
                </group>
                <group name="pTorus3" scale={[1.134, 1, 1]}>
                  <group name="transform5" />
                </group>
                <group name="pSphere1" position={[0, 2.842, 0]}>
                  <group name="transform4" />
                </group>
                <group
                  name="pCylinder1"
                  position={[0, 3.782, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.057, 5.419, 0.057]}
                >
                  <group name="transform3" />
                </group>
                <group
                  name="bend1Handle"
                  position={[0.014, 3.782, 0]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                  scale={8.16}
                />
                <group name="bend1Handle1">
                  <group name="transform9" />
                </group>
                <group name="bend1Handle2" position={[1.986, 0, 0]}>
                  <group name="transform7" />
                </group>
                <group name="bend1Handle3" position={[3.986, 0, 0]}>
                  <group name="transform12" />
                </group>
                <group name="bend1Handle4" position={[-2.014, 0, 0]}>
                  <group name="transform8" />
                </group>
                <group name="bend1Handle5" position={[-4.014, 0, 0]}>
                  <group name="transform11" />
                </group>
                <group name="pCube2">
                  <group name="transform10" />
                </group>
                <group name="pCube3">
                  <group name="transform13" />
                </group>
                <group
                  name="pCube4"
                  position={[-15.35, 0.574, -35.198]}
                  rotation={[0, 1.052, 0]}
                  scale={1.648}
                >
                  <mesh
                    name="pCube4_ball_rose3_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube4_ball_rose3_0.geometry}
                    material={materials.ball_rose3}
                  />
                  <mesh
                    name="pCube4_ball_pink1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube4_ball_pink1_0.geometry}
                    material={materials.ball_pink1}
                  />
                  <mesh
                    name="pCube4_metal4_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube4_metal4_0.geometry}
                    material={materials.metal4}
                  />
                  <mesh
                    name="pCube4_ball_purple1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube4_ball_purple1_0.geometry}
                    material={materials.ball_purple1}
                  />
                  <mesh
                    name="pCube4_ball_violet1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube4_ball_violet1_0.geometry}
                    material={materials.ball_violet1}
                  />
                  <mesh
                    name="pCube4_ball_blue3_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube4_ball_blue3_0.geometry}
                    material={materials.ball_blue3}
                  />
                  <mesh
                    name="pCube4_base_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube4_base_0.geometry}
                    material={materials.base}
                  >
                    <meshMatcapMaterial
                      map={woodTexture}
                      matcap={brownTexture}
                    />
                  </mesh>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/the_night_owls_desk.glb')
