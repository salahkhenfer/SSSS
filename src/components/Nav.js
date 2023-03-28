import React from 'react'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Nav({navHover,satnavHover}) {
  return (
    <div  className={"songs-nav"} >
      <h1>َأناشيد</h1>
      <button className={navHover? "nav-active ":"navZ"} onClick={() => satnavHover(!navHover) }>
      المكتبة
      <FontAwesomeIcon 
      className='FontAwesomeIcon'
      icon={faMusic}/>
      </button>
    </div>
  )
}

export default Nav
