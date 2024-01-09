import React,{ useRef, useState } from 'react'
import styled from 'styled-components'
import Maps from './Map'
import emailjs from '@emailjs/browser'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align:center;
`

const Container  = styled.div`
  width:100%;
  display:flex;
  justify-content: space-between;
  gap:30px;
  height:100%;
`
const Left = styled.div`
  flex: 1;
  display:flex;
  /* background-color:#121212; */
  align-items:center;
  justify-content:flex-end;
`
const Right = styled.div`
  flex:1;
`

const Title = styled.h1`
  font-weight:200;
`

const Form = styled.form`
width:500px;
display:flex;
gap:20px;
flex-direction:column;

`

const Input = styled.input`
  padding: 20px;
  background-color: #f4fcfc;
  border:none;
  border-radius: 7px;

`

const TextArea = styled.textarea`
  padding: 20px;
  border:none;
  border-radius: 7px;
  resize:none;
`

const Button = styled.button`
   color:white;
   background-color : #3adba8;
   font-weight: 200;
   /* width:140px;  */
   font-size:18px;
   padding:10px;
   border-radius: 7px;
   cursor:ponter; 
`

const Alert = styled.div`
  padding: 30px;
  background-color: #1a9b5062;
  color: white;
`

const Svg = styled.svg`
 width: 1.45em;
 padding-right:7px;
 transform-origin: center;
 animation: rotate4 2s linear infinite;

 @keyframes rotate4 {
 100% {
  transform: rotate(360deg);
 }
}`

const Circle = styled.circle`
 fill: none;
 stroke: hsl(0, 0%, 100%);
 stroke-width: 2;
 stroke-dasharray: 1, 200;
 stroke-dashoffset: 0;
 stroke-linecap: round;
 animation: dash4 0.8 ease-in-out infinite;

 @keyframes dash4 {
 0% {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
 }

 50% {
  stroke-dasharray: 90, 200;
  stroke-dashoffset: -35px;
 }

 100% {
  stroke-dashoffset: -125px;
 }
}
`

const Contact = () => {
  const form = useRef();
  const [success,setSucces] = useState(null);
  const handleSubmit = e=>{
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_MAIL_SERVICE_ID,process.env.REACT_APP_MAIL_TEMPLATE_ID, form.current,process.env.REACT_APP_MAIL_PUBLIC_KEY)
    .then((result) => { setSucces(true); console.log(result.text);
      setTimeout(() => {
        form.current.reset();
      setSucces(false);
    }, 5000);
    }, (error) => { setSucces(false); console.log(error.false);
    })
  }

  return (
    <Section >       
      <Container>
        <Left>
          <Form ref={form}  onSubmit={handleSubmit}>
            <Title> Hit me up 👋 </Title>
            <Input placeholder='Name'  name='from_name'/> 
            <Input placeholder='Email' name='email_address'  /> 
            <TextArea placeholder='Leave a message' name='message' rows={10}/>
            <Button type='submit' disabled={success}>
              {success ? (<Svg viewBox="5 5 10 10"><Circle r="4" cy="10" cx="10"></Circle></Svg>): ``}
              SEND 
             </Button>
              {success ? (
                <Alert>  {success && "Message sent.😊 Will reach out soon!!"}  </Alert>
                ): ``}
            </Form>
        </Left>
        <Right>
          <Maps/>
        </Right>
      </Container>      
    </Section>
  )
}

export default Contact