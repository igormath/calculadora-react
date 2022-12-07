import { useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { Container, Row } from "./styles";

const App = () => {

  const [currentNumber, setCurrentNumber] = useState("");
  const [operationNumber, setOperationNumber] = useState([]);

  const handleButtonNumber = (e) => {

    if (e === "AC") {
      setCurrentNumber("");
    } else if (e === "+") {
      setOperationNumber([currentNumber, "+"]);
      setCurrentNumber("");
    } else if (e === "-") {
      setOperationNumber([currentNumber, "-"]);
      setCurrentNumber("");
    } else if (e === "/") {
      setOperationNumber([currentNumber, "/"]);
      setCurrentNumber("");
    } else if (e === "*") {
      setOperationNumber([currentNumber, "*"]);
      setCurrentNumber("");
    } else if (e === "=") {
      let result = 0;
      if (operationNumber[1] === "+") {
        result = (Number(operationNumber[0]) + Number(currentNumber));
        setCurrentNumber(result);
      } else if (operationNumber[1] === "-") {
        result = (Number(operationNumber[0]) - Number(currentNumber));
        setCurrentNumber(result);
      } else if (operationNumber[1] === "*") {
        result = (Number(operationNumber[0]) * Number(currentNumber));
        setCurrentNumber(result);
      } else if (operationNumber[1] === "/") {
        result = (Number(operationNumber[0]) / Number(currentNumber));
        setCurrentNumber(result);
      }
    } else {
      setCurrentNumber(prev => prev + e);
    }
  }

  return (
    <>
      <Container>
        <Input value={currentNumber} />
        <Row>
          <Button title="AC" size="75%" onClick={() => handleButtonNumber("AC")} />
          <Button title="/" color="#454545" onClick={() => handleButtonNumber("/")} />
        </Row>
        <Row>
          <Button title="7" onClick={() => handleButtonNumber("7")} />
          <Button title="8" onClick={() => handleButtonNumber("8")} />
          <Button title="9" onClick={() => handleButtonNumber("9")} />
          <Button title="*" color="#454545" onClick={() => handleButtonNumber("*")} />
        </Row>
        <Row>
          <Button title="4" onClick={() => handleButtonNumber("4")} />
          <Button title="5" onClick={() => handleButtonNumber("5")} />
          <Button title="6" onClick={() => handleButtonNumber("6")} />
          <Button title="-" color="#454545" onClick={() => handleButtonNumber("-")} />
        </Row>
        <Row>
          <Button title="1" onClick={() => handleButtonNumber("1")} />
          <Button title="2" onClick={() => handleButtonNumber("2")} />
          <Button title="3" onClick={() => handleButtonNumber("3")} />
          <Button title="+" color="#454545" onClick={() => handleButtonNumber("+")} />
        </Row>
        <Row>
          <Button title="0" size="50%" onClick={() => handleButtonNumber("0")} />
          <Button title="." />
          <Button title="=" color="#454545" onClick={() => handleButtonNumber("=")} />
        </Row>
      </Container>
    </>
  );
};

export default App;
