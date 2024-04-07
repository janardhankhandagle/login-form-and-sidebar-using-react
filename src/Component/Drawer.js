import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { useState } from 'react'
export default function Drawer() {
  const [show,setShow]=useState(false)
  return (
    <>
      <main className={show ?'space-toggle':null}>

      <header className={`header ${show ? 'space-toggle' : null}`}>
          <div className="header-toggle" onClick={()=>setShow(!show)}>
            <i class="fa-solid fa-bars"></i>
          </div>
        </header>
       <aside className={`sidebar ${show ? 'show' : null}`}>
          <nav className=' nav'>
            <div>
              <Link to='/' className='nav-logo'>
                <i className="fas fa-home-alt nav-logo-icon"></i>
                <span className='nav-logo-name'>Homepage</span>
              </Link>


              <div className="nav-list">
                <Link to='/Dashboard' className='nav-logo' >
                  <i className='fa-solid fa-gauge nav-logo-icon'></i>
                  <span className='nav-logo-name'>Dashboard</span>
                </Link>
                <Link to='/Hotel' className='nav-logo' >
                  <i className='fas fa-hotel  nav-logo-icon'></i>
                  <span className='nav-logo-name'>Hotel</span>
                </Link>
                <Link to='/Gallary' className='nav-logo' >
                  <i className='fas fa-image  nav-logo-icon'></i>
                  <span className='nav-logo-name'>Gallary</span>
                </Link>
                <Link to='/Transaction' className='nav-logo' >
                  <i className='fas fa-dollar-sign  nav-logo-icon'></i>
                  <span className='nav-logo-name'>Transaction</span>
                </Link>
              </div>
            </div>
            <Link to='/Logout'  className='nav-logo' >
        <i className='fas fa-sign-out  nav-logo-icon'></i>
        <span className='nav-logo-name'>Logout</span>
      </Link>
          </nav>

        </aside>
        <h1 className='hp'>content</h1>

      </main>

    </>
  )
}
