import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Works from './components/Works';
import styled from  'styled-components';

const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior:smooth;
    overflow-y:auto;
    scrollbar-width: none;
    color:white;
    background-image: url('./img/bg.jpg');
    &::-webkit-scrollbar{
      display:none;
    }
`

function App() {
  return (
  <Container>
        <Hero/>
        <AboutUs/>  
        <Works/>
        <Contact/>     
  </Container>
  );
}

export default App;
