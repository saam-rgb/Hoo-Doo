import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { Features } from "./components/Features";
import { Vid } from "./components/Vid";
import { Nav } from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg">
      <Nav />
      <Header />
      <Slider />
      <Features />
      <Vid />
    </div>
  );
}

export default App;
