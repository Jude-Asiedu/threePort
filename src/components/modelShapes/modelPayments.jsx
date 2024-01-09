import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import CashModel from './imports/Cashier'

const ModelPayments = () => {
  return (
    <>
    <Canvas>
    <Stage environment="city" intensity={3.3}>
        <CashModel/>
    </Stage>
    <OrbitControls enableZoom={false} />
    </Canvas>
    </>
  )
}

export default ModelPayments
