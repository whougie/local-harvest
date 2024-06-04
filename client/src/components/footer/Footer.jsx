import React from 'react'
import './Footer.css';


export default function Footer(){

  return(

    <>
     <footer className='footer'>
      <a href="https://github.com/JoelhansenMN" target='_blank'><img src="/projectImages/github.png" alt="github logo" className='logos'/></a>
      <a href="https://www.instagram.com/jth22/" target='_blank'><img src="/projectImages/insta.png" alt="insta logo" className='logos' /></a>
      <a href="https://www.linkedin.com/in/joel-hansen-msw-053b638a/" target='_blank'><img src="/projectImages/linkedin.png" alt="linkedin logo" className='logos'/></a>
     </footer>
    </>
  )
}