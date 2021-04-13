import React from 'react';
import '../navbar/Navbar.css';
import logo from '../../assets/logoR.png';

export const Navbar =()=>{
    return(
        <div className='navbar'>
            <img src={logo} className="logo" alt="logo" />
            <h3>
                Remember me!
            </h3>
            <p>
                Cerrar sesión
            </p>
        </div>
    )
}
