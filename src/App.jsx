import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChocolateCake from "./components/ChocolateCake";
import { Canvas } from "@react-three/fiber";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>text here</h1>
      </div>
      <div
        style={{
          width: "100vw",
          height: "60%",
          backgroundColor: "red",
        }}
      >
        <h1>line 2</h1>
        <Canvas>
          <ChocolateCake />
        </Canvas>
      </div>
    </>
  );
}

export default App;
