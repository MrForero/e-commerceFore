import { FaRegCircleUser } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Header(){

    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate()

    //React hooks
    const toggleMenu = () => setShowMenu(prev => !prev);
    const closeSession = (e) =>{
        localStorage.setItem("isAuthenticated", "true");
        navigate("/")
    }

    return <div className="header-container">
                <h1>E-COMMERCE FORE</h1>
                <h3>Quienes Somos</h3>
                <h3>Contactenos</h3>
                <div className="profile-container">
                    <button id="profile-button">
                        <FaRegCircleUser size={45} onClick={toggleMenu}/>
                    </button>
                    <div className={`dropdown-menu ${showMenu ? 'show' : ''}`}>
                        <ul>
                            <li>Perfil</li>
                            <li>Carrito</li>
                            <li onClick={closeSession}>Cerrar sesión</li>
                        </ul>
                    </div>
                </div>
                
        </div>
}

