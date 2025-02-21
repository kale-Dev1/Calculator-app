function Layout({
  setCurrentInput,
  calculateResult,
  setOperation,
  setResult,
  currentInput,
  result,
}) {
  function handleClick(e) {
    setCurrentInput((prev) => prev + e.target.value);
  }

  const handleOperatorClick = (e) => {
    setResult(parseFloat(currentInput) || result);
    setOperation(e.target.value);
    setCurrentInput("");
  };

  function handleReset() {
    setCurrentInput("");
    setResult(0);
    setOperation(null);
  }
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-4 layout p-5 rounded-lg">
      <button onClick={handleClick} value={7}>
        7
      </button>
      <button onClick={handleClick} value={8}>
        8
      </button>
      <button value={9} onClick={handleClick}>
        9
      </button>
      <button className="reset">DEL</button>
      <button value={4} onClick={handleClick}>
        4
      </button>
      <button value={5} onClick={handleClick}>
        5
      </button>
      <button value={6} onClick={handleClick}>
        6
      </button>
      <button value={"+"} onClick={handleOperatorClick}>
        +
      </button>
      <button value={1} onClick={handleClick}>
        1
      </button>
      <button value={2} onClick={handleClick}>
        2
      </button>
      <button value={3} onClick={handleClick}>
        3
      </button>
      <button value={"-"} onClick={handleOperatorClick}>
        -
      </button>
      <button value={"."} onClick={handleClick}>
        .
      </button>
      <button value={0} onClick={handleClick}>
        0
      </button>
      <button value={"/"} onClick={handleOperatorClick}>
        /
      </button>
      <button value={"*"} onClick={handleOperatorClick}>
        X
      </button>
      <button className="col-span-2 row-start-5 reset" onClick={handleReset}>
        RESET
      </button>
      <button
        className="col-span-2 col-start-3 row-start-5 equal"
        onClick={calculateResult}
      >
        =
      </button>
    </div>
  );
}
export default Layout;
