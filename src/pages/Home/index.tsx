import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { FindButton, HomeBody } from '../../components/styles'

function Home() {
    const [name, setName] = useState();
    const navigate = useNavigate();

    function handleName() {
        //setName("Maria");
        navigate("/freelas");
    }

    return (
        <HomeBody>
            <h1>Find Freelas</h1>
            {/* <span>{name}</span> */}
            <p>O seu portal para encontrar profissionais</p>
            <FindButton type="button" onClick={handleName} className="findButton">
                Encontrar Profissionais
            </FindButton>
        </HomeBody>
    )
}

export {Home}