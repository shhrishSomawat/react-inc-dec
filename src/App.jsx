import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  function incVal() {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert("cant increase above 20")
    }
  }

  const decVal = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("cant go in negative")
      }
  };

  return (
    <>
      <h2>Shrish Somawat | FrontEnd Developer</h2>
      <h3>counter: {counter}</h3>
      <button onClick={incVal}>Increment Value</button>
      <br />
      <br />
      <button onClick={decVal}>Decrement Value</button>
      <p> Enjoy your increment decrement Project.</p>
    </>
  );
}

export default App;
