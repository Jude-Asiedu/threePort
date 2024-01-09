import { MeshDistortMaterial,Sphere } from '@react-three/drei'
import React from 'react'

const Spheres = () => {
  return (
        <Sphere args={[1,100,250]} scale={2.1}>
        <MeshDistortMaterial color="#1e4c5f" attach="material" distort={0.4} speed={3} />
        </Sphere>
  )
}

export default Spheres
