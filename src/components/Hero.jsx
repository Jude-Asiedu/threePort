import React from 'react'
import styled from 'styled-components'
import Navbar from './layout/Navbar'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align:center; 
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: center;
  width:1000px;
  display:flex;
  justify-content:space-between;
`


const Left = styled.div`
  flex:2;
  display:flex;
  flex-direction: column;
  justify-content: center;
  gap:20px;
`
const Right = styled.div`
flex:3;
position:relative;
`

const Img = styled.img`
  width:800px;
  height:600px;
  object-fit:contain;
  position:absolute;
  margin:auto;
  top:0;
  bottom:0;
  left:0;
  right:0;
  animation: animate 2s infinite ease alternate;
   @keyframes animate{
    to{
      transform:translateY(25px)
    }

   }
  
`

const Title = styled.h1`
  font-size:70px;
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

`

const Hero = () => {

  return (
   <Section>
     <Navbar/>
      <Container>
        <Left>
          <Title>  Design, Innovate, Build, Repeat. </Title>
            <div>
             <h2 className='mr-2'>  What I Do ? </h2>
            <Para> Specially focus in web and mobile technnologies</Para>
            </div>
          <Button> Learn More </Button>
        </Left>
        <Right>
          {/* 3D Models bug*/}
          <Img src="./img/buggy.png"/>
        </Right>
      </Container>
   </Section>
  //   <div className="heroSection" >
  //     <Navbar/>
  //    <div className="container">
  //         <div className='headLeft' >
  //           <h1> Design, Innovate, Build, Repeat</h1>
  //           <div className='subImageString'>
  //             <h2 className='mr-2'>  Who am  I ? </h2>
  //           </div>
  //           {/* <p>Specially focus in web and mobile technologies </p> */}
  //           <button onClick={()=>headOver()}>Read  More </button>
  //         </div>
  //         <div className='headRight' >
  //           <img src={bug} alt="text"   className='hugeImage' width={270}/>
  //         </div>
  //    </div>
  //  </div>

  )
}

export default Hero