//navlink nos agrega una clase de "activo" para mostrarle al usuario en donde se encuentra (ojo con bootstrap funciona en automatio)
//por lo que deberiams crear la clase "active"
import { NavLink } from "react-router-dom";
//el "link" nos sirve para enviar al usuario a diferenes rutas, sin tener que renderizar todo el proyecto

const  Navbar = () => { 
    return (
        <div className="navbar navbar-dark bg-dark">
            <div className="container">
                {/*el "to" es donde ira la ruta, lo que reemplaza al href pues el "link" ya incluye ciertas funciones */}
                <NavLink className="btn btn-outline-primary" to="/">inicio</NavLink>
                <NavLink className="btn btn-outline-primary" to="/contacto">contacto</NavLink>
                <NavLink className="btn btn-outline-primary" to="/blog">blog</NavLink>

            </div>
        </div>
    )
 }

 export default Navbar;
//el componente link nos sirve para evitar el renderizado completo de la pagina y nos permite navegar entre rutas
 //al dar click en el boton, lo que hara es que carga nuevamente el dom, y con el "/nombre" pintamos en el path la ruta