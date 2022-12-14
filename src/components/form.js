import React from "react";

const form =({setInputText,toDos,setToDos,inputText,setStatus}) => {
    const statusHandler=(e)=>{
        setStatus(e.target.value)
    };
    const inputTextHandler=(e)=>
    {
        setInputText(e.target.value)
    };
    const submitToDoHandler=(e)=>{
        e.preventDefault();
        setToDos([
            ...toDos,{text:inputText,completed:false,id:Math.random()*1000}
        ]);
        setInputText("");
    };
    return(
        <form>
      <input value={inputText}  onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitToDoHandler} disabled = {!inputText ? true: false} className= "todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
        </form>
    );
};  

export default form;