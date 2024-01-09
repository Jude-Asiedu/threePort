import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Model from './imports/Device'

const ModelDevpt = () => {
  return (
   <>
    <Canvas>
    <Stage environment="night" intensity={0.3}>
        <Model/>
    </Stage>
    <OrbitControls enableZoom={false} />
    </Canvas>
   </>
  )
}

export default ModelDevpt
