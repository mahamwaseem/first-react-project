import logo from './logo.svg';
import './App.css';
import Headers from "./My_Components/Header";
import Footer from "./My_Components/Footer";
import Todo from "./My_Components/TOdo";
import Todos from "./My_Components/Todos";

function App() {
  return (
    <>
      <Headers/>
      <Todo/>
      <Todos/>
      <Footer/>
    </>
  );
}

export default App;
