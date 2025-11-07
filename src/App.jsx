import './App.css'
import styled from 'styled-components';

const Alert = styled.div`
    background-color: ${(props) => props.bg || "lightgray"};
    color: ${(props) => (props.bg === "red" ? "white" : "black")};
    padding: 10px;
    border-radius: 5px;
`;
function App() {

  return (
    <>
        <Alert>Neutral</Alert>
        <Alert bg="red">Kolor czerwony</Alert>
        <Alert bg="green">Kolor zielony</Alert>
    </>
  )
}

export default App
