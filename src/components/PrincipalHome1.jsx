import React, { useLayoutEffect, useRef, useEffect } from "react";
import { useFrame, Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, useScroll, useAnimations } from "@react-three/drei";
//import { SkeletonUtils } from 'three-stdlib'
import { useNavigate } from 'react-router-dom';
import gsap from "gsap";

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 10.5;

export function PrincipalHome1(props) {
  // const group = React.useRef()
  const navigate = useNavigate();  // Inicializa useNavigate
  const group = useRef()
  //const { scene } = useGLTF('/model/principalHome1.glb')
  //const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  //const { nodes, materials, animations } = useGraph(clone)
  const { nodes, materials, animations } = useGLTF('/model/principalHome1.glb')
  const { actions } = useAnimations(animations, group)

  if (materials['New Material']) {
    materials['New Material'].transparent = true; // Hacer el material transparente
    materials['New Material'].opacity = 1; // Configurar la opacidad (0: transparente, 1: opaco)
  }

  // const refGeneral = useRef();
  const refCholet = useRef();
  const refParapente = useRef();
  const refMini = useRef();
  const refCondor = useRef();
  const refTurista = useRef();
  const refAcredi = useRef();
  const tl = useRef();


  const scroll = useScroll();

  useEffect(() => {
    //console.log(actions);
    actions.despegue.play();
  },);

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });
  // referencia a gsap
  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // animacion vertical
    tl.current.to(
      group.current.position,
      {
        duration: 6,
        y: +FLOOR_HEIGHT * (NB_FLOORS - 3),
      },
      0
    );
    // cholet rotation, scala
    // tl.current.to(  
    //   refCholet.current.scale, {
    //     y: 3.5,
    //     x: 3.5,
    //     z: 3.5,
    //   },
    //   0,
    // );
    tl.current.to(
      refCholet.current.rotation, {

      y: Math.PI * 2,
      duration: 2,
    },
      0,
    );

    //parapente rotation
    tl.current.to(
      refParapente.current.rotation, {
      y: -Math.PI * 2,
      duration: 2,
    },
      0.8,
    );
    //minibus rotation
    tl.current.to(
      refMini.current.rotation, {
      y: Math.PI * 2,
      duration: 2,
    },
      1.6,
    );
    //condor rotation
    tl.current.to(
      refCondor.current.rotation, {
      y: -Math.PI * 2,
      duration: 2,
    },
      2.2,
    );
    //tiruista rotation
    tl.current.to(
      refTurista.current.rotation, {
      z: Math.PI * 2,
      duration: 2,
    },
      2.8,
    );
    //Acreditacion rotation
    tl.current.to(
      refAcredi.current.rotation, {
      z: -Math.PI * 2,
      duration: 2,
    },
      4.6,
    );
  }, []);

  // Handler de clic
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <group ref={group} {...props} dispose={null} scale={3.2} position={[0, -2, 0]}>
        <group name="Scene">
         
            <group name="Armature" position={[-0.011, -2.885, -0.063]} rotation={[Math.PI, -1.563, Math.PI]} scale={0.136} ref={refCondor}>
              <primitive object={nodes.Bone} />
              <primitive object={nodes.neutral_bone} />
              <group name="condor" ref={refCondor}>
                <skinnedMesh name="Material_" geometry={nodes.Material_.geometry} material={materials['Material_95.005']} skeleton={nodes.Material_.skeleton} />
                <skinnedMesh name="Material__1" geometry={nodes.Material__1.geometry} material={materials['Snowy_Mountain_001.005']} skeleton={nodes.Material__1.skeleton} />
                <skinnedMesh name="Material__2" geometry={nodes.Material__2.geometry} material={materials['Material.040']} skeleton={nodes.Material__2.skeleton} />
              </group>
            </group>
          

          <group name="cholet" position={[0.042, 0.598, 0.058]} rotation={[0, -0.008, 0]} scale={[0.875, 0.915, 0.864]} ref={refCholet} onClick={() => handleClick('/guia')}>
            <mesh name="Cylinder031" geometry={nodes.Cylinder031.geometry} material={materials['dorado.001']} />
            <mesh name="Cylinder031_1" geometry={nodes.Cylinder031_1.geometry} material={materials['Material.023']} />
            <mesh name="Cylinder031_2" geometry={nodes.Cylinder031_2.geometry} material={materials['Material.026']} />
            <mesh name="Cylinder031_3" geometry={nodes.Cylinder031_3.geometry} material={materials['Material.028']} />
            <mesh name="Cylinder031_4" geometry={nodes.Cylinder031_4.geometry} material={materials['Material.029']} />
            <mesh name="Cylinder031_5" geometry={nodes.Cylinder031_5.geometry} material={materials['Material.030']} />
            <mesh name="Cylinder031_6" geometry={nodes.Cylinder031_6.geometry} material={materials['Material.020']} />
            <mesh name="Cylinder031_7" geometry={nodes.Cylinder031_7.geometry} material={materials['Material.032']} />
            <mesh name="Cylinder031_8" geometry={nodes.Cylinder031_8.geometry} material={materials['Material.033']} />
            <mesh name="Cylinder031_9" geometry={nodes.Cylinder031_9.geometry} material={materials['Material.034']} />
            <mesh name="Cylinder031_10" geometry={nodes.Cylinder031_10.geometry} material={materials.Material} />
            <mesh name="Cylinder031_11" geometry={nodes.Cylinder031_11.geometry} material={materials['Material.036']} />
            <mesh name="Cylinder031_12" geometry={nodes.Cylinder031_12.geometry} material={materials['titulopng.001']} />
            <mesh name="Cylinder031_13" geometry={nodes.Cylinder031_13.geometry} material={materials['fondolibra.001']} />
            <mesh name="Cylinder031_14" geometry={nodes.Cylinder031_14.geometry} material={materials['Material.038']} />
            <mesh name="Cylinder031_15" geometry={nodes.Cylinder031_15.geometry} material={materials['Material.039']} />
            <mesh name="Cylinder031_16" geometry={nodes.Cylinder031_16.geometry} material={materials['Material.001']} />
            <mesh name="Cylinder031_17" geometry={nodes.Cylinder031_17.geometry} material={materials['Realistic_Gold_Material_-_Cinema4dMaterial']} />
            <mesh name="Cylinder031_18" geometry={nodes.Cylinder031_18.geometry} material={materials.tianpingshengyi} />
            <mesh name="Cylinder031_19" geometry={nodes.Cylinder031_19.geometry} material={materials['Material.166']} />
            <mesh name="Cylinder031_20" geometry={nodes.Cylinder031_20.geometry} material={materials['Material.167']} />
            <mesh name="Cylinder031_21" geometry={nodes.Cylinder031_21.geometry} material={materials['Material.168']} />
            <mesh name="Cylinder031_22" geometry={nodes.Cylinder031_22.geometry} material={materials['Material.169']} />
            <mesh name="Cylinder031_23" geometry={nodes.Cylinder031_23.geometry} material={materials['Material.170']} />
            <mesh name="Cylinder031_24" geometry={nodes.Cylinder031_24.geometry} material={materials['Material.171']} />
            <mesh name="Cylinder031_25" geometry={nodes.Cylinder031_25.geometry} material={materials['Material.172']} />
            <mesh name="Cylinder031_26" geometry={nodes.Cylinder031_26.geometry} material={materials['Material.173']} />
            <mesh name="Cylinder031_27" geometry={nodes.Cylinder031_27.geometry} material={materials['Material.009']} />
            <mesh name="Cylinder031_28" geometry={nodes.Cylinder031_28.geometry} material={materials['Material.011']} />
            <mesh name="Cylinder031_29" geometry={nodes.Cylinder031_29.geometry} material={materials['Material.013']} />
          </group>
          <group name="turista" position={[0.08, -4.4, -0.011]} rotation={[-1.578, 0, -0.032]} ref={refTurista}>
            <mesh name="Object_2" geometry={nodes.Object_2.geometry} material={materials.intTent} />
            <mesh name="Object_2_1" geometry={nodes.Object_2_1.geometry} material={materials['None_020.001']} />
            <mesh name="Object_2_2" geometry={nodes.Object_2_2.geometry} material={materials['Material.050']} />
            <mesh name="Object_2_3" geometry={nodes.Object_2_3.geometry} material={materials['mat0.001']} />
            <mesh name="Object_2_4" geometry={nodes.Object_2_4.geometry} material={materials['Material.049']} />
            <mesh name="Object_2_5" geometry={nodes.Object_2_5.geometry} material={materials['None_033.001']} />
            <mesh name="Object_2_6" geometry={nodes.Object_2_6.geometry} material={materials['None_002.001']} />
            <mesh name="Object_2_7" geometry={nodes.Object_2_7.geometry} material={materials['None_003.001']} />
            <mesh name="Object_2_8" geometry={nodes.Object_2_8.geometry} material={materials['None_004.001']} />
            <mesh name="Object_2_9" geometry={nodes.Object_2_9.geometry} material={materials['None_005.001']} />
            <mesh name="Object_2_10" geometry={nodes.Object_2_10.geometry} material={materials['None_006.001']} />
            <mesh name="Object_2_11" geometry={nodes.Object_2_11.geometry} material={materials['None_007.001']} />
            <mesh name="Object_2_12" geometry={nodes.Object_2_12.geometry} material={materials['None_008.001']} />
            <mesh name="Object_2_13" geometry={nodes.Object_2_13.geometry} material={materials['None_009.001']} />
            <mesh name="Object_2_14" geometry={nodes.Object_2_14.geometry} material={materials['None_010.001']} />
            <mesh name="Object_2_15" geometry={nodes.Object_2_15.geometry} material={materials['None_011.001']} />
            <mesh name="Object_2_16" geometry={nodes.Object_2_16.geometry} material={materials['None_012.001']} />
            <mesh name="Object_2_17" geometry={nodes.Object_2_17.geometry} material={materials['None_013.001']} />
            <mesh name="Object_2_18" geometry={nodes.Object_2_18.geometry} material={materials['None_014.001']} />
            <mesh name="Object_2_19" geometry={nodes.Object_2_19.geometry} material={materials['None_015.001']} />
            <mesh name="Object_2_20" geometry={nodes.Object_2_20.geometry} material={materials['None_018.001']} />
            <mesh name="Object_2_21" geometry={nodes.Object_2_21.geometry} material={materials['None_019.001']} />
            <mesh name="Object_2_22" geometry={nodes.Object_2_22.geometry} material={materials['None_022.001']} />
            <mesh name="Object_2_23" geometry={nodes.Object_2_23.geometry} material={materials['None_023.001']} />
            <mesh name="Object_2_24" geometry={nodes.Object_2_24.geometry} material={materials['None_024.001']} />
            <mesh name="Object_2_25" geometry={nodes.Object_2_25.geometry} material={materials['None_032.001']} />
            <mesh name="Object_2_26" geometry={nodes.Object_2_26.geometry} material={materials['Material.051']} />
            <mesh name="Object_2_27" geometry={nodes.Object_2_27.geometry} material={materials['Material.052']} />
            <mesh name="Object_2_28" geometry={nodes.Object_2_28.geometry} material={materials['Material.054']} />
            <mesh name="Object_2_29" geometry={nodes.Object_2_29.geometry} material={materials['Material.055']} />
            <mesh name="Object_2_30" geometry={nodes.Object_2_30.geometry} material={materials['Material.056']} />
            <mesh name="Object_2_31" geometry={nodes.Object_2_31.geometry} material={materials['Material.053']} />
            <mesh name="Object_2_32" geometry={nodes.Object_2_32.geometry} material={materials.floorTent} />
            <mesh name="Object_2_33" geometry={nodes.Object_2_33.geometry} material={materials.hitches} />
            <mesh name="Object_2_34" geometry={nodes.Object_2_34.geometry} material={materials.intTentPocket} />
            <mesh name="Object_2_35" geometry={nodes.Object_2_35.geometry} material={materials.sticks} />
            <mesh name="Object_2_36" geometry={nodes.Object_2_36.geometry} material={materials.ties} />
            <mesh name="Object_2_37" geometry={nodes.Object_2_37.geometry} material={materials['Material.004']} />
            <mesh name="Object_2_38" geometry={nodes.Object_2_38.geometry} material={materials['Material.003']} />
            <mesh name="Object_2_39" geometry={nodes.Object_2_39.geometry} material={materials['Material.024']} />
          </group>
          <group name="micro" position={[0.012, -2.003, -0.077]} rotation={[0, -1.568, 0]} ref={refMini}>
            <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials['Material.002']} />
            <mesh name="Cube001_1" geometry={nodes.Cube001_1.geometry} material={materials['Material.005']} />
            <mesh name="Cube001_2" geometry={nodes.Cube001_2.geometry} material={materials['Material.014']} />
            <mesh name="Cube001_3" geometry={nodes.Cube001_3.geometry} material={materials['Material.015']} />
            <mesh name="Cube001_4" geometry={nodes.Cube001_4.geometry} material={materials['Material.016']} />
            <mesh name="Cube001_5" geometry={nodes.Cube001_5.geometry} material={materials['Material.017']} />
            <mesh name="Cube001_6" geometry={nodes.Cube001_6.geometry} material={materials['Material.018']} />
            <mesh name="Cube001_7" geometry={nodes.Cube001_7.geometry} material={materials['Material.019']} />
            <mesh name="Cube001_8" geometry={nodes.Cube001_8.geometry} material={materials['Material.088']} />
            <mesh name="Cube001_9" geometry={nodes.Cube001_9.geometry} material={materials['Material.089']} />
            <mesh name="Cube001_10" geometry={nodes.Cube001_10.geometry} material={materials['Material.090']} />
            <mesh name="Cube001_11" geometry={nodes.Cube001_11.geometry} material={materials['Material.091']} />
            <mesh name="Cube001_12" geometry={nodes.Cube001_12.geometry} material={materials['Material.092']} />
            <mesh name="Cube001_13" geometry={nodes.Cube001_13.geometry} material={materials['Material.093']} />
            <mesh name="Cube001_14" geometry={nodes.Cube001_14.geometry} material={materials['Material.094']} />
            <mesh name="Cube001_15" geometry={nodes.Cube001_15.geometry} material={materials['Material.095']} />
            <mesh name="Cube001_16" geometry={nodes.Cube001_16.geometry} material={materials['Material.096']} />
            <mesh name="Cube001_17" geometry={nodes.Cube001_17.geometry} material={materials['Material.097']} />
            <mesh name="Cube001_18" geometry={nodes.Cube001_18.geometry} material={materials['Material.098']} />
            <mesh name="Cube001_19" geometry={nodes.Cube001_19.geometry} material={materials['Material.099']} />
            <mesh name="Cube001_20" geometry={nodes.Cube001_20.geometry} material={materials['Material.100']} />
            <mesh name="Cube001_21" geometry={nodes.Cube001_21.geometry} material={materials['Material.101']} />
            <mesh name="Cube001_22" geometry={nodes.Cube001_22.geometry} material={materials['Material.103']} />
            <mesh name="Cube001_23" geometry={nodes.Cube001_23.geometry} material={materials['Material.104']} />
            <mesh name="Cube001_24" geometry={nodes.Cube001_24.geometry} material={materials['Material.105']} />
            <mesh name="Cube001_25" geometry={nodes.Cube001_25.geometry} material={materials['Material.106']} />
            <mesh name="Cube001_26" geometry={nodes.Cube001_26.geometry} material={materials['Material.107']} />
            <mesh name="Cube001_27" geometry={nodes.Cube001_27.geometry} material={materials['1156_daemon_u1_v1.002']} />
            <mesh name="Cube001_28" geometry={nodes.Cube001_28.geometry} material={materials['Material.022']} />
          </group>
          <group name="acreditacion" position={[0.051, -5.062, -0.162]} rotation={[Math.PI / 2, 0, 0.008]} scale={[1, 0.05, 1.127]} ref={refAcredi}>
            <mesh name="Text001" geometry={nodes.Text001.geometry} material={materials['Wolf3D_Outfit_Top.001']} />
            <mesh name="Text001_1" geometry={nodes.Text001_1.geometry} material={materials['Wolf3D_Outfit_Bottom.001']} />
            <mesh name="Text001_2" geometry={nodes.Text001_2.geometry} material={materials['Wolf3D_Body.001']} />
            <mesh name="Text001_3" geometry={nodes.Text001_3.geometry} material={materials['Wolf3D_Skin.001']} />
            <mesh name="Text001_4" geometry={nodes.Text001_4.geometry} material={materials['Wolf3D_Eye.001']} />
            <mesh name="Text001_5" geometry={nodes.Text001_5.geometry} material={materials['Wolf3D_Hair.001']} />
            <mesh name="Text001_6" geometry={nodes.Text001_6.geometry} material={materials['Wolf3D_Outfit_Footwear.001']} />
            <mesh name="Text001_7" geometry={nodes.Text001_7.geometry} material={materials.atras} />
            <mesh name="Text001_8" geometry={nodes.Text001_8.geometry} material={materials['Material.006']} />
            <mesh name="Text001_9" geometry={nodes.Text001_9.geometry} material={materials.vredenc12} />
            <mesh name="Text001_10" geometry={nodes.Text001_10.geometry} material={materials.credencial} />
            <mesh name="Text001_11" geometry={nodes.Text001_11.geometry} material={materials['Material.025']} />
          </group>
          <group name="parapente" position={[0.001, -0.99, 0.009]} rotation={[Math.PI, -1.446, Math.PI]} scale={0.532} ref={refParapente}>
            <mesh name="geometry_0001" geometry={nodes.geometry_0001.geometry} material={materials['Material_0.003']} />
            <mesh name="geometry_0001_1" geometry={nodes.geometry_0001_1.geometry} material={materials['Material_0.002']} />
            <mesh name="geometry_0001_2" geometry={nodes.geometry_0001_2.geometry} material={materials['MatSpyTron.001']} />
            <mesh name="geometry_0001_3" geometry={nodes.geometry_0001_3.geometry} material={materials['Casco.001']} />
            <mesh name="geometry_0001_4" geometry={nodes.geometry_0001_4.geometry} material={materials['09___Default.001']} />
            <mesh name="geometry_0001_5" geometry={nodes.geometry_0001_5.geometry} material={materials['Material.021']} />
          </group>
        </group>
      </group>
      <OrbitControls enableZoom={false} />
    </>
  )
}

useGLTF.preload('/model/principalHome1.glb')
