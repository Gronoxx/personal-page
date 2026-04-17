import React, { useRef , useEffect} from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {useFrame} from "@react-three/fiber";

export function Maze(props, isMobile) {
  const mazeRef = useRef();
  const { nodes, materials } = useGLTF('/models/maze.glb')

  //if(isMobile){
  useFrame(()=>{
        if (!mazeRef.current) return;
        mazeRef.current.rotation.y -=0.0035;
        mazeRef.current.rotation.x -=0.00075
   })
  //}


  return (
    <group {...props} ref={mazeRef} dispose={null}>
      <group position={[-0.918, 1.063, 1.1]} rotation={[Math.PI / 2, 0, 0]} scale={0.154}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials['Pac-Man']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Eyes}
        />
      </group>
      <group position={[0.711, 2.436, 1.253]} rotation={[0, -0.543, 0]} scale={0.199}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.Cherry_Red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.Cherry_Green}
        />
      </group>
      <group
        position={[-1.501, 1.044, 1.293]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        scale={0.131}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.Ghost_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.Ghost_Eyes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.Ghost_Eyes_2}
        />
      </group>
      <group position={[0.743, 3.409, 1.304]} rotation={[Math.PI / 2, 0, 0]} scale={0.135}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.Ghost_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.Ghost_Eyes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.Ghost_Eyes_2}
        />
      </group>
      <group position={[2.202, 2.496, -2.334]} rotation={[0, 0, -Math.PI / 2]} scale={0.152}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials.Ghost_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.Ghost_Eyes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials.Ghost_Eyes_2}
        />
      </group>
      <group position={[-0.374, 4.352, -0.186]} scale={0.138}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_27.geometry}
          material={materials.Ghost_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={materials.Ghost_Eyes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={materials.Ghost_Eyes_2}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Maze}
        position={[0, 0, -0.888]}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.Maze_Highlights}
        position={[0, 0, -0.888]}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_31.geometry}
        material={materials.Points}
        position={[-0.406, 1.052, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_33.geometry}
        material={materials.Points}
        position={[-0.006, 1.063, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_35.geometry}
        material={materials.Points}
        position={[0.351, 1.057, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_37.geometry}
        material={materials.Points}
        position={[0.367, 1.42, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_39.geometry}
        material={materials.Points}
        position={[0.361, 1.766, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_41.geometry}
        material={materials.Points}
        position={[0.01, 1.788, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_43.geometry}
        material={materials.Points}
        position={[-0.049, 2.139, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_45.geometry}
        material={materials.Points}
        position={[-0.017, 2.518, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_47.geometry}
        material={materials.Points}
        position={[0.345, 2.523, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_49.geometry}
        material={materials.Points}
        position={[-0.038, 2.859, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_51.geometry}
        material={materials.Points}
        position={[-0.374, 2.88, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_53.geometry}
        material={materials.Points}
        position={[-0.726, 2.869, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_55.geometry}
        material={materials.Points}
        position={[-0.736, 2.507, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_57.geometry}
        material={materials.Points}
        position={[-0.736, 2.118, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_59.geometry}
        material={materials.Points}
        position={[-0.742, 1.793, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_61.geometry}
        material={materials.Points}
        position={[-1.125, 1.793, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_63.geometry}
        material={materials.Points}
        position={[-1.466, 1.782, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_65.geometry}
        material={materials.Points}
        position={[-1.818, 1.777, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_67.geometry}
        material={materials.Points}
        position={[-0.736, 1.436, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_69.geometry}
        material={materials.Points}
        position={[-0.72, 1.068, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_71.geometry}
        material={materials.Points}
        position={[0.372, 0.684, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_73.geometry}
        material={materials.Points}
        position={[0.708, 0.658, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_75.geometry}
        material={materials.Points}
        position={[0.713, 0.317, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_77.geometry}
        material={materials.Points}
        position={[-0.71, 3.216, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_79.geometry}
        material={materials.Points}
        position={[-1.077, 3.242, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_81.geometry}
        material={materials.Points}
        position={[-1.482, 3.253, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_83.geometry}
        material={materials.Points}
        position={[-1.818, 3.242, 1.288]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_85.geometry}
        material={materials.Points}
        position={[-2.105, 3.238, 0.919]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_87.geometry}
        material={materials.Points}
        position={[-2.105, 3.238, 0.564]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_89.geometry}
        material={materials.Points}
        position={[-2.105, 2.874, 0.55]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_91.geometry}
        material={materials.Points}
        position={[-2.105, 2.869, 0.191]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_93.geometry}
        material={materials.Points}
        position={[-2.105, 2.856, -0.151]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_95.geometry}
        material={materials.Points}
        position={[-2.105, 2.519, -0.165]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_97.geometry}
        material={materials.Points}
        position={[-2.105, 2.487, -0.538]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_99.geometry}
        material={materials.Points}
        position={[-2.105, 2.137, -0.542]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_101.geometry}
        material={materials.Points}
        position={[-2.105, 1.781, -0.555]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_103.geometry}
        material={materials.Points}
        position={[-2.105, 1.399, -0.547]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_105.geometry}
        material={materials.Points}
        position={[-2.105, 1.408, -0.893]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_107.geometry}
        material={materials.Points}
        position={[-2.105, 1.377, -1.253]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_109.geometry}
        material={materials.Points}
        position={[-2.105, 1.777, -1.262]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_111.geometry}
        material={materials.Points}
        position={[-2.105, 2.185, -1.275]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_113.geometry}
        material={materials.Points}
        position={[-2.105, 2.479, -1.257]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_115.geometry}
        material={materials.Points}
        position={[-2.105, 2.483, -0.875]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_117.geometry}
        material={materials.Points}
        position={[-2.105, 1.755, -1.617]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_119.geometry}
        material={materials.Points}
        position={[-2.105, 1.75, -1.994]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_121.geometry}
        material={materials.Points}
        position={[-2.105, 1.404, -2.003]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_123.geometry}
        material={materials.Points}
        position={[-2.105, 1.08, -1.994]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_125.geometry}
        material={materials.Points}
        position={[-2.105, 1.066, -2.372]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_127.geometry}
        material={materials.Points}
        position={[-2.105, 1.062, -2.705]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_129.geometry}
        material={materials.Points}
        position={[-2.105, 0.68, -2.718]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_131.geometry}
        material={materials.Points}
        position={[-2.105, 0.331, -2.718]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_133.geometry}
        material={materials.Points}
        position={[-1.798, 0.337, -3.03]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_135.geometry}
        material={materials.Points}
        position={[-1.472, 0.324, -3.03]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_137.geometry}
        material={materials.Points}
        position={[-1.824, 0.669, -3.03]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_139.geometry}
        material={materials.Points}
        position={[-1.836, 1.028, -3.03]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_141.geometry}
        material={materials.Points}
        position={[-1.44, 1.053, -3.03]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_143.geometry}
        material={materials.Points}
        position={[-1.44, 1.424, -3.03]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_145.geometry}
        material={materials.Points}
        position={[-1.434, 1.769, -3.03]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_147.geometry}
        material={materials.Points}
        position={[-1.063, 1.789, -3.03]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_149.geometry}
        material={materials.Points}
        position={[-0.743, 1.769, -3.03]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_151.geometry}
        material={materials.Points}
        position={[-0.673, 2.16, -3.03]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_153.geometry}
        material={materials.Points}
        position={[-0.34, 2.134, -3.03]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_155.geometry}
        material={materials.Points}
        position={[-1.12, 1.047, -3.03]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_157.geometry}
        material={materials.Points}
        position={[-0.73, 1.06, -3.03]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_159.geometry}
        material={materials.Points}
        position={[-0.673, 0.663, -3.03]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_161.geometry}
        material={materials.Points}
        position={[-0.391, 0.65, -3.03]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_163.geometry}
        material={materials.Points}
        position={[-0.02, 0.644, -3.03]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_165.geometry}
        material={materials.Points}
        position={[-0.001, 1.079, -3.03]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_167.geometry}
        material={materials.Points}
        position={[-0.007, 1.443, -3.03]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_169.geometry}
        material={materials.Points}
        position={[-0.737, 2.511, -3.03]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_171.geometry}
        material={materials.Points}
        position={[-1.095, 2.524, -3.03]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_173.geometry}
        material={materials.Points}
        position={[-1.082, 2.869, -3.03]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_175.geometry}
        material={materials.Points}
        position={[-0.014, 0.382, -3.03]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_177.geometry}
        material={materials.Points}
        position={[-0.014, 0.016, -2.749]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_179.geometry}
        material={materials.Points}
        position={[-0.014, 0.016, -2.365]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_181.geometry}
        material={materials.Points}
        position={[-0.014, 0.016, -1.994]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_183.geometry}
        material={materials.Points}
        position={[-0.353, 0.016, -1.994]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_185.geometry}
        material={materials.Points}
        position={[-0.737, 0.016, -1.969]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_187.geometry}
        material={materials.Points}
        position={[-0.743, 0.016, -2.34]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_189.geometry}
        material={materials.Points}
        position={[-0.743, 0.016, -2.704]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_191.geometry}
        material={materials.Points}
        position={[-0.346, 0.016, -2.743]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_193.geometry}
        material={materials.Points}
        position={[-0.737, 0.016, -1.591]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_195.geometry}
        material={materials.Points}
        position={[-0.724, 0.016, -1.24]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_197.geometry}
        material={materials.Points}
        position={[-0.737, 0.016, -0.901]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_199.geometry}
        material={materials.Points}
        position={[-1.082, 0.016, -0.894]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_201.geometry}
        material={materials.Points}
        position={[-1.101, 0.016, -0.53]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_203.geometry}
        material={materials.Points}
        position={[-1.12, 0.016, -0.153]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_205.geometry}
        material={materials.Points}
        position={[-1.095, 0.016, 0.167]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_207.geometry}
        material={materials.Points}
        position={[-1.517, 0.016, 0.186]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_209.geometry}
        material={materials.Points}
        position={[-1.843, 0.016, 0.206]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_211.geometry}
        material={materials.Points}
        position={[-1.811, 0.016, 0.666]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_213.geometry}
        material={materials.Points}
        position={[-1.817, 0.016, 0.909]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_215.geometry}
        material={materials.Points}
        position={[-1.843, 0.016, -0.191]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_217.geometry}
        material={materials.Points}
        position={[-1.83, 0.016, -0.491]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_219.geometry}
        material={materials.Points}
        position={[-1.446, 0.016, -0.517]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_221.geometry}
        material={materials.Points}
        position={[0.76, 0.016, 0.903]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_223.geometry}
        material={materials.Points}
        position={[0.383, 0.016, 0.877]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_225.geometry}
        material={materials.Points}
        position={[0.383, 0.016, 0.532]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_227.geometry}
        material={materials.Points}
        position={[0.338, 0.016, 0.18]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_229.geometry}
        material={materials.Points}
        position={[-0.014, 0.016, 0.218]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_231.geometry}
        material={materials.Points}
        position={[-0.346, 0.016, 0.225]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_233.geometry}
        material={materials.Points}
        position={[-0.378, 0.016, 0.596]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_235.geometry}
        material={materials.Points}
        position={[-0.366, 0.016, 0.96]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_237.geometry}
        material={materials.Points}
        position={[1.828, 0.016, -1.278]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_239.geometry}
        material={materials.Points}
        position={[1.841, 0.016, -1.604]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_241.geometry}
        material={materials.Points}
        position={[1.425, 0.016, -1.649]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_243.geometry}
        material={materials.Points}
        position={[1.412, 0.016, -2.026]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_245.geometry}
        material={materials.Points}
        position={[1.438, 0.016, -2.34]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_247.geometry}
        material={materials.Points}
        position={[1.847, 0.016, -2.346]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_249.geometry}
        material={materials.Points}
        position={[2.202, 0.348, -2.35]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_251.geometry}
        material={materials.Points}
        position={[2.202, 0.703, -2.337]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_253.geometry}
        material={materials.Points}
        position={[2.202, 1.041, -2.364]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_255.geometry}
        material={materials.Points}
        position={[2.202, 1.392, -2.355]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_257.geometry}
        material={materials.Points}
        position={[2.202, 1.414, -2.741]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_259.geometry}
        material={materials.Points}
        position={[2.202, 1.045, -1.942]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_261.geometry}
        material={materials.Points}
        position={[2.202, 1.019, -1.64]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_263.geometry}
        material={materials.Points}
        position={[2.202, 1.059, -1.209]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_265.geometry}
        material={materials.Points}
        position={[2.202, 0.672, -1.604]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_267.geometry}
        material={materials.Points}
        position={[2.202, 0.299, -1.622]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_269.geometry}
        material={materials.Points}
        position={[2.202, 1.032, -0.152]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_271.geometry}
        material={materials.Points}
        position={[2.202, 0.686, -0.152]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_273.geometry}
        material={materials.Points}
        position={[2.202, 0.677, -0.507]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_275.geometry}
        material={materials.Points}
        position={[2.202, 0.321, -0.547]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_277.geometry}
        material={materials.Points}
        position={[2.202, 1.392, -0.139]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_279.geometry}
        material={materials.Points}
        position={[2.202, 1.392, 0.261]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_281.geometry}
        material={materials.Points}
        position={[2.202, 1.441, 0.563]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_283.geometry}
        material={materials.Points}
        position={[2.202, 1.441, 0.927]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_285.geometry}
        material={materials.Points}
        position={[2.202, 1.786, 0.543]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_287.geometry}
        material={materials.Points}
        position={[2.202, 2.118, 0.543]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_289.geometry}
        material={materials.Points}
        position={[2.202, 2.125, 0.959]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_291.geometry}
        material={materials.Points}
        position={[2.202, 2.509, 0.965]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_293.geometry}
        material={materials.Points}
        position={[2.202, 2.892, 0.959]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_295.geometry}
        material={materials.Points}
        position={[2.202, 2.899, 0.582]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_297.geometry}
        material={materials.Points}
        position={[2.202, 2.892, 0.185]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_299.geometry}
        material={materials.Points}
        position={[2.202, 2.879, -0.147]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_301.geometry}
        material={materials.Points}
        position={[2.202, 2.867, -0.512]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_303.geometry}
        material={materials.Points}
        position={[2.202, 3.218, -0.544]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_305.geometry}
        material={materials.Points}
        position={[2.202, 2.86, -0.889]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_307.geometry}
        material={materials.Points}
        position={[2.202, 2.86, -1.235]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_309.geometry}
        material={materials.Points}
        position={[2.202, 2.502, -1.279]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_311.geometry}
        material={materials.Points}
        position={[2.202, 2.163, -1.324]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_313.geometry}
        material={materials.Points}
        position={[2.202, 2.54, -0.167]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_315.geometry}
        material={materials.Points}
        position={[2.202, 2.176, -0.154]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_317.geometry}
        material={materials.Points}
        position={[2.202, 2.118, -0.493]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_319.geometry}
        material={materials.Points}
        position={[2.202, 1.76, -0.537]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_321.geometry}
        material={materials.Points}
        position={[2.202, 1.415, -0.518]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_323.geometry}
        material={materials.Points}
        position={[2.202, 1.415, -0.889]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_325.geometry}
        material={materials.Points}
        position={[2.202, 1.402, -1.298]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_327.geometry}
        material={materials.Points}
        position={[2.202, 1.415, -1.657]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_329.geometry}
        material={materials.Points}
        position={[2.202, 1.831, -1.657]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_331.geometry}
        material={materials.Points}
        position={[2.202, 2.118, -1.631]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_333.geometry}
        material={materials.Points}
        position={[2.202, 2.515, -1.657]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_335.geometry}
        material={materials.Points}
        position={[2.202, 2.502, -2.002]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_337.geometry}
        material={materials.Points}
        position={[-2.105, 3.201, -0.139]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_339.geometry}
        material={materials.Points}
        position={[-2.105, 3.208, -0.535]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_341.geometry}
        material={materials.Points}
        position={[-2.105, 3.585, -0.541]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_343.geometry}
        material={materials.Points}
        position={[-2.105, 3.975, -0.535]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_345.geometry}
        material={materials.Points}
        position={[-2.105, 3.937, -0.893]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_347.geometry}
        material={materials.Points}
        position={[-2.105, 3.905, -1.27]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_349.geometry}
        material={materials.Points}
        position={[-2.105, 3.598, -1.283]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_351.geometry}
        material={materials.Points}
        position={[-2.105, 3.259, -1.219]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_353.geometry}
        material={materials.Points}
        position={[-2.105, 3.233, -1.616]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_355.geometry}
        material={materials.Points}
        position={[-1.785, 4.282, -1.256]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_357.geometry}
        material={materials.Points}
        position={[-1.466, 4.282, -1.24]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_359.geometry}
        material={materials.Points}
        position={[-1.455, 4.282, -0.835]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_361.geometry}
        material={materials.Points}
        position={[-1.45, 4.282, -0.563]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_363.geometry}
        material={materials.Points}
        position={[-1.109, 4.282, -0.499]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_365.geometry}
        material={materials.Points}
        position={[-0.709, 4.282, -0.515]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_367.geometry}
        material={materials.Points}
        position={[-0.352, 4.282, -0.504]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_369.geometry}
        material={materials.Points}
        position={[-0.341, 4.282, -0.909]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_371.geometry}
        material={materials.Points}
        position={[-0.336, 4.282, -1.25]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_373.geometry}
        material={materials.Points}
        position={[-0.005, 4.282, -1.234]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_375.geometry}
        material={materials.Points}
        position={[-0.719, 4.282, -1.229]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_377.geometry}
        material={materials.Points}
        position={[-1.098, 4.282, -1.25]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_379.geometry}
        material={materials.Points}
        position={[-1.098, 4.282, -1.629]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_381.geometry}
        material={materials.Points}
        position={[-1.082, 4.282, -1.964]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_383.geometry}
        material={materials.Points}
        position={[-1.428, 4.282, -1.986]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_385.geometry}
        material={materials.Points}
        position={[-1.844, 4.282, -1.964]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_387.geometry}
        material={materials.Points}
        position={[0.735, 4.282, 0.215]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_389.geometry}
        material={materials.Points}
        position={[0.741, 4.282, 0.578]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_391.geometry}
        material={materials.Points}
        position={[0.368, 4.282, 0.572]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_393.geometry}
        material={materials.Points}
        position={[0.037, 4.282, -2.348]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_395.geometry}
        material={materials.Points}
        position={[-0.016, 4.282, -2.689]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_397.geometry}
        material={materials.Points}
        position={[-0.362, 4.282, -2.337]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_399.geometry}
        material={materials.Points}
        position={[-0.352, 4.282, -1.97]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_401.geometry}
        material={materials.Points}
        position={[-0.762, 4.282, -1.954]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_403.geometry}
        material={materials.Points}
        position={[1.449, 4.282, -2.375]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_405.geometry}
        material={materials.Points}
        position={[1.471, 4.282, -2.689]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_407.geometry}
        material={materials.Points}
        position={[1.769, 4.282, -2.7]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_409.geometry}
        material={materials.Points}
        position={[-1.434, 4.282, -2.311]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_411.geometry}
        material={materials.Points}
        position={[-1.444, 4.282, -2.689]}
        scale={0.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_413.geometry}
        material={materials.Points}
        position={[-1.124, 4.282, -2.732]}
        scale={0.026}
      />
    </group>
  )
}

useGLTF.preload('/models/maze.glb');
export default Maze;
