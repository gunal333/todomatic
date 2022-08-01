import React,{ useState,useEffect} from 'react';
import './App.css';
//importing components

import Form from './components/form';
import ToDoList from './components/toDoList';

function App() {
  const [inputText,setInputText] = useState(""); 
  const [toDos,setToDos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredToDos,setFilteredToDos] = useState([]);
  
 

  useEffect(()=>{
    getLocalToDos();
  }, []);

  useEffect(()=>{
    filterHandler();
    saveLocalToDos();

  },[toDos,status]);



  const filterHandler=()=>{
    switch(status)
    {
     case 'completed':setFilteredToDos(toDos.filter(toDo => toDo.completed === true))
     break;
     case 'uncompleted':setFilteredToDos(toDos.filter(toDo => toDo.completed === false))
     break;
     default:setFilteredToDos(toDos);
     break; 
    }
  }

  const saveLocalToDos=()=>{
    localStorage.setItem("toDos",JSON.stringify(toDos));
  }

  const getLocalToDos=()=>{
    if(localStorage.getItem("toDos")===null)
    {
      localStorage.setItem("toDos",JSON.stringify([ ]));
    }
    else
    {
      let toDoLocal = JSON.parse(localStorage.getItem("toDos"));
      setToDos(toDoLocal);
    }
  }
 

  return ( 
    <div className="App">
      <header>
      <h1>Gunal's Todo List</h1>
      </header> 
      <Form 
      setStatus={setStatus}
      inputText={inputText}
      setToDos={setToDos} 
      toDos={toDos} 
      setInputText={setInputText}/> 
      <ToDoList
      filteredToDos={filteredToDos}
      setToDos={setToDos} 
      toDos={toDos}/> 
    </div>
  );
}

export default App;
