const Progress =(props)=> {
  const {progressTodoList, onClickBackTodos, onClickDone} = props;
  return(
    <div className="todo-list-progress">
      <h2>進行中</h2>
      <ul>
        {progressTodoList.map((todo,index) => {
          return(
            <li key={todo}>
              <p>ID: {todo[0]}</p>
              <p>TODO: {todo[1]}</p>
              <p>締め切り: {todo[2]}</p>
              <div className="btn-wrap">
                <button onClick={()=> onClickBackTodos(index)}>戻す</button>
                <button onClick={()=> onClickDone(index)}>完了</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Progress;