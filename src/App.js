import "./App.css";

// import { useState } from "react";

import React from "react";
import ReactDOM from "react-dom/client";

let stateValue; // vị trí khai báo global

function useState(initialState) {
  if (stateValue === undefined) {
    stateValue = initialState;
  }

  function setValue(value) {
    stateValue = value;

    // Sau khi state thay đổi render lại
    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        {/* Chạy lại nguyên function App bên dưới */}
        <App />
      </React.StrictMode>
    );
  }

  return [stateValue, setValue];
}

function App() {
  // sử dụng DESTRUCTURING của ARRAY ko dùng của OBJECT để dễ gọi tên
  const [counter, setCounter] = useState(1);

  // console.log("counter: ", counter);
  // console.log("setCounter: ", setCounter);

  const handleIncrement = function () {
    setCounter(counter + 1);
  };

  console.dir(handleIncrement);

  const handleDecrement = function () {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;

// Tạo state để quản lý counter
// Khi state thay đổi, giao diện thay đổi
