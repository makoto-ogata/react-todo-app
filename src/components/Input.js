const Input =(props)=> {
  const {onChangeTodoText, onChangeDeadLine, onClickAdd, text, deadLine} = props;
  return (
    <div className="input-area">
      <label>TODOを記入して下さい</label>
      <input type="text" value={text} placeholder="TODOを記入" onChange={onChangeTodoText} />
      <label>TODOの締め切りを決めて下さい</label>
      <input type="date" value={deadLine} onChange={onChangeDeadLine} />
      <button onClick={onClickAdd}>Todoタスクを追加</button>
    </div>
  )
}

export default Input;