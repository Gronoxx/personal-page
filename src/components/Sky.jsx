import React, { useRef , useEffect, useState} from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {useFrame} from "@react-three/fiber";


export function Sky(props) {
  const { nodes, materials } = useGLTF('/models/cartoon_night_sky.glb')

  const moonRef = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  const initialTime = useRef(null); // Store initial time in useRef to persist across renders

  useFrame(() => {
    if (hasAnimated) return; // Prevent animation after it completes

    if (initialTime.current === null) {
      initialTime.current = Date.now();  // Set the start time once, when the animation starts
    }

    const elapsed = Date.now() - initialTime.current; // Calculate elapsed time since animation started

    // Animation logic: scale from 1 to 4 over 2 seconds
    if (elapsed <= 2000) { // 2 seconds in milliseconds
      const scale = (elapsed / 2000) * 4.75 + 5.5; // Interpolate scale from 1 to 4
      moonRef.current.scale.set(scale, scale, scale);
    } else {
      setHasAnimated(true); // Stop the animation after reaching max size
    }
  });

  useEffect(() => {
    // Trigger animation immediately when the component is mounted
    initialTime.current = null;  // Reset initial time when component mounts
  }, []);

  useFrame(()=>{
    moonRef.current.rotation.y -=0.0035;
  })

  return (
    <group ref = {moonRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.moon}
        position={[-1.589, -0.597, 0.3]}
        rotation={[0, 0, 0.475]}
        scale={[2.641, 3.018, 2.641]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.moon}
        position={[3.802, 0.231, -0.306]}
        scale={[0.166, 0.166, 0.109]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.moon}
        position={[2.223, 1.083, -1.006]}
        scale={[0.22, 0.22, 0.144]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.moon}
        position={[2.287, -1.216, 0.664]}
        scale={[0.155, 0.155, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.nuven}
        position={[-1.958, -1.965, 3.022]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[2.413, 1.436, 1.436]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.nuven}
        position={[2.779, -0.948, -3.138]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-1.809, 1.436, 1.436]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.nuven}
        position={[3.44, -2.686, 3.101]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.748, 1.436, 1.436]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials.nuven}
        position={[-3.279, 0.643, -0.481]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[-1.753, 1.436, 1.436]}
      />
    </group>
  )
}

useGLTF.preload('/models/cartoon_night_sky.glb');
export default Sky;