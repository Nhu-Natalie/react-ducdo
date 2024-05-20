import { useState } from "react";
import "./App.css";

function App() {
  const [tags, setStags] = useState(["tag1", "tag2", "tag3"]);
  return (
    <div className="App">
      <h1>Hello World</h1>
      <ul>
        {tags.map((tag) => {
          return <li key={tag}>{tag}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
