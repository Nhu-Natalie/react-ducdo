// Truyền data từ cha đến con

// index.html >> chứa index.js >> render content App component đến div #root

function app() {
  let app_variable = "parent to child"; // state
  child(app_variable); // prop
}

function child(parentToChild) {
  console.log(parentToChild);
}

app();
