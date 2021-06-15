import React, {useState} from 'react';

const App =()=>{
  const [text, setText] = useState('');
  const [deadLine, setDeadLine] = useState('');
  const [todoList, setTodoList] = useState([""]);
  const [progressTodoList, setProgressTodoList] = useState([""]);
  const onChangeTodoText =(e)=> setText(e.target.value);
  const onChangeDeadLine =(e)=> setDeadLine(e.target.value);
  const onClickAdd =()=> {
    const listContent = `やること:${text}  締め切り日程:${deadLine}`;
    const newTodos = [...todoList, listContent];
    setTodoList(newTodos);
    setText('');
    setDeadLine('');
  }

  const onClickDelete =(index)=> {
    const newTodos = [...todoList];
    newTodos.splice(index, 1);
    setTodoList(newTodos);
  }

  const onClickProgress =(index)=> {
    const newTodos = [...todoList];
    newTodos.splice(index, 1);

    const newProgressTodos = [...progressTodoList, todoList[index]];
    setTodoList(newTodos);
    setProgressTodoList(newProgressTodos);
  }
  return(
    <section className="wrap">
      <div className="input-area">
        <label>TODOを記入して下さい</label>
        <input type="text" value={text} placeholder="TODOを記入" onChange={onChangeTodoText} />
        <label>TODOの締め切りを決めて下さい</label>
        <input type="date" value={deadLine} onChange={onChangeDeadLine} />
        <button onClick={onClickAdd}>Todoタスクを追加</button>
      </div>
      <div className="todo-area">
        <div className="todo-list">
          <h2>作業前</h2>
          <ul>
            {todoList.map((todo,index) => {
              return(
                <li key={todo}>
                  <span>{index}: {todo}</span>
                  <button onClick={()=> onClickProgress(index)}>進行中へ移動</button>
                  <button onClick={()=> onClickDelete(index)}>削除</button>
                </li>
                )
            })}
          </ul>
        </div>
        <div className="todo-list-progress">
          <h2>進行中</h2>
          <ul>
            {progressTodoList.map((todo,index) => {
              return(
                <li key={todo}>
                  <span>{index}: {todo}</span>
                  <button onClick={}>戻す</button>
                  <button onClick={}>完了</button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="todo-list-done">
          <h2>完了済み</h2>
          <ul></ul>
        </div>
      </div>
    </section>
  );
};

export default App;
