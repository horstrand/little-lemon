import React from 'react';
import { Link } from 'react-router-dom';

const navbarData= [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'About',
        path: '/about',
    },
    {
        title: 'Menu',
        path: '/menu',
    },
    {
        title: 'Reservation',
        path: '/reservation',
    },
    {
        title: 'Order Online',
        path: '/order',
    },
    {
        title: 'Login',
        path: '/login',
    },
]

function Nav() {
  return (
    <nav>
        <ul>
            {navbarData.map((item) => {
              return (
                <li key={`${item.title}`}>
                <Link to={item.path}>
                    {item.title}
                </Link>
                </li>
              )})}
        </ul>
    </nav>
  )
}

export default Nav