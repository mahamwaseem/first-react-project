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
      <AddTodo/>
      <Todos todos = {todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
