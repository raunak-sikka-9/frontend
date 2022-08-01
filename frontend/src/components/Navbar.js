import React from 'react'
import { NavLink } from 'react-router-dom'
import { Switch } from '@mui/material';

const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
   
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
     
      <div class="container-fluid">
       
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
    
       
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
         
          {/* <a class="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="15"
              alt="MDB Logo"
              loading="lazy"
            />
          </a> */}
         
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/signuptesting">Sign Up</NavLink>
            </li>
            <li class="nav-item">
<<<<<<< HEAD
              <NavLink className="nav-link" to="/login">Login</NavLink>
=======
              <NavLink className="nav-link" to="/signup">Signup</NavLink>
            </li>
            <li class="nav-item">
              <Switch checked={darkTheme} onChange={ (e,v) => { setDarkTheme(v)}}/>
>>>>>>> 7fb67b8b061c11d00c47284759b4d6533c9a2880
            </li>
            
            {/* <li class="nav-item">
              <NavLink className="nav-link" to="/">Gallery</NavLink>
            </li> */}
          </ul>
         
        </div>
          
      </div>
     
    </nav>
   
  )
}

export default Navbar