/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 cashier.gltf --transform 
Files: cashier.gltf [193.72KB] > /Users/mainserver/Desktop/3D Models/shop_casher_payment_machine/cashier-transformed.glb [79.49KB] (59%)
Author: ChillLitoStudio (https://sketchfab.com/ChillLitoStudio)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/shop-casher-payment-machine-8b6d3d3ee76342a4b987e7d27053bea7
Title: Shop Casher, payment machine
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function CashModel(props) {
  const { nodes, materials } = useGLTF('/cashier-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.PaletteMaterial001} position={[-0.043, 0.062, -0.001]} scale={0.149} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.card_Leader} position={[-0.043, 0.062, -0.001]} scale={0.149} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.PaletteMaterial002} position={[-0.043, 0.062, -0.001]} scale={0.149} />
    </group>
  )
}

useGLTF.preload('/cashier-transformed.glb')
