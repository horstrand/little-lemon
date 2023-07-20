import React from 'react'
import assets from '../assets'
import Nav from './Nav'

function Header() {
    console.log(assets)
  return (
    <header>
      <img src={assets.logos.littleLemon} alt="" width="150" heigh="150"/>
      <Nav/>
    </header>
  )
}

export default Header