import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import perfilMaria from '../../assets/perfilMaria.jpeg'
import perfilVinicius from '../../assets/perfilVinicius.jpeg'
import perfilBruno from '../../assets/perfilBruno.jpeg'
import { Card, FindButton, HomeBody, Title } from "../../components/styles";

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
        <Title>Find Freelas</Title>
        {/* <span>{name}</span> */}
        <p>O seu portal para encontrar profissionais</p>
        <FindButton onClick={handleName} className="findButton">
          Voltar para Home
        </FindButton>

        <div className="row" style={{marginLeft: "30px"}}>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <Card>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  //src=".../100px180/"
                  src= { perfilMaria }
                  alt="Imagem de capa do card"
                />
                <div className="card-body">
                  <h5 className="card-title">Maria Fernanda Balassoni</h5>
                  <p className="card-text">
                    Desenvolvedora Android Kotlin
                    Principais Projetos: App MyCloudApp
                  </p>
                  <a href="#" className="btn btn-primary">
                    Saiba mais sobre o profissional
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <Card>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  // src=".../100px180/"
                  src={perfilVinicius}
                  alt="Imagem de capa do card"
                />
                <div className="card-body">
                  <h5 className="card-title">Vinícius Luiz Taparosky</h5>
                  <p className="card-text">
                    Desenvolvedor Kotlin e Swift
                    Principais Projetos: App Decathlon
                  </p>
                  <a href="#" className="btn btn-primary">
                  Saiba mais sobre o profissional
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4" style={{marginBottom: "20px"}}>
            <Card>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  //src=".../100px180/"
                  src={perfilBruno}
                  alt="Imagem de capa do card"
                />
                <div className="card-body">
                  <h5 className="card-title">Bruno Santos Silva</h5>
                  <p className="card-text">
                    Desenvolvedor Swift
                    Principais Projetos: App ComprasUSA
                  </p>
                  <a href="#" className="btn btn-primary">
                  Saiba mais sobre o profissional
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </HomeBody>
    </div>
  );
}

export { Freelas };
