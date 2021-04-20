// import React, {useState} from 'react';
import logoLN from '../../assets/logoR.png';
import '../home/Home.css';

export const Home = () => {
    return (
        <div className="welcome" >
            <div className="home">
                <h1 className="title">Bienvenida a <br></br> Remember me!</h1>
                <img src={logoLN} className="App-logo" alt="logo" />
                <h3>¡Tu app de notas pensada <br></br> para que no olvides nada!</h3>
            </div>
            <form className="formLogin">
                <h2>INICIA SESIÓN</h2>
                <h3>¡Un gusto tenerte de vuelta!</h3>
                <input type="email" placeholder="Correo electrónico"/>
                <input  type="password" placeholder="Contraseña" /> <br/>
                <button className="enter">Entrar</button>
                <h3 className="textForm">¿Aún no tienes cuenta?</h3>
                <a href="/register"><li>Regístrate</li></a>
                <h3 className="textLogin">o inicia sesión con</h3>
                <button className="gmail"></button>
                <button className="facebook"></button>
            </form>
        </div>
    );
}

export default Home;
