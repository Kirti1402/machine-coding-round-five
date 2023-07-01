import logo from './logo.svg';
import './App.css';
import ReciepeList from './Component/reciepeList';
import {Routes,Route} from "react-router-dom"
import Reciepepage from './Component/reciepepage';

function App() {
  return (
    <div className="App">
      
      
      <Routes>
      <Route path="/" element={ <ReciepeList/>}/>
      <Route path="/recipedetail" element={ <Reciepepage/>}/>
     </Routes>
    </div>
  );
}

export default App;
