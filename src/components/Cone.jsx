import React, { useRef , useEffect, useState} from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {useFrame} from "@react-three/fiber";

export function Cone(props) {
  const { nodes, materials } = useGLTF('/models/traffic_street_cone.glb')

  const coneRef = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  const initialTime = useRef(null); // Store initial time in useRef to persist across renders

  useFrame(() => {
    if (hasAnimated) return; // Prevent animation after it completes
    if (!coneRef.current) return;

    if (initialTime.current === null) {
      initialTime.current = Date.now();  // Set the start time once, when the animation starts
    }

    const elapsed = Date.now() - initialTime.current; // Calculate elapsed time since animation started

    // Animation logic: scale from 1 to 4 over 2 seconds
    if (elapsed <= 2000) { // 2 seconds in milliseconds
      const scale = (elapsed / 2000) * 30 + 4; // Interpolate scale from 1 to 4
      coneRef.current.scale.set(scale, scale, scale);
    } else {
      setHasAnimated(true); // Stop the animation after reaching max size
    }
  });

  useEffect(() => {
    // Trigger animation immediately when the component is mounted
    initialTime.current = null;  // Reset initial time when component mounts
  }, []);

  useFrame(()=>{
    if (!coneRef.current) return;
    coneRef.current.rotation.y -=0.0035;
  })


  return (
    <group ref = {coneRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.773}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 68.423]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.traffic_cone_Material001_0.geometry}
              material={materials['Material.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.traffic_cone_Material_0.geometry}
              material={materials.Material}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/traffic_street_cone.glb');
export default Cone;