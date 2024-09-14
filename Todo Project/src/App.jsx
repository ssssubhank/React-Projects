import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FetchTodoData from "./FetchData/fetchdata";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Todo App Using Material UI</h1>
      <FetchTodoData></FetchTodoData>
    </>
  );
}

export default App;
