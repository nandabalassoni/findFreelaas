import styled from "styled-components";

const HomeBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #836fff;
  height: 100vh;
  background-color: #e6e6fa;

  @media (max-width: 768px) {
    height: 184vh;
  }
`;

const FreelaBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #836fff;
  height: 120vh;
  background-color: #e6e6fa;

  @media (max-width: 768px) {
    height: 174vh;
  }
`;

const Image = styled.img`
  border-radius: 20px;
  padding: 10px;
`;

const FindButton = styled.button`
  background-color: #836fff;
  color: #fffafa;
  border: none;
  padding: 10px 20px;
  margin-top: 40px;
  border-radius: 5px;
  cursor: pointer;

  &:active {
    background-color: #e6e6fa;
    color: #836fff;
  }
`;

const Button = styled.button`
  background-color: #836fff;
  color: #fffafa;
  border: none;
  padding: 10px 20px;
  margin-top: 30px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 5rem;

  &:active {
    background-color: #e6e6fa;
    color: #836fff;
  }
`;

const Title = styled.h1`
  margin-top: 20px;
`;

const Card = styled.div`
  margin-top: 50px;
  display: flex;
  margin-left: 20px;
  border-radius: 20px !important;

  &:hover {
    transform: scale(1.05); // Ajuste este valor conforme necessário
    transition: transform 0.3s ease-in-out;
  }
`;

export { HomeBody, FindButton, Card, Title, Button, Image, FreelaBody };
