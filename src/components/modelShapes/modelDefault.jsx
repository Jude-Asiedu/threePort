import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import EuthModel from './imports/Euth_logo'

const ModelDefault = () => {
  return (
    <>
    <Canvas>
    <Stage environment="city" intensity={5.3}>
        <EuthModel/>
    </Stage>
    <OrbitControls enableZoom={false}  autoRotate autoRotateSpeed={14}/>
    </Canvas>
    </>
  )
}

export default ModelDefault
