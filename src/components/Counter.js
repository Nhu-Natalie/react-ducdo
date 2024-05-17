import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const formatZero = function () {
    if (counter == 0) {
      return <span>Zero</span>;
    } else if (counter == 1) {
      return <span>One</span>;
    } else {
      return <span>{counter}</span>;
    }
  };

  return <h2>Counter {formatZero()}</h2>;
}

// function Counter() {
//   const [counter, setCounter] = useState(0);

//   const formatZero = function () {
//     return counter == 0 ? "Zero" : counter;
//   };

//   // return <h2>Counter {counter == 0 ? "Zero" : counter}</h2>;
//   return <h2>Counter {formatZero()}</h2>;
// }

export default Counter;
