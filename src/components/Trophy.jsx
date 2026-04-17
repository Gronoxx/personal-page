import React, { useRef , useEffect, useState} from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {useFrame} from "@react-three/fiber";

export function Trophy(props) {
  const { nodes, materials } = useGLTF('/models/trophy.glb')

  const trophyRef = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  const initialTime = useRef(null); // Store initial time in useRef to persist across renders

  useFrame(() => {
    if (hasAnimated) return; // Prevent animation after it completes
    if (!trophyRef.current) return;

    if (initialTime.current === null) {
      initialTime.current = Date.now();  // Set the start time once, when the animation starts
    }

    const elapsed = Date.now() - initialTime.current; // Calculate elapsed time since animation started

    // Animation logic: scale from 1 to 4 over 2 seconds
    if (elapsed <= 2000) { // 2 seconds in milliseconds
      const scale = (elapsed / 2000) * 0.1 + 0.1; // Interpolate scale from 1 to 4
      trophyRef.current.scale.set(scale, scale, scale);
    } else {
      setHasAnimated(true); // Stop the animation after reaching max size
    }
  });

  useEffect(() => {
    // Trigger animation immediately when the component is mounted
    initialTime.current = null;  // Reset initial time when component mounts
  }, []);

  useFrame(()=>{
    if (!trophyRef.current) return;
    trophyRef.current.rotation.y -=0.0035;
  })

  return (
    <group ref = {trophyRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wctrophy_globe_low_globe_0.geometry}
        material={materials.globe}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wctrophy_body_low_body_0.geometry}
        material={materials.body}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/models/trophy.glb');
export default Trophy;