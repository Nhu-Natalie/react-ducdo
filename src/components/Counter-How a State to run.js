import { useState, useEffect } from "react";
// Mỗi lần Component render nó tạo ra version riêng bao gồm
// props, state và tất cả những thứ bên trong thân hàm
function Counter() {
  const [counter, setCounter] = useState(1);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    document.title = `You click ${counter}`;
  });
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
export default Counter;

// Lần đầu tiên render, nó sẽ tạo ra 1 version 001
// Bao gồm Props (ko có), State, Event handler
// +++++++++++++++++++++++++++++++++++++++++++++++++
// Chạy hàm Counter()

// function Counter() {
//   const [counter, setCounter] = useState(1);
//   counter = 1

//   Hàm đc tạo sẵn trong bộ nhớ nhưng chưa dùng đến
//   CLOSURE: handleIncrement >> đc gọi là CLOSURE vì
//   - đc bao đóng trong hàm Counter()
//   - sử dụng biến của function bao ngoài là Counter

//   const handleIncrement = () => {
//     counter = 1
//     setCounter(counter + 1);
//   };

//   return (
//     <div>
//       Nhận counter = 1
//       <h1>Counter {counter}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//     </div>
//   );
// }

// =============================================== Version 001 >> button chưa đc click lần nào
//   const handleIncrement = () => {
//     counter = 1
//     setCounter(counter + 1);
//   };

// Khi button Increment đc click >>
// setCounter(counter + 1) chạy và nó thấy counter biến đổi tử 1 sang 2 =>
// Component Counter() re-render

// Nó sẽ tạo ra 1 version 002
// Bao gồm Props (ko có), State, Event handler
// +++++++++++++++++++++++++++++++++++++++++++++++++
// Chạy hàm Counter()

// function Counter() {
//   const [counter, setCounter] = useState(1);
//   counter = 2

//   Hàm đc tạo sẵn trong bộ nhớ nhưng chưa dùng đến
//   CLOSURE: handleIncrement >> đc gọi là CLOSURE vì
//   - đc bao đóng trong hàm Counter()
//   - sử dụng biến của function bao ngoài là Counter

//   const handleIncrement = () => {
//     counter = 2
//     setCounter(counter + 1);
//   };

//   return (
//     <div>
//       Nhận counter = 2
//       <h1>Counter {counter}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//     </div>
//   );
// }

// Khi button Increment đc click >>
// setCounter(counter + 1) chạy và nó thấy counter biến đổi tử 2 sang 3 =>
// Component Counter() re-render
