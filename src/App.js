import './App.css';
import Headers from "./My_Components/Header";
import  {AddTodo} from './My_Components/AddTodo';
import Footer from "./My_Components/Footer";
import Todos from "./My_Components/Todos";
import React,  { useState } from 'react';


function App() {
  const onDelete = (todo)=>{
    console.log("I am ondelete of todo", todo);

    setTodos(todos.filter((e) => {
        return e!==todo;
    }));
  }

  const addTodo = (title, desc) =>{
    console.log("I am adding this todo", title, desc);
    let sno;
    if(todos.length==0){
      sno = 0;
    }
    else{
       sno = todos[todos.length-1].sno + 1;
    }
  
    const myTodo ={
      sno:sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }



 const [todos, setTodos] = useState([
  {
    sno: 1,
    title:"Go to the market",
    desc: "You need to go to the market to get this job done1"
  },
  {
    sno: 2,
    title:"Go to the mall",
    desc: "You need to go to the market to get this job done2"
  },
  {
    sno: 3,
    title:"Go to the masjid",
    desc: "You need to go to the market to get this job done3"
  },
]);
  return (
    <>
      <Headers title = "My Todos List" searchBar ={true}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos = {todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
