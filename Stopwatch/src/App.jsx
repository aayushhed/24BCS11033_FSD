import { useState } from "react";
import "./App.css";

function App() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [millisecond, setMillisecond] = useState(0);

  const [timer, setTimer] = useState(null);

  function start() {
    if (timer === null) {
      const id = setInterval(() => {
        setMillisecond((prev) => {
          if (prev < 99) {
            return prev + 1;
          } else {
            setSecond((s) => {
              if (s < 59) {
                return s + 1;
              } else {
                setMinute((m) => {
                  if (m < 59) {
                    return m + 1;
                  } else {
                    setHour((h) => h + 1);
                    return 0;
                  }
                });
                return 0;
              }
            });
            return 0;
          }
        });
      }, 10);

      setTimer(id);
    }
  }

  function reset() {
    clearInterval(timer);
    setTimer(null);

    setHour(0);
    setMinute(0);
    setSecond(0);
    setMillisecond(0);
  }

  return (
    <div className="container">
      <h1>Stopwatch</h1>

      <h2>
        {String(hour).padStart(2, "0")} :
        {String(minute).padStart(2, "0")} :
        {String(second).padStart(2, "0")} :
        {String(millisecond).padStart(2, "0")}
      </h2>

      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;