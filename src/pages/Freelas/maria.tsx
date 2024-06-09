import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import perfilMaria from "../../assets/perfilMaria.jpeg";
import { Card, Button, Title, Image, FreelaBody } from "../../components/styles";

function Maria() {
  //const [name, setName] = useState();
  const navigate = useNavigate();

  function handleName() {
    //setName("Maria");
    navigate("/freelas");
  }

  return (
    <div className="container">
      <FreelaBody>
        <Title>Find Freelas</Title>
        <h2> Informações do Profissional</h2>
        <div className="row" style={{ marginLeft: "30px" }}>
          <div className="col-sm-12">
            <Card>
              <div
                className="card"
                style={{ width: "22rem", borderRadius: "20px" }}>
                <Image src={perfilMaria} alt="Imagem de capa do card" />

                <div className="card-body">
                  <h5 className="card-title">Maria Fernanda Balassoni</h5>
                  <ul className="card-text">
                    <li>Desenvolvedora Android Kotlin;</li>
                    <li>Formada em Sistemas para Internet Pela FATEC;</li>
                    <li>MBA em Mobile Development pela FIAP;</li>
                  </ul>
                  <br />
                  Informações para Contato:
                  <br />
                  <b>Email:</b> rm348434@fiap.com.br
                </div>
              </div>
            </Card>

            <Button onClick={handleName} className="findButton">
              Voltar para Profissionais
            </Button>
          </div>
        </div>
      </FreelaBody>
    </div>
  );
}

export { Maria };
