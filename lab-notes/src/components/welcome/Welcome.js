import logoLN from '../../assets/logoR.png';
import '../welcome/Welcome.css';

export const Welcome = () => {
    return (
        <div className="welcome">
            <h1 className="title">Bienvenida a <br></br> Remember me!</h1>
            <img src={logoLN} className="App-logo" alt="logo" />
            <div className="formWelcome">
                <h2>INICIAR SESIÓN</h2>
                <h3>¡Un gusto tenerte de vuelta!</h3>
                <input type="email" placeholder="Correo electrónico" required />
                <input  type="password" placeholder="Contraseña" required />
                <input type="button" value="Entrar" />
                <h3>¿Aún no tienes cuenta? 
                    <br></br>
                    Regístrate</h3>
                <h3>o inicia sesión con</h3> 
                <button type="submit"><img src="google.png" alt="Gmail" /></button>
                <button type="submit"><img src="facebook.png" alt="Facebook" /></button>
            </div>
            <h3>¡Tu app de notas pensada para que no olvides nada!</h3>
        </div>
    );
}

export default Welcome;
