import "./App.css";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { Features } from "./components/Features";

import { Nav } from "./components/Nav";
import { More } from "./components/More";
import { About } from "./components/About";

function App() {
  return (
    <div className="bg">
      <Nav />
      <Header />
      <Slider />
      <Features />
      <About />
      <More />
    </div>
  );
}

export default App;
