import React from 'react'
import Nav from './nav/Nav'
import Main from './main/Main'
import Section_1 from './Section-1/Section_1'
import Footer from './Footer/Footer'
import img1 from "../src/main/staff.jpg"
import img2 from "../src/main/online.jpg"
import img3 from "../src/main/diploma.jpg"
import img4 from "../src/main/ubicacion.jpg"

const App = () => {
  return (
    <>
      <Nav/>
      <Main/>
      {/* <div className="sections"> */}
        <Section_1 number={'1'} img={img2} title={"Nuestros Cursos"}  texto={"¿Quieres sumergirte en el fascinante mundo del aprendizaje desde la comodidad de tu hogar? ¡Entonces nuestros cursos regulares en modalidad online son perfectos para vos!"}/>
        <Section_1 img={img1}  number={'2'} title={"Nuestro Staff"}  texto={"👩🏻‍🏫 Nuestro increíble equipo de profesionales, está listo para guiarte en cada paso de tu aprendizaje."}/>
        <Section_1 number={'3'} img={img3} title={"Tus Certificados"}  texto={"Con certificación nacional e internacional que ofrecemos, ¡podrás destacar en cualquier parte del mundo ya que aseguraremos la calidad con los estándares internacionales!"}/>
        <Section_1 number={'4'} img={img4}  title={"Ubicación"} texto={"Seguridad y Garantía de resultados en nuestro instituto de inglés. Podés venir a conocernos."}/>
      {/* </div> */}
      {/* <div className="footer"> */}
        <Footer/>
      {/* </div> */}
    </>
  )
}

export default App
