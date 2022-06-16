//npm run deploy
import React from 'react';
import { Canvas } from '@react-three/fiber'
import { Sky} from "@react-three/drei";
import { Physics } from "@react-three/cannon";



function App() {
  return (
    <Canvas>
        <Sky sunPosition={new Vector3(100,10,100)}/>
        <ambientLight intensity={0.3}/>
        <pointLight castShadow intensity={0.8} position={[100, 100, 100]}/>

    </Canvas>
  );
}

export default App;