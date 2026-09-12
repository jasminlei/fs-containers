const Todo = ({ todo, deleteTodo, completeTodo }) => {
  const onClickDelete = () => {
    deleteTodo(todo)
  }

  const onClickComplete = () => {
    completeTodo(todo)
  }

  if (todo.done) {
    return (
      <>
        <span>{todo.text}</span>
        <span>
          This todo is done
          <button onClick={onClickDelete}> Delete </button>
        </span>
      </>
    )
  }

  return (
    <>
      <span>{todo.text}</span>
      <span>
        This todo is not done
        <button onClick={onClickDelete}> Delete </button>
        <button onClick={onClickComplete}> Set as done </button>
      </span>
    </>
  )
}

export default Todo
