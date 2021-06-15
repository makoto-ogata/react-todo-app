const Input =(props)=> {
  const {onChangeTodoText, onChangeDeadLine, onClickAdd, text, deadLine} = props;
  return (
    <div className="input-area">
      <div>
        <label>TODOを記入して下さい</label>
        <input type="text" value={text} placeholder="TODOを記入" onChange={onChangeTodoText} />
      </div>
        <label>TODOの締め切りを決めて下さい</label>
        <input type="date" value={deadLine} onChange={onChangeDeadLine} />
      <div>
      </div>
      <button onClick={onClickAdd}>Todoタスクを追加</button>
    </div>
  )
}

export default Input;