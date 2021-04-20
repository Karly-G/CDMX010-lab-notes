import logo from '../../assets/logoR.png';
import './Navbar.css';

const Navbar =()=>{
    return(
        <div className='navbar'>
            <a href="/categories"><img src={logo} className="logo" alt="logo" /></a>
            <h3>Remember me!</h3>
            <a href="/home"><p>Cerrar sesión</p></a>
        </div>
    )
}

export default Navbar;
