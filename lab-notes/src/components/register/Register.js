import logoLN from '../../assets/logoR.png';

export const Register = () => {
    return (
        <div className="Register">
            <img src={logoLN} className="App-logo" alt="logo" />
            <h1>Remember me!
                <br></br>
                ¿Lista para unirte?
            </h1>
            <div className="formRegister">
                <h2>REGÍSTRATE</h2>
                <h3>¡Qué emoción que te unas!</h3>
                <input type="text" placeholder="Nombre/Apodo" required />
                <input type="email" placeholder="Correo electrónico" required />
                <input  type="password" placeholder="Contraseña" required />
                <input type="button" value="Unirme" />
                <h3>o regístrate con</h3> 
                <button type="submit"><img src="google.png" alt="Gmail" /></button>
                <button type="submit"><img src="facebook.png" alt="Facebook" /></button>
            </div>
            <h3>¡Tu app de notas pensada para que no olvides nada!</h3>
    </div>
    );
}

export default Register;