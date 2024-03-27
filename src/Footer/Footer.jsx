import React from 'react'
import img1 from "../nav/logo.jpg"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="social-medias">
        <div className='line'></div>
        <a href="https://www.instagram.com/hydeenglish"><i class="fa-brands fa-square-instagram"></i></a>
        <div className='line'></div>
        </div>

        <div className="info">
            <img src={img1} alt=""/>
            <p>©2024 HYDE ENGLISH SCHOOL | All Rights Reserved</p>
            <p className='diseño-footer'><a href="https://francoalberti1997.vercel.app/">Designed by Alberti Code</a></p>
        </div>
    </div>
  )
}

export default Footer
