import {  Environment, ScrollControls, Stars} from "@react-three/drei";
// import { Pannellum } from "pannellum-react";
import { Canvas } from "@react-three/fiber";
import React from "react";

import { Alacalde } from "./Alacalde";
import { PrincipalHome1 } from "./PrincipalHome1";


export default function Experience() {
  
  return (
   <>
   
   <div className="scene_container">
   <Canvas
      camera={{
        fov: 40,
        position: [0, 0, 8.3],
      }}
      
      shadows>
        {/* //movimiento con tiempo de ejecucuion */}
      <ScrollControls pages={9.5} damping={0.20}>
      <ambientLight intensity={3} />
        <PrincipalHome1 />
      </ScrollControls>
      <mesh>
      <Stars radius={50} depth={70} count={5000} factor={4} saturation={0} fade speed={9} />
    {/* <OrbitControls/> */}
    
      </mesh>
      <mesh position={[4, -1, 0]} rotation={[0, -90, 0]} scale={2}>
        
        <Alacalde/>
      </mesh>
      <Environment 
              files="../model/fondon.hdr" 
              ground={{ height: 40, radius: 75, scale: 900 }} 
              environmentIntensity={1}
              // environmentRotation={[0, Math.PI / 2, 0.163]}
            />
    </Canvas>
   </div>
   </>
  );
}