import { useEffect, useState } from "react";
import "./App.css";

let i = 0;

function App() {
  i++;
  console.log(
    "%crender start version 00" + i,
    "background:#222; color:#bada55"
  );

  const id = 1; // id đc sử dụng trong useEffect nên nó cần đc update cũng như theo dõi trong callback function

  const [post, setPost] = useState({});
  console.log(`id version 00${i}`, id);
  console.log("post", post);
  useEffect(() => {
    // Do callback có sử dụng id bên ngoài nên phải khai báo theo dõi id trong mảng tham số thứ 2 của useEffect
    console.log("useEffect running version 00" + i);
    fetch("https://jsonplaceholder.typicode.com/todos/" + id)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, [id]);

  // Dependency []: chỉ chạy duy nhất 1 lần Component đc mounted
  // []: Ko cần theo dõi hay update gì cả

  // [id]: so sánh id giữa các version nếu khác useEffect sẽ đc chạy

  return (
    <div className="App">
      <div>
        <h1>{post.id}</h1>
        <p>{post.title}</p>
      </div>
      {console.log("render end version 00" + i)}
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

/// useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => setPost(json));
//     STATE thay đổi do json là 2 OBJECTs khác nhau mỗi lần call APIs
//     nhưng chúng có giá trị giống nhau {id:1, ....} => {id:1, ....} >>
//     Component lại re-render
//     >> Vòng lặp vô tận xảy ra
// });
