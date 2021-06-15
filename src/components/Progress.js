const Progress =(props)=> {
  const {progressTodoList, onClickBackTodos, onClickDone} = props;
  return(
    <div className="todo-list-progress">
      <h2>進行中</h2>
      <ul>
        {progressTodoList.map((todo,index) => {
          return(
            <li key={todo}>
              <span>{todo}</span>
              <button onClick={()=> onClickBackTodos(index)}>戻す</button>
              <button onClick={()=> onClickDone(index)}>完了</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Progress;