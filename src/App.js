import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const formatClass = function () {
    let classCommon = "badge p-3";
    if (counter === 0) {
      classCommon += " text-bg-warning";
    } else {
      classCommon += " text-bg-primary";
    }
    return classCommon;
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <div className={formatClass()}>Primary</div>
    </div>
  );
}

export default App;
