import React from 'react';
import assets from '../assets';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <img onClick={()=> navigate('/') } src={assets.logos.littleLemon} alt="" width="150" heigh="150"/>
      <Nav/>
    </header>
  )
}

export default Header