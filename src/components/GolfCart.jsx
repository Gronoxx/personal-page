import React, { useRef , useEffect, useState} from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {useFrame} from "@react-three/fiber";

export function GolfCart(props) {
  const { nodes, materials } = useGLTF('/models/area_9_golf_cart.glb')

  const golfCartRef = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  const initialTime = useRef(null); // Store initial time in useRef to persist across renders

  useFrame(() => {
    if (hasAnimated) return; // Prevent animation after it completes
    if (!golfCartRef.current) return;

    if (initialTime.current === null) {
      initialTime.current = Date.now();  // Set the start time once, when the animation starts
    }

    const elapsed = Date.now() - initialTime.current; // Calculate elapsed time since animation started

    // Animation logic: scale from 1 to 4 over 2 seconds
    if (elapsed <= 2000) { // 2 seconds in milliseconds
      const scale = (elapsed / 2000) * 0.5 + 0.2; // Interpolate scale from 1 to 4
      golfCartRef.current.scale.set(scale, scale, scale);
    } else {
      setHasAnimated(true); // Stop the animation after reaching max size
    }
  });

  useEffect(() => {
    // Trigger animation immediately when the component is mounted
    initialTime.current = null;  // Reset initial time when component mounts
  }, []);

  useFrame(()=>{
    if (!golfCartRef.current) return;
    golfCartRef.current.rotation.y -=0.0035;
  })

  return (
    <group ref = {golfCartRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.golfcart_0.geometry}
          material={materials.golfcart}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.golfcart_1.geometry}
          material={materials.golfcart_glass}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/area_9_golf_cart.glb');
export default GolfCart;
