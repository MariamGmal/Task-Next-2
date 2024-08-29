
import Link from 'next/link'
import React from 'react'
import { menuItems } from './minuItems'
import NavLink from './NavLink'
import "./header.css"

const Header = () => {


  return (
    <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <h2 className='ms-2 m-2'>Next One</h2>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse contain" id="navbarNav">
               

                  {menuItems.map((item) => (
                     <NavLink href={item.href} lable={item.lable} />
                  ))}
                 
                  {/* <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Disabled</a>
                  </li> */}
           
              </div>
            </nav>

           
      
    </div>
  )
}

export default Header
