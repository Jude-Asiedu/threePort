import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import BioModel from './imports/Biohard'

const ModelTroubleShooting = () => {
  return (
   
    <Canvas  >
    <Stage environment="sunset" intensity={1.3}>
        <BioModel/>
    </Stage>
    <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
   
  )
}

export default ModelTroubleShooting
