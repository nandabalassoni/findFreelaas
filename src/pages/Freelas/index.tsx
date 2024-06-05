//import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FindButton, HomeBody } from "../../components/styles";

function Freelas() {
  //const [name, setName] = useState();
  const navigate = useNavigate();

  function handleName() {
    //setName("Maria");
    navigate("/");
  }

  return (
    <div className="container">
      <HomeBody>
        <h1 className="text-center">Find Freelas</h1>
        {/* <span>{name}</span> */}
        <p>ENCONTRAR PROFISSIONAIS</p>
        <FindButton onClick={handleName} className="findButton">
          Encontrar Profissionais
        </FindButton>

        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src=".../100px180/"
            alt="Imagem de capa do card"
          />
          <div className="card-body">
            <h5 className="card-title">Título do card</h5>
            <p className="card-text">
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card.
            </p>
            <a href="#" className="btn btn-primary">
              Visitar
            </a>
          </div>
        </div>
      </HomeBody>
    </div>
  );
}

export { Freelas };
