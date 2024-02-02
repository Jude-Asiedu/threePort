import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
 display:flex;
 justify-content:center ;

 @media only screen and (max-width:768px) {
  
  width:100% 

 }
`

const Container = styled.div`
 display:flex;
 width:1000px;
 justify-content:space-between;
 align-items:center;
 padding:10px 0px;

 @media only screen and (max-width:768px) {
  width:100% 
}
`
const Links = styled.div`
  display:flex;
  align-items:center;
  gap: 50px;
`
const List = styled.ul`
 display:flex;
 gap:35px;
 list-style:none;

 @media only screen and (max-width:768px) {
display:none 
}
`
const Icons = styled.div`
  display:flex;
  align-items:center;
  gap: 50px;
`

const Button = styled.button`
width:100px;
padding:10px;
background-color: #16926b;
color:white;
border: none;
border-radius: 5px;
cursor:pointer;
`

const Logo = styled.img`
  height:50px;
  cursor:pointer;
`
const ListItem = styled.li`
 cursor:pointer;
 display:flex;
 gap:20px;
 justify-content:center;
`

const Navbar = () => {
  return (
    <Section>
          <Container> 
            <Links>
              <Logo src="./img/Logos.png" alt="stuff"  height="50px" width="70px" />
              <List>
                <ListItem> Home</ListItem>
                <ListItem> Studio</ListItem>
                <ListItem> About</ListItem>
                <ListItem> Contact </ListItem>
              </List>
            </Links>
              <Icons> 
                <Button>Hire Now </Button>
              </Icons>
          </Container>              
    </Section>
  )
}

export default Navbar