import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [post, setPost] = useState({});
  useEffect(() => {
    console.log("useEffect running");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);

  // Dependency []: chỉ chạy duy nhất 1 lần Component đc mounted

  return (
    <div className="App">
      <div>
        <h1>{post.id}</h1>
        <p>{post.title}</p>
      </div>
    </div>
  );
}

export default App;

// 1. Tại sao lại bị hiện tượng call apis liên tục >> vòng lặp vô tận

// Lần đầu render App version 001
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Component amounted >> post chưa có data >> data rỗng {} nên ko show gì
// return (
//   <div className="App">
//     <div>
//       <h1>{post.id}</h1>
//       <p>{post.title}</p>
//     </div>
//   </div>
// );

// useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => setPost(json)); // state thay đổi {} => {id:1, ....} >> Component re-render
// });

// Lần re-render 1 App version 002
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Component re-render >> post đã có data >> show data
// return (
//   <div className="App">
//     <div>
//       <h1>{post.id}</h1>
//       <p>{post.title}</p>
//     </div>
//   </div>
// );

// useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => setPost(json));
//     STATE thay đổi do json là 2 OBJECTs khác nhau mỗi lần call APIs
//     nhưng chúng có giá trị giống nhau {id:1, ....} => {id:1, ....} >>
//     Component lại re-render
//     >> Vòng lặp vô tận xảy ra
// });
