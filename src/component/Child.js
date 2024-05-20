function Child(props) {
  //   const { onDelete } = props;
  const onDelete = props.onDelete;
  //   console.log(onDelete);

  const handleDelete = () => {
    onDelete(1);
  };

  return (
    <div>
      <button onClick={handleDelete} className="btn btn-danger btn-sm">
        Delete
      </button>
    </div>
  );
}

export default Child;
