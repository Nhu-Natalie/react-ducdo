import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter(counter + 1); //LÀM FUNCTION APP CHẠY LẠI
  };

  console.dir(handleIncrement);

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;

//RUN APP
//SAU MỖI LẦN CHẠY NÓ LUÔN NHỚ ĐC GIÁ TRỊ EVENT HANDLER TRƯỚC ĐÓ NHỜ CLOSURE
//===================
//Chay lan 1
//function App đc chạy >> object [counter, setCounter] đc tạo trong RAM
//Khi nhấn button increament >> function handleIncrement mới đc chạy
//object [count, setCounter] đc gán lại

// MỖI LẦN FUNCTION APP CHẠY NÓ SẼ TẠO RA 1 INSTANCE CLOSURE KHÁC NHAU HOÀN TOÀN

// CLOSURE: function bên trong có thể lưu giữ giá trị của function bên ngoài

//Muốn FUNCTION handleIncrement là 1 CLOSURE phải thoả mãn 2 điều kiện
//===================================================================
// 1. handleIncrement: phải là hàm đc bao đóng trong function
// (handleIncrement đã đc bao đóng trong function App)

// 2. Nó phải sử dụng biến của function bên ngoài
// ()
