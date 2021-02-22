import './App.css';
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Experience from './Components/Experience'
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
    <Experience/>
  </>
  );
}

export default App;
