import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import {  BrowserRouter as Router,
  Switch,
  Route,} from "react-router-dom";
import Featured from "./Components/Featured";



function App() {

  return(
    <div className="app">
      
        <Home/>
        
        
       
      
    </div>
  );
}


export default App;
