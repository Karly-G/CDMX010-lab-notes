import {Navbar} from '../navbar/Navbar'
import Notas from '../../assets/Notas.png';
import Recordatorios from '../../assets/Recordatorios.png';
import Contactos from '../../assets/Contactos.png';
import Secret from '../../assets/Secret.png';
import Pendientes from '../../assets/Pendientes.png';
import Tareas from '../../assets/Tareas.png';

export const Categories = () => {
    return (
        <div>
            <Navbar />
            <div className="Categories">
                <h1>¡Hola Karly!</h1>
                <img src={Notas} className="notas" alt="Notas" />
                <h3>Notas</h3>
                <img src={Recordatorios} className="recordatorios" alt="Recordatorios" />
                <h3>Recordatorios</h3>
                <img src={Contactos} className="contactos" alt="Contactos" />
                <h3>Contáctos</h3>
                <img src={Secret} className="secret" alt="Secretos" />
                <h3>Tus Secretos</h3>
                <img src={Pendientes} className="pendientes" alt="Pendientes" />
                <h3>Pendientes</h3>
                <img src={Tareas} className="tareas" alt="Tareas" />
                <h3>Tareas</h3>
            </div>
    </div>
    );
}

export default Categories;