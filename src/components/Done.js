const Done =(props)=> {
  const {onClickBackProgress, doneTodoList} = props;
  return(
    <div className="todo-list-done">
      <h2>完了済み</h2>
      <ul>
        {doneTodoList.map((todo,index) => {
          return(
            <li key={todo}>
              <p>{todo}</p>
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