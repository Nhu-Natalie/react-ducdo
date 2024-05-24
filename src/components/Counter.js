import { useState, useEffect } from "react";
// Mỗi lần Component render nó tạo ra version riêng bao gồm
// props, state và tất cả những thứ bên trong thân hàm
function Counter() {
  const [counter, setCounter] = useState(1);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log("useEffect running");
    document.title = `You click ${counter}`;
  });
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      {console.log("component render end")}
    </div>
  );
}
export default Counter;

// Component đc render là useEffect đc chạy

// 1. UseEffect chạy vào thời điểm nào của 1 version Component đc tạo ra
// Chạy sau khi mỗi lần Component render (sau lệnh return () của Counter())

// 2. Tại sao useEffect lại cần chạy sau mỗi lần Component render
// 2.1 Khi cần thao tác với phần tử do Component render tạo ra
//     (Đảm bảo DOM đã đc mounted)
// 2.2 Bản thân useEffect chạy bất đồng bộ (kiểu setTimeout) >> tham khảo thêm ví dụ file note setTimout hoạt động
//     js là ngôn ngữ SINGLE SCRIPT - bất đồng bộ >> chỉ chạy 1 script 1 lần function này xong mới đến function kia
//    (useEffect thường dùng để call APIs >> mất thời gian tải lên xuống)

// 3. useEffect cũng thuộc về 1 version render nên nó cũng nhớ state, props theo version của nó

// Version 001
// useEffect(() => {
//     counter = 1
//     document.title = `You click ${counter}`;
//   });

// Version 002
// useEffect(() => {
//     counter = 2
//     document.title = `You click ${counter}`;
//   });

// Version 003
// useEffect(() => {
//     counter = 3
//     document.title = `You click ${counter}`;
//   });

// 4. lần đầu Component đc render gọi là mounted
//    Những lần sau gọi là re-render - updated
//    Nếu truyền chỉ 1 tham số callback thì component render -> useEffect sẽ đc chạy sau đó
