//npm run deploy

//Imports
import React, { useRef } from 'react';
import './App.css'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import * as THREE from "three"
import { Camera } from './Assets/3d-main/Camera';

//Create an simple box object that rotates
const Box = ({position}) => {
    const mesh = useRef(null)
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
    return(
        <mesh position={position} ref={mesh}>
            <boxBufferGeometry attach='geometry' args={[1,1,1]} />
            <meshStandardMaterial attach='material' color='lightblue' />
        </mesh>
    );
};



function App() {
  return (
    <Canvas colorManagement>
        <Sky sunPosition={new THREE.Vector3(100,10,100)}/>
        <ambientLight intensity={0.3}/>
        <pointLight castShadow intensity={0.8} position={[100, 100, 100]}/>

        <Box position={[-2,1,0]}/>
        <Box position={[0,2,0]}/>
        <Box position={[2,3,0]}/>


    </Canvas>
  );
}

export default App;