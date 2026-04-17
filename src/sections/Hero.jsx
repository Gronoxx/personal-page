import React, { Suspense, useRef} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, useScroll, ScrollControls, Scroll } from "@react-three/drei";
import PacMan from "../components/PacMan.jsx";
import Maze from "../components/Maze.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import { Environment } from "@react-three/drei";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";



const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ minWidth: 440, maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  

  return (
    <section className="min-h-screen w-full flex flex-col items-start relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium  text-white text-center font-generalsans">
          Hi, I am Gustavo <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Thinking outside the Maze
        </p>
      </div>

      <div className="w-full h-full absolute insert-0">
        <Canvas className="w-full h-full" shadows>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            {/* Maze model */}
            <HeroCamera isMobile={isMobile} >
            <Maze 
            scale={sizes.mazeScale} 
            position={sizes.mazePosition} 
            rotation={[-0.15, 0.39, 0]}/>
            </HeroCamera>


               <group>
                  <ReactLogo position ={sizes.reactLogoPosition} scale ={sizes.reactLogoScale}/>
                  <Cube position = {sizes.cubePosition} scale = {sizes.cubeScale}/>
                  <Rings position = {sizes.ringPosition} scale ={sizes.ringScale}/>
              </group>

            {/* Lights */}
            <directionalLight
              position={[5, 10, 15]}
              intensity={1.5}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <ambientLight intensity={0.3} />
            <spotLight
              position={[5, 10, 10]}
              angle={0.3}
              intensity={0.5}
              penumbra={0.5}
              castShadow
            />
            <spotLight
              position={[-5, 10, 10]}
              angle={0.3}
              intensity={0.2}
              penumbra={0.5}
              castShadow
            />

            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
          <Button 
            name="Let's innovate together" 
            isBeam 
            containerClass={`w-full ${!isMobile && !isTablet && !isSmall ? 'w-[300px] min-w-[150px]' : 'sm:w-fit min-w-96'}`} 
          />
        </a>
      </div>

    </section>

  );
};

export default Hero;

