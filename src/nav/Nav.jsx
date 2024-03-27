import React, { useState } from 'react'
import logo from "../nav/logo.jpg"

const Nav = () => {

    const [btn_nav, setbtn_nav] = useState(false);

    const handleClick = ()=>{
        setbtn_nav(!btn_nav);
    }

  return (
    <nav>
        <div className="first-nav">
            <div className="first-nav-logo">
                <img src={logo} alt="" />
                <p>Los mejores cursos de Inglés</p>
                <div className='triangle'></div>
            </div>
            <div className="nav-contacto">

                <div className="first-nav-contacto">
                    <div className="icon-phone">
                        <i class="fa-solid fa-phone"></i>
                    </div>
                    <div className="contacto">
                        <p>hydeenglishschool@gmail.com</p>
                        <p>+5491166659115</p>
                    </div>
                </div>

                <div className="first-nav-contacto location">
                    <div className="icon-phone">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="contacto">
                        <p>Godoy Cruz 2463,La Tablada, Bs As</p>
                    </div>
                </div>
                
            </div>
        </div>

        <div className="second-nav">
            <div className="second-nav-section"><p><a href="#Section_1">Cursos</a></p></div>
            <div className="second-nav-section"><p><a href="#Section_2">Staff</a></p></div>
            <div className="second-nav-section"><p><a href="#Section_3">Certificados</a></p></div>
            <div className="second-nav-section"><p><a href="#Section_4">Ubicación</a></p></div>
        </div>

        <div className="second-nav-burguer">
            
            <div className="menu_burguer" onClick={handleClick}>
                {!btn_nav ? 
                    <div className='burguer-div'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                 : <p className='x-menu'>X</p>}
            </div>
                
            <div className={`menu-burguer-slide ${btn_nav ? 'active' : ''}`}>
                <div className="second-nav-section"><a href="#Section_1"><p>Cursos</p></a></div>
                <div className="second-nav-section"><a href="#Section_2"><p>Staff</p></a></div>
                <div className="second-nav-section"><a href="#Section_3"><p>Certificados</p></a></div>
                <div className="second-nav-section"><a href="#Section_4"><p>Ubicación</p></a></div>
            </div>

        </div>

    </nav>
  )
}

export default Nav
