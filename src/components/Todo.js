const Todo =(props)=> {
  const {onClickDelete, todoList, onClickProgress} = props;
  return(
    <div className="todo-list">
      <h2>作業前</h2>
      <ul>
        {todoList.map((todo,index) => {
          return(
            <li key={todo}>
              <p>ID: {todo[0]}</p>
              <p>TODO: {todo[1]}</p>
              <p>締め切り: {todo[2]}</p>
              <div className="btn-wrap">
                <button onClick={()=> onClickProgress(index)}>進行中へ移動</button>
                <button onClick={()=> onClickDelete(index)}>削除</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Todo;