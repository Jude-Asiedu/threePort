import React from 'react'
import styled from 'styled-components'
import Cube from './modelShapes/Cube'
import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align:center; 
  display:flex;
  justify-content:center;
`

const Container = styled.div`
  width:1000px;
  display:flex;
  justify-content:space-between;
`


const Left = styled.div`
  flex:1 ;

`
const Right = styled.div`
flex:1;
position:relative;
display:flex;
flex-direction: column;
justify-content: center;
gap:20px;
`


const Title = styled.h1`
  font-size:70px;
`

const Button = styled.button`
   color:white;
   background-color : #3adba8;
   font-weight: 500;
   width:180px; 
   font-size:18px;
   padding:10px;
   border-radius: 7px;
   cursor:ponter;  
`

const Para = styled.p`
  color:'light-grey';
  font-size:32px;
  background-color : '#1d483b';

`

const AboutUs = () => {

  return (
   <Section>
      <Container>
        <Left>
        <Canvas camera={{fov:25,position:[5,5,5]}}>
          <OrbitControls enableZoom={false} autoRotate/>
          <ambientLight intensity={3} />
          <directionalLight position={[7,4,1]} />
           <Cube/> 
         </Canvas>
        </Left>
        <Right>
        <Title>  Think outside the box space. </Title>
            <div>
             <h2 className='mr-2'>  Who we are ? </h2>
            <Para> Young and creative  group of multi-talented indiviudals with passion for excellence</Para>
            </div>
          <Button> See out Works </Button>
        </Right>
      </Container>
   </Section>
  )
}

export default AboutUs