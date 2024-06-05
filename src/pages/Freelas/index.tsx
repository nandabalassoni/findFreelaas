import { useState } from "react"
//import './index.css'
import { useNavigate } from "react-router-dom";

function Freelas() {
    const [name, setName] = useState();
    const navigate = useNavigate();

    function handleName() {
        //setName("Maria");
        navigate("/freelas"); // Adicione esta linha
    }

    return (
        <div className="homeBody">
            <h1>Find Freelas</h1>
            {/* <span>{name}</span> */}
            <p>TESTE PARA PÁGINA DO PROFISSIONAL</p>
            <button type="button" onClick={handleName} className="findButton">
                Encontrar Profissionais
            </button>
        </div>
    )
}

export {Freelas}