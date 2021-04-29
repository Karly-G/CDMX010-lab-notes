import React, {useState} from 'react';
import {auth} from '../../firebase';
import {useHistory} from 'react-router-dom';
import logoLN from '../../assets/logoR.png';
import '../home/Home.css';

export const Home = () => {

    const [emailUser, setEmailUser] =useState('');
    const [passwordUser, setPasswordUser] =useState('');

    const handleLoginEmail = (e) => setEmailUser(e.target.value);
    const handleLoginPassword = (e) => setPasswordUser(e.target.value);

    const history = useHistory();

    const inputsEmpty = () => {
        setEmailUser('');
        setPasswordUser('');
    }

    const logUserIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(emailUser, passwordUser)
            .then(result =>{
            // alert(emailUser + ' signed in successfully', inputsEmpty());
            history.push('/categories')
            })
            .catch(function(error){
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/weak-password'){
                alert('The password is too weak.');
            }else{
                alert(errorMessage);
            }
            inputsEmpty();
            console.log(error);
            })
        }

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
                <input type="email" placeholder="Correo electrónico" onChange={handleLoginEmail}/>
                <input  type="password" placeholder="Contraseña" onChange={handleLoginPassword}/> <br/>
                <button className="enter" onClick={logUserIn}>Entrar</button>
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
