import './App.css';
import Headers from "./My_Components/Header";
import Footer from "./My_Components/Footer";
import Todo from "./My_Components/TOdo";


function App() {
  return (
    <>
      <Headers title = "My Todos List" searchBar ={true}/>
      <Todo/>
      <Footer/>
    </>
  );
}

export default App;
