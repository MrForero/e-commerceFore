import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../styles/login.css'

function LoginForm(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    const validUsername = "ADMIN FORERO"
    const validPass = "1234"

    const handleSummit = (e) => { 
        e.preventDefault();

        if(username == validUsername && password == validPass){
            navigate("/welcome");
            localStorage.setItem("isAuthenticated", "true");
        } else {
            alert("Usuario o Contraseña Incorrectos")
        }
    }

    return <>
        <div className="login-container">
            <h2>INICIAR SESION</h2>
            <form onSubmit={handleSummit}>
                <div id="userSpace">
                    <label htmlFor="">Usuario:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div id="PassSpace">
                    <label htmlFor="">Contraseña:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button id="login">INGRESAR</button>
            </form>
        </div>
    </>
}

export default LoginForm