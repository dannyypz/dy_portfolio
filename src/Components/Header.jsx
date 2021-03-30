import React from 'react'
import Typed from 'react-typed'

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>FULL-STACK WEB DEVELOPER</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Development", "Front-End","Back-End"]}
                    typeSpeed={50}
                    backSpeed={70}
                    loop
                />
                <a href="#" className="btn-main-offer">contact me</a>
            </div>            
        </div>
    )
}

export default Header
