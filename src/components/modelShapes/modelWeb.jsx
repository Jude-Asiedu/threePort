import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
import GameModel from './imports/Game'

const Desc = styled.div`
  width:250px;
  height:70px;
  padding:20px;
  background-color: white;
  border-radius: 14px;
  position:absolute;
  top:100px;
  right: 100px;
  color:black;
  font-size:12px;
  font-weight: 400;
`

const ModelWeb = () => {
  return (
    <>
   <Canvas>
    <Stage environment="night" intensity={2.3}>
        <GameModel/>
    </Stage>
    <OrbitControls enableZoom={false} />
    </Canvas>
    {/* <Desc>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel eveniet officiis
       vero praesentium aliquid iste iusto iure assumenda doloremque, 
       architecto natus consectetur at, earum eligendi ut dolores perferendis? Non, sint!
    </Desc> */}
    </>
  )
}

export default ModelWeb
