import React from 'react'
import {useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {easing} from "maath";


const HeroCamera = ({children, isMobile}) => {
    const groupRef = useRef();

    

    useFrame((state, delta)=>{

        easing.damp3(state.camera.position, [0, 0, 30], 0.25, delta);

        if (!groupRef.current) return;
        //if(isMobile){
            easing.dampE(groupRef.current.rotation, [-state.pointer.y/1.5, state.pointer.x / 2, 0], 0.25, delta);
        //}

    })

    return (
    <group ref = {groupRef} scale={1.1}> 
      {children}
    </group>
  )
}

export default HeroCamera
