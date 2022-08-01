import React from "react";
import ToDo from "./toDo";

const toDoList = ({toDos,setToDos,filteredToDos})=>{
    return (
      <div className="todo-container">
        <ul className="todo-list">
             {filteredToDos.map((toDo) =>(
                <ToDo 
                toDos={toDos}
                toDo={toDo}
                setToDos={setToDos} 
                key={toDo.id}/>
             ))}
        </ul>
      </div>
    );
};  

export default toDoList;