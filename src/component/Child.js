function Child(props) {
  // use destructuring
  const { parentToChild, name } = props;
  console.log(parentToChild);
  console.log(name);

  //   console.log(props);
  //   props: object
  return <div>Child</div>;
}

// function Child({ parentToChild, name }) {
//   console.log(parentToChild);
//   //   props: object
//   return <div>Child</div>;
// }

export default Child;
