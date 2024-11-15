import { Canvas, useThree } from "@react-three/fiber";
import { Environment, ScrollControls, Stars } from '@react-three/drei';
import { useEffect, useMemo } from 'react';
import { Vector3 } from 'three';
import { Alacalde } from "./Alacalde";
import { PrincipalHome1 } from "./PrincipalHome1";

function Scene() {
  const memoizedPrincipalHome1 = useMemo(() => <PrincipalHome1 />, []);
  const memoizedAlacalde = useMemo(() => (
    <mesh position={[4, -1, 0]} rotation={[0, -90, 0]} scale={2}>
      <Alacalde />
    </mesh>
  ), []);

  return (
    <Canvas
      camera={{
        fov: 20,
      }}
    >
      <mesh position={[0, -3.5, 0]} rotation={[0, 0, 0]} scale={4}>
        {/* Controles de desplazamiento */}
        <ScrollControls pages={9.5} damping={0.20}>
          <ambientLight intensity={1} />
          {/* Componente principal de tu escena */}
          {memoizedPrincipalHome1}
        </ScrollControls>

        {/* Otros elementos de la escena */}
        {memoizedAlacalde}
      </mesh>

      {/* Estrellas de fondo */}
      <mesh>
        <Stars radius={10} depth={50} count={2000} factor={4} saturation={70} fade speed={10} />
      </mesh>
      {/* Entorno (fondo) */}
      <CustomEnvironment position={[70, 50, 30]} />
    </Canvas>
  );
}

function CustomEnvironment() {
  const { camera } = useThree();

  useEffect(() => {
    // Cambiar la posición de la cámara para centrar en el fondo
    camera.position.set(0, 10, 70); // Ajusta la posición de la cámara según necesites
    //camera.rotation.set(50, 7, 60); // Ajusta la posición de la cámara según necesites
    camera.lookAt(new Vector3(-9, 1, 100)); // Hacer que la cámara mire hacia el origen (0, 0, 0)
  }, [camera]);

  return (
    <Environment
      
      files="../model/fondo22.hdr"
      ground={{ height: 20, radius: 100, scale: 900 }}
      environmentIntensity={2}
    />
  );
}

export default function Experience() {
  return (
    <>
      <div className="scene_container">
        <Scene />
      </div>
    </>
  );
}
