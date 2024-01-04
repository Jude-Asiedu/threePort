import React from 'react'
import styled from 'styled-components'


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
`

const Container = styled.div`
  width:1000px;
  display:flex;
  justify-content:space-between;

`
const Left = styled.div`
  flex:1;
  display:flex;
  align-items:center;
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
  return (
    <Section >
         <Container> 
          <Left>
            <List> 
                  {data.map((items) => (  <ListItem key={items} text={items} > {items}</ListItem>))}
            </List>
          </Left>
          <Right></Right>
     </Container>
   </Section>
  )
}

export default Works