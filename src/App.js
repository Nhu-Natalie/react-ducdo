import "./App.css";
import Counter from "./component/Counter";

function App() {
  const urlImage = "https://cdn.urldecoder.org/assets/images/url-fb-en.png";

  return (
    <div className="App">
      <img className="image_feature" src={urlImage} />
      <h1>Hello World</h1>
      <Counter />
    </div>
  );
}

export default App;
