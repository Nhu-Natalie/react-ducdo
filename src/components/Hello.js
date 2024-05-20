function Hello() {
  //Cach 1
  //   const hello = function (name) {
  //     const handle = function () {
  //       console.log("name: ", name);
  //     };
  //     return handle;
  //   };
  //   return (
  //     <div>
  //       <button onClick={hello("react")}>React</button>
  //       <button onClick={hello("redux")}>Reduct</button>
  //       <button onClick={hello("context")}>Context</button>
  //     </div>
  //   );

  //Cach 1 viet gon lai
  //   const hello = (name) =>
  //     function () {
  //       console.log("name: ", name);
  //     };

  const hello = (name) => () => console.log("name: ", name);

  return (
    <div>
      <button onClick={hello("react")}>React</button>
      <button onClick={hello("redux")}>Reduct</button>
      <button onClick={hello("context")}>Context</button>
    </div>
  );

  //Cach 2
  //   const handleHello = function (name) {
  //     console.log(name);
  //   };

  //   return (
  //     <div>
  //       <button
  //         onClick={function () {
  //           handleHello("react");
  //         }}
  //       >
  //         React
  //       </button>

  //       <button
  //         onClick={function () {
  //           handleHello("redux");
  //         }}
  //       >
  //         Reduct
  //       </button>
  //       <button
  //         onClick={function () {
  //           handleHello("context");
  //         }}
  //       >
  //         Context
  //       </button>
  //     </div>
  //   );
}

export default Hello;

// onClick nhận vào 1 FUNCTION hay FUNCTION Reference
