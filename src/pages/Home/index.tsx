//import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FindButton, HomeBody } from "../../components/styles";

function Home() {
  //const [name, setName] = useState();
  const navigate = useNavigate();

  function handleName() {
    //setName("Maria");
    navigate("/freelas");
  }

  return (
    <div className="container">
      <HomeBody>
        <h1 className="text-center">Find Freelas</h1>
        {/* <span>{name}</span> */}
        <p>O seu portal para encontrar profissionais</p>
        <FindButton onClick={handleName} className="findButton">
          Encontrar Profissionais
        </FindButton>
      </HomeBody>
    </div>
  );
}

export { Home };
