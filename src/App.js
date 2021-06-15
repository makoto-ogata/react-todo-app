import React, {useState} from 'react';
import Input from "./components/Input"

const App =()=>{
  const [text, setText] = useState('');
  const [deadLine, setDeadLine] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [progressTodoList, setProgressTodoList] = useState([]);
  const [doneTodoList, setDoneTodoList] = useState([]);
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
    const newSetTodos = [...todoList];
    newSetTodos.splice(index, 1);

    const newProgressTodos = [...progressTodoList, todoList[index]];
    setTodoList(newSetTodos);
    setProgressTodoList(newProgressTodos);
  }

  const onClickDone =(index)=> {
    const deleteProgressTodos = [...progressTodoList];
    deleteProgressTodos.splice(index, 1);

    const newDoneTodos = [...doneTodoList, progressTodoList[index]];
    setDoneTodoList(newDoneTodos);
    setProgressTodoList(deleteProgressTodos);
  }

  const onClickBackTodos =(index)=> {
    const backProgressTodos = [...progressTodoList];
    backProgressTodos.splice(index, 1);

    const backTodos = [...todoList, progressTodoList[index]];
    setTodoList(backTodos);
    setProgressTodoList(backProgressTodos);
  }

  const onClickBackProgress =(index)=> {
    const deleteDoneTodos = [...doneTodoList];
    deleteDoneTodos.splice(index, 1);

    const backProgressTodos = [...progressTodoList, doneTodoList[index]];
    setProgressTodoList(backProgressTodos);
    setDoneTodoList(deleteDoneTodos);
  }

  return(
    <section className="wrap">
      <Input onChangeTodoText={onChangeTodoText} onClickAdd={onClickAdd} onChangeDeadLine={onChangeDeadLine} text={text} deadLine={deadLine}/>
      <div className="todo-area">
        <div className="todo-list">
          <h2>作業前</h2>
          <ul>
            {todoList.map((todo,index) => {
              return(
                <li key={todo}>
                  <span>{todo}</span>
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
                  <span>{todo}</span>
                  <button onClick={()=> onClickBackTodos(index)}>戻す</button>
                  <button onClick={()=> onClickDone(index)}>完了</button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="todo-list-done">
          <h2>完了済み</h2>
          <ul>
            {doneTodoList.map((todo,index) => {
              return(
                <li key={todo}>
                  <span>{todo}</span>
                  <button onClick={()=> onClickBackProgress(index)}>進行中に戻す</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default App;
