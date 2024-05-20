// Truyền data từ Child to Parent

function app() {
  const handleDelete = function (dataFromChild) {
    console.log(dataFromChild);
  };
  child(handleDelete);
}

function child(callback) {
  console.log(callback);
  const childData = "child data";
  callback(childData);
}

app();
