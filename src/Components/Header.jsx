import React from 'react'
import {Link} from 'react-scroll'
import Particles from 'react-particles-js'
import Typed from 'react-typed'

const Header = () => {
    return (
        <div className="header-wraper" id="home">
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
            <div className="main-info">
                <h1>FULL-STACK WEB DEVELOPER</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Development", "Front-End","Back-End"]}
                    typeSpeed={50}
                    backSpeed={70}
                    loop
                />
                <Link href="#" className="btn-main-offer"
                to="contact"
                    activeClass="active"
                    spy={true} 
                    smooth={true}>contact me</Link>
            </div>            
        </div>
    )
}

export default Header
