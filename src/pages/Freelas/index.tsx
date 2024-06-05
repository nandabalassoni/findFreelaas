//import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { FindButton, HomeBody } from '../../components/styles'

function Freelas() {
    //const [name, setName] = useState();
    const navigate = useNavigate();

    function handleName() {
        //setName("Maria");
        navigate("/");
    }

    return (
        <HomeBody>
            <h1>Find Freelas</h1>
            {/* <span>{name}</span> */}
            <p>TESTE PARA PÁGINA DO PROFISSIONAL</p>
            <FindButton onClick={handleName} className="findButton">
                Encontrar Profissionais
            </FindButton>
        </HomeBody>
    )
}

export {Freelas}