/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 euth_logo.gltf --transform 
Files: euth_logo.gltf [3.25MB] > /Users/mainserver/Desktop/3D Models/ethereum_3d_logo/euth_logo-transformed.glb [442.13KB] (86%)
Author: Akimovcg (https://sketchfab.com/akimovcg)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ethereum-3d-logo-de0c154b6f1c46639864a01360dd6aa0
Title: Ethereum 3D logo
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function EuthModel(props) {
  const { nodes, materials } = useGLTF('/euth_logo-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials['default']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/euth_logo-transformed.glb')
