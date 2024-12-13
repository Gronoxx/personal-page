import React, { useRef } from 'react'
import {Float, useGLTF } from '@react-three/drei'

export function ReactLogo(props) {
  const { nodes, materials } = useGLTF('/models/react_logo.glb')
  return (
    <Float dispose={null}>
      <group scale={0.8} {...props}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react_logo.glb');
export default ReactLogo;