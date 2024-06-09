import styled from 'styled-components';

const HomeBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #836FFF;
  height: 100vh;
  background-color: #E6E6FA;

  @media (max-width: 768px) {
    height: 174vh;
  }
`;

const FindButton = styled.button`
  background-color: #836FFF;
  color: #FFFAFA;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;

  &:active {
    background-color: #E6E6FA;
    color: #836FFF;
  }
`;

const Title = styled.h1`
  margin-top: 20px;
`;

const Card = styled.div `
  margin-top: 50px;
  display: flex;
  margin-left: 20px;
`;

export { HomeBody, FindButton, Card, Title };