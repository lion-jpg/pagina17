import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";
// import { Canvas } from 'react-three-fiber';

export function Alacalde(props) {
  const { nodes, materials } = useGLTF('/model/alacalde.glb')
  const group = useRef()

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01; // Ajusta la velocidad de rotación aquí
     
    }
  });
  
  return (
    <group {...props} dispose={null} ref={group}>
      <mesh geometry={nodes.alcaldesa.geometry} material={materials['New Material']} />
    </group>
  )
}

useGLTF.preload('/model/alacalde.glb')
