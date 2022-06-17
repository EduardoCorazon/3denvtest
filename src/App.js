//npm run deploy

//Imports
//Basic things
import React, { Suspense, useRef } from 'react';
import './App.css'
import * as THREE from "three"
//React 3 fiber
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { PointerLockControls, Sky, Stars } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import { Player } from './Assets/3d-main/Player';
//Asset Files



//EXPERIMENT
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

const Plane = ({props}) =>{
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
    </mesh>
  )
}

function Cube(props) {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }))
  return (
    <mesh ref={ref}>
      <boxGeometry />
    </mesh>
  )
}



function App() {
  
  return (
    <Canvas colorManagement>
        <PointerLockControls/>
        
        
        
        <Sky sunPosition={new THREE.Vector3(100,10,100)}/>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <ambientLight intensity={0.3}/>
        <pointLight castShadow intensity={0.8} position={[100, 100, 100]}/>


        <Physics gravity={[0, -2,0]}>
          <Player/>
          <Plane/>
          <Cube/>
        </Physics>



        <Box position={[-2,1,0]}/>
        <Box position={[0,2,0]}/>
        <Box position={[2,3,0]}/>


    </Canvas>
  );
}

export default App;




/**Self notes
function mytest(){
 return (
    <mesh ref={ref}>
      code
    </mesh>
  )
}

IS THE SAME AS 
const mytest = ({}) =>{

}

**/
