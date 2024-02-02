import React from 'react'
import styled from 'styled-components'
import Navbar from './layout/Navbar'
import Sphere from './modelShapes/Sphere'
import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align:center; 
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
 
  @media only screen and (max-width:768px) {
   height:200vh; 
  }
`

const Container = styled.div`
  height: 100%;
  scroll-snap-type: center;
  width:1000px;
  display:flex;
  justify-content:space-between;

  @media only screen and (max-width:768px) {
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width: 100%;
}
`


const Left = styled.div`
  flex:2;
  display:flex;
  flex-direction: column;
  justify-content: center;
  gap:20px;

  @media only screen and (max-width:768px) {
  flex:1; 
  align-items: center;
}
`
const Right = styled.div`
  flex:3;
  position:relative;
  @media only screen and (max-width:768px) {
    width:100%;
    flex:1; 
  }
`

const Img = styled.img`
  width:700px;
  height:500px;
  object-fit:contain;
  position:absolute;
  margin:auto;
  top:0;
  bottom:0;
  left:0;
  right:0;
  animation: animate 1.8s infinite ease alternate;

  @media only screen and (max-width:768px) {
    width:350px;
    height:350px;
    }

  @keyframes animate{
      to{
        transform:translateY(20px)
      }
    }
  
`

const Title = styled.h1`
  font-size:70px;

  @media only screen and (max-width:768px) {
    text-align:center;
}
`

const Subtitle = styled.h2`
  font-size:22px;

  @media only screen and (max-width:768px) {
    text-align:center;
    }
`
const Button = styled.button`
   color:white;
   background-color : #3adba8;
   font-weight: 500;
   width:140px; 
   font-size:18px;
   padding:10px;
   border-radius: 7px;
   cursor:ponter;  
`

const Para = styled.p`
  color:'light-grey';
  font-size:32px;
  background-color : '#1d483b';
  @media only screen and (max-width:768px) {
    padding:2px;
    text-align:center;
    } 

`

const Hero = () => {

  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>  Design, Innovate, Build, Repeat. </Title>
            <div>
            <Subtitle>  What I Do ? </Subtitle>
            <Para> Specially focus in web and mobile technnologies</Para>
            </div>
          <Button> Learn More </Button>
        </Left>
        <Right>
          <Canvas>
          <OrbitControls enableZoom={false} autoRotate/>
          <ambientLight intensity={2.2} />
          <directionalLight position={[3,2,1]} />
            <Sphere/>
          </Canvas>
          <Img src="./img/buggy.png"/>
        </Right>
      </Container> 
    </Section>
  )
}

export default Hero