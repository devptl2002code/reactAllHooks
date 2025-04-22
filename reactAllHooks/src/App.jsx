import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import FetchDogData from "./components/FetchDogData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter></Counter>

      <FetchDogData></FetchDogData>
    </>
  );
}

export default App;
