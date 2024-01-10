/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 biohard.gltf --transform 
Files: biohard.gltf [223.69KB] > /Users/mainserver/Desktop/3D Models/biohazard_logo/biohard-transformed.glb [84.17KB] (62%)
Author: UltraKill (https://sketchfab.com/ultrakill)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/biohazard-logo-f1a5edcb0f334b7ab11038936b549fc4
Title: Biohazard logo
*/

import React, { useRef } from 'react'
import { PerspectiveCamera, RenderTexture, useGLTF } from '@react-three/drei'

export default function BioModel(props) {
  const { nodes, materials } = useGLTF('/biohard-transformed.glb')
  return (
    <group {...props}  dispose={null} >
      
      <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} rotation={[-Math.PI / 2, 0, 1]}>
      <meshStandardMaterial >
      <RenderTexture attach="map">
        <PerspectiveCamera  makeDefault position={[0,0,5]}/>
        <color attach="background" args={["#ef0b0b"]}/>
        </RenderTexture>
        </meshStandardMaterial>

        
        </mesh>
    </group>
  )
}

useGLTF.preload('/biohard-transformed.glb')
