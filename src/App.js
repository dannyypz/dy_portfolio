import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
