import React, {useState} from 'react';
import {auth} from '../../firebase'
import logoLN from '../../assets/logoR.png';
import  '../register/Register.css';
import { useHistory } from 'react-router-dom';



export const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navHistory = useHistory();

    const signUp = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
            navHistory.push('/categories')
        })
    }

    return (
        <div className="register">
            <div className="home">
                <h1 className="title">Remember me!
                    <br></br>
                    ¿Lista para unirte?
                </h1>
                <img src={logoLN} className="App-logo" alt="logo" />
                <h3>¡Tu app de notas pensada para que no olvides nada!</h3>
            </div>
            <form className="formRegister" onSubmit={signUp}>
                <h2>REGÍSTRATE</h2>
                <h3>¡Qué emoción que te unas!</h3>
                <input type="text" placeholder="Nombre/Apodo"/>
                <input type="email" placeholder="Correo electrónico" onChange={(e)=> {setEmail(e.target.value)}}/>
                <input  type="password" placeholder="Contraseña" onChange={(e)=> {setPassword(e.target.value)}}/>
                <button className="join">Unirme</button>
                <h3 className="textLogin">o regístrate con</h3> 
                <button className="gmail"></button>
                <button className="facebook"></button>
            </form>
    </div>
    );
}

export default Register;