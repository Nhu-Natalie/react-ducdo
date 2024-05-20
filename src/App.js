import "./App.css";
import { useState } from "react";

function App() {
  const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);

  const renderTags = function () {
    const listTags = tags.map(function (tag) {
      return <li>{tag}</li>;
    });

    return listTags;
  };

  return (
    <div className="App">
      {/* <ul>{renderTags()}</ul> */}
      <ul>
        {tags.map(function (tag) {
          return <li key={tag}>{tag}</li>;
        })}
      </ul>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
