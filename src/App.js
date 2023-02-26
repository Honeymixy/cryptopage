import Landingpage from "./Component/Landingpage";
import Navbar from "./Component/Navbar";
import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import StartForm from "./Secondcomponent/StartForm";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route  index element={<Landingpage/>}/>
        <Route path="/getstart" element={<StartForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
