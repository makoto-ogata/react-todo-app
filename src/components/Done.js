const Done =(props)=> {
  const {onClickBackProgress, doneTodoList} = props;
  return(
    <div className="todo-list-done">
      <h2>完了済み</h2>
      <ul>
        {doneTodoList.map((todo,index) => {
          return(
            <li key={todo}>
              <p>ID: {todo[0]}</p>
              <p>TODO: {todo[1]}</p>
              <p>締め切り: {todo[2]}</p>
              <div className="btn-wrap">
                <button onClick={()=> onClickBackProgress(index)}>進行中に戻す</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Done;