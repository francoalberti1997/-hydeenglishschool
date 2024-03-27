import React from 'react'
import img from "../main/fondo-rojo.webp"
import fondo from "../main/fondo_people.png"
import fondo_2 from "../main/fondo_2.jpg"


const Main = () => {
  return (
    <div className='main'>
        <div className="main-img"><img src={fondo} alt="" /></div>
        <div className="main-text">
            <h2>
            Potenciá tu futuro con el Inglés <br /><br /><i class="fa-brands fa-space-awesome"></i>            </h2>
            {/* <h3>
                Potenciá tu futuro <i class="fa-brands fa-space-awesome"></i>
            </h3> */}
        </div>
        <div className="img-fondo">
          <img src={fondo_2}alt="" />
        </div>
    </div>
  )
}

export default Main
