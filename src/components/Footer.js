import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';


function Footer() {
  return (
    <div className='footer'>
    <p>&copy; 2023 Salah khenfer. All rights reserved .</p>
    <a href="https://www.instagram.com/bnlili_off/"> <FaInstagram className='inst' /></a> 
    <a href="https://github.com/salahkhenfer"> <FaGithub className='git' /></a> 
    <a href="https://www.linkedin.com/in/salah-eddine-khenfer-738b8a241/"> <FaLinkedin className='lin' /></a> 
    
    </div>
  )
}

export default Footer
