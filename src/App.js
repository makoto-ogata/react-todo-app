import React, {useState} from 'react';
import Input from "./components/Input"
import Todo from "./components/Todo"
import Progress from './components/Progress';
import Done from './components/Done';

const App =()=>{
  const [text, setText] = useState('');
  const [deadLine, setDeadLine] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [progressTodoList, setProgressTodoList] = useState([]);
  const [doneTodoList, setDoneTodoList] = useState([]);
  const onChangeTodoText =(e)=> setText(e.target.value);
  const onChangeDeadLine =(e)=> setDeadLine(e.target.value);
  const onClickAdd =()=> {
    const id = Math.floor(Math.random() * 1000);
    const listContent = [id, text, deadLine];
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
      <div className="all-todo-area">
        <Todo todoList={todoList} onClickProgress={onClickProgress} onClickDelete={onClickDelete} />
        <Progress progressTodoList={progressTodoList} onClickBackTodos={onClickBackTodos} onClickDone={onClickDone} />
        <Done doneTodoList={doneTodoList} onClickBackProgress={onClickBackProgress}/>
      </div>
    </section>
  );
};

export default App;
