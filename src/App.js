import './App.css';
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import About from './Components/About'
import Experience from './Components/Experience'
import Work from './Components/Work'
import Contact from './Components/Contact'
import "bootstrap/dist/css/bootstrap.min.css";

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
