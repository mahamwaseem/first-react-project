import './App.css';
import Headers from "./My_Components/Header";
import Footer from "./My_Components/Footer";
import Todos from "./My_Components/Todos";


function App() {
  let todos =[{
    sno: 1,
    title:"Go to the market",
    desc: "You need to go to the market to get this job done"
  },
  {
    sno: 2,
    title:"Go to the mall",
    desc: "You need to go to the market to get this job done"
  },
  {
    sno: 3,
    title:"Go to the masjid",
    desc: "You need to go to the market to get this job done"
  }
]
  return (
    <>
      <Headers title = "My Todos List" searchBar ={true}/>
      <Todos todos = {todos}/>
      <Footer/>
    </>
  );
}

export default App;
