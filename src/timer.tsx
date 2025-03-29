import { useEffect, useRef, useState } from "react";

function App() {
  const [timeInSec, setTimeInSec] = useState<number>(0);
  const [displayTime, setDisplayTime] = useState<string>("0M:0S");
  const [isTimeStopped, setIsTimeStopped] = useState<boolean>(false);
  const timeInterval = useRef<NodeJS.Timeout | null>(null);
  const getTime = (time: number): void => {
    const minutes: number = Math.floor(time / 60);
    const seconds: number = time - minutes * 60;

    console.log(minutes, seconds, "hlooo");
    if (!isTimeStopped) setDisplayTime(`${minutes}M:${seconds}S`);
  };

  useEffect(() => {
    getTime(timeInSec);
  }, [timeInSec]);

  const onStart = () => {
    timeInterval.current = setInterval(() => {
      setTimeInSec((p) => p + 1);
    }, 1000);
  };
  const onStop = () => {
    setIsTimeStopped(!isTimeStopped);
  };
  const onReset = () => {
    clearInterval(timeInterval.current);
    setDisplayTime("0M:0S");
    setTimeInSec(0);
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
        <h1
          style={{
            color: "black",
          }}
        >
          {displayTime}
        </h1>

        <div>
          <button onClick={onStart}>Start</button>
          <button onClick={onStop}>{isTimeStopped ? "Resume" : "Stop"}</button>
          <button onClick={onReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
