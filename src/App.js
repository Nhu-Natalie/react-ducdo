import "./App.css";
import Child from "./component/Child";

function App() {
  const handleDelete = (id) => {
    console.log("id", id);
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Child onDelete={handleDelete} />
    </div>
  );
}

export default App;
// # Component CHA
// 1. Định nghĩa 1 thuộc tính bằng 1 function callback
// <Child onDelete={handleDelete} />
// const handleDelete = () => {}

// # Component CON
// Nhận vào giá trị function callback đó
// function Child(props) { const onDelete = props.onDelete }
// Call function vừa nhận từ CHA
// const handleDelete = () => { onDelete(1)}
// const handleDelete = (id) => {console.log("id", id)}
// id chính là 1 được truyền từ CON lên CHA
