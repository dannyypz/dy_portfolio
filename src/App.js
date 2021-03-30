import './App.css';
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import About from './Components/About'
import Experience from './Components/Experience'
import Work from './Components/Work'
import Contact from './Components/Contact'
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js'

function App() {
  return (
  <>
    <Particles
      className="particles-canvas"      
      params={{
        particles:{
          number:{
            value:30,
            density: {
              enable: true, 
              value_area: 900
            }
          },
          shape:{
            type:"triangle",
            stroke:{
              width: 6,
              color:"#f9ab00"
            }
          }
        }
      }}
    />
    <Navbar/>
    <Header/>
    <About/>
    <Experience/>
    <Work/>
    <Contact/>
  </>
  );
}

export default App;
