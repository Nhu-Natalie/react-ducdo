import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product";
// // import tất cả
// import * as constantAll from "./constants/constant";

// console.log(constantAll);
// // Lấy biến name
// console.log(constantAll.name);

// Dùng DESTRUCTURING
// import { name, job } from "./constants/constant";
// console.log(name);
// // Lấy biến name
// console.log(job);

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Product />
    </div>
  );
}

export default App;
