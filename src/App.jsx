import { useState } from "react";

import Header from "./components/Header";
import Layout from "./components/Layout";
import InputScreen from "./components/InputScreen";

function App() {
  const [currentInput, setCurrentInput] = useState("");
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState(0);
  const [theme, setTheme] = useState("purple");

  if (theme === "dark") {
    document.body.style.background = "hsl(222, 26%, 31%)";
  } else if (theme === "light") {
    document.body.style.background = "hsl(0, 0%, 90%)";
  } else {
    document.body.style.background = "hsl(268, 75%, 9%)";
  }
  const switchTheme = () => {
    const newTheme =
      theme == "light" ? "dark" : theme == "dark" ? "purple" : "light";
    setTheme(newTheme);
  };

  // document.body.style.background = "red";

  const calculateResult = () => {
    if (operation && currentInput) {
      const secondOperand = parseFloat(currentInput);
      let calcResult;

      switch (operation) {
        case "+":
          calcResult = result + secondOperand;
          break;
        case "-":
          calcResult = result - secondOperand;
          break;
        case "*":
          calcResult = result * secondOperand;
          break;
        case "/":
          calcResult = result / secondOperand;
          break;
        default:
          return;
      }

      setResult(calcResult);
      setCurrentInput(calcResult.toString());
      setOperation(null);
    }
  };

  return (
    <div className="grid" data-theme={theme}>
      <Header switchTheme={switchTheme} theme={theme} />
      <InputScreen currentInput={currentInput} />
      <Layout
        setCurrentInput={setCurrentInput}
        setOperation={setOperation}
        calculateResult={calculateResult}
        setResult={setResult}
        currentInput={currentInput}
        result={result}
      />
    </div>
  );
}

export default App;
