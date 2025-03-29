import { useState } from "react";

function App() {
  const [countStep, setCountStep] = useState<number | null>(null);
  const [count, setCount] = useState<number>(0);

  const onIncrement = () => {
    if (!countStep) return alert("please enter the number");
    setCount((p) => p + countStep);
  };
  const onDecrement = () => {
    if (!countStep) return alert("please enter the number");
    setCount((p) => p - countStep);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          width: "300px",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          type="number"
          onChange={(e) => setCountStep(Number(e.target.value))}
          value={countStep ?? ""}
        />
        <p style={{ color: "black" }}>Step Value: [ {countStep} ] </p>
        <p style={{ color: "black" }}>Current Count: {count} </p>
        <div>
          <button onClick={onDecrement}>Decrement</button>
          <button onClick={onIncrement}>Increment</button>
        </div>
      </div>
    </div>
  );
}

export default App;
