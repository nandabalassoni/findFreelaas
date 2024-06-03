import { useState } from "react"
import './index.css'
import { useNavigate } from "react-router-dom";

function Home() {
    const [name, setName] = useState();
    const navigate = useNavigate();

    function handleName() {
        //setName("Maria");
        navigate("/freelas");
    }

    return (
        <div className="homeBody">
            <h1>Find Freelas</h1>
            {/* <span>{name}</span> */}
            <p>O seu portal para encontrar profissionais</p>
            <button type="button" onClick={handleName} className="findButton">
                Encontrar Profissionais
            </button>
        </div>
    )
}

export {Home}