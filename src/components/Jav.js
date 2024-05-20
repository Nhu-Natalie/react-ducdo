import { useState } from "react";
import javList from "../service/jav";

function Jav() {
  console.log("render begin");
  const [javs, setJavs] = useState(javList);

  const handleDeleteJav = (id) => {
    const stateJavNew = javs.filter((jav) => jav.id !== id);
    setJavs(stateJavNew); // Rerender function Jav
  };
  console.log("render end");
  return (
    <main className="container">
      <h2>Jav list</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {javs.map((jav) => {
            return (
              <tr key={jav.id}>
                <th scope="row">{jav.id}</th>
                <td>{jav.name}</td>
                <td>
                  <img src={jav.image} style={{ width: "100px" }} />
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteJav(jav.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
export default Jav;
