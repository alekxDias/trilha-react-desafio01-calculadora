import Input from "./components/Input";
import Button from "./components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");
  const [isResult, setIsResult] = useState(false);

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
    setIsResult(false);
  };

  const handleAddNumber = (num) => {
    if (isResult) {
      setCurrentNumber(num);
      setFirstNumber("0");
      setOperation("");
      setIsResult(false);
    } else {
      setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
    }
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0" || isResult) {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
      setIsResult(false);
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber(String(sum));
      setOperation("");
      setIsResult(true);
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === "0" || isResult) {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
      setIsResult(false);
    } else {
      const difference = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(difference));
      setFirstNumber(String(difference));
      setOperation("");
      setIsResult(true);
    }
  };

  const handleMultiplyNumbers = () => {
    if (firstNumber === "0" || isResult) {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
      setIsResult(false);
    } else {
      const product = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(product));
      setFirstNumber(String(product));
      setOperation("");
      setIsResult(true);
    }
  };

  const handleDivideNumbers = () => {
    if (firstNumber === "0" || isResult) {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
      setIsResult(false);
    } else {
      if (currentNumber !== "0") {
        const division = Number(firstNumber) / Number(currentNumber);
        setCurrentNumber(String(division));
        setFirstNumber(String(division));
        setOperation("");
        setIsResult(true);
      } else {
        alert("Divisão por zero não é permitida.");
        handleOnClear();
      }
    }
  };

  const handleSquare = () => {
    const square = Math.pow(Number(currentNumber), 2);
    setCurrentNumber(String(square));
    setFirstNumber(String(square));
    setIsResult(true);
  };

  const handleSquareRoot = () => {
    const squareRoot = Math.sqrt(Number(currentNumber));
    setCurrentNumber(String(squareRoot));
    setFirstNumber(String(squareRoot));
    setIsResult(true);
  };

  const handleDelete = () => {
    setCurrentNumber((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "*":
          handleMultiplyNumbers();
          break;
        case "/":
          handleDivideNumbers();
          break;
        default:
          break;
      }
      setIsResult(true);
    }
  };

  const handleAddDecimal = () => {
    if (!currentNumber.includes(".")) {
      setCurrentNumber((prev) => `${prev}.`);
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={handleMultiplyNumbers} />
          <Button label="/" onClick={handleDivideNumbers} />
          <Button label="x²" onClick={handleSquare} />
          <Button label="√" onClick={handleSquareRoot} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="c" onClick={handleOnClear} />
        </Row>
        <Row>
          <Button label="." onClick={handleAddDecimal} />
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label={<FontAwesomeIcon icon={faDeleteLeft} />} onClick={handleDelete}
          />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
