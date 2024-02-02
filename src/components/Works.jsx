import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import ModelWeb from './modelShapes/modelWeb'
import ModelDevpt from './modelShapes/modelDevpt'
import ModelTroubleShooting from './modelShapes/modelTroubleShooting'
import ModelDefault from './modelShapes/modelDefault'
import ModelPayments from './modelShapes/modelPayments'


const data = [
  "Web Design",
  "Development",
  "Problem Solving",
  "Troubleshooting",
  "Payments"
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align:center;
  display:flex;
  justify-content:center;
  position: relative;
`

const Container = styled.div`
  width:1000px;
  display:flex;
  justify-content:space-between;
  @media only screen and (max-width:768px) {
   width:100%;
   flex-direction:column;
  }

`
const Left = styled.div`
  flex:2;
  display:flex;
  align-items:center;

  @media only screen and (max-width:768px) {
   padding:15px;
   justify-content:center;
  }
`
const Right = styled.div`
 flex :1;

`

const List = styled.ul`
 list-style:none;
 display:flex;
 flex-direction:column;
 gap:25px;
`

const ListItem = styled.li`
font-size:70px;
cursor: pointer;
font-weight:bold;
color:transparent;
-webkit-text-stroke:1px #3adba8;
position:relative;

@media only screen and (max-width:768px) {
   font-size:30px;
   color:white;
  -webkit-text-stroke:0px;
  }

&:after{
  content:"${(props=> props.text)}";
  position: absolute;
  top:0;
  left: 0;
  width:0px;
  color: #3adba8;
  cursor: pointer;
  overflow:hidden;
  white-space:nowrap;
}

  &:hover{
    &:after{
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to{
          width:100%;
        } 
      }
    }
  }
`

const Works = () => {

  const [work,setWork] = useState("Web Design");

  

  return (
    <Section >
         <Container> 
          <Left>
            <List> 
                  {data.map((items) => (  <ListItem key={items} text={items} onClick={()=>setWork(items)} > {items}</ListItem>))}
            </List>
          </Left>
          <Right>
            {
              work  === "Web Design" ? (<ModelWeb/>) :
              work  === "Development" ? (<ModelDevpt/>):
              work  === "Payments" ? (<ModelPayments/>):
              work  === "Troubleshooting" ?  (<ModelTroubleShooting/>) : (<ModelDefault/>)
            }
          </Right>
     </Container>
   </Section>
  )
}

export default Works