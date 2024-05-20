import { useState } from "react";
import javList from "../service/jav";

console.log(javList);

function Jav() {
  const [javs, setJav] = useState(javList);

  console.log(javs);

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
          {javs.map((jav, index) => {
            return (
              <tr key={index}>
                <th scope="row">{jav.id}</th>
                <td>{jav.name}</td>
                <td>
                  <img src={jav.image} style={{ width: "100px" }} />
                </td>
                <td>
                  <button className="btn btn-danger btn-sm">Delete</button>
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
