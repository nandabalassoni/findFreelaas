import styled from 'styled-components';

const HomeBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #836FFF;
  background-color: #FFFAFA;
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

export { HomeBody, FindButton };