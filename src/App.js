import './App.css';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header'
import Index1 from './components/Forum/Index'
import Index2 from './components/Question/Index'
import Ask from './components/Ask/Ask'
import Auth from './components/Auth/index'
function App() {
  const [ShowMenu, setShowMenu] = useState(false);
  function set(){
    setShowMenu(!ShowMenu);
  }
  return (
    <div>
      <div className="App bg-secondary shadow-md border-t-2 border-primary antialiased">
        <Header set={set}/>
      </div>
      <Routes>
        <Route exact path="/auth" element={<Auth/>}/>
        <Route exact path="/" element={<Index1 set={set} ShowMenu={ShowMenu}/>}/>
        <Route exact path="/add-question" element={<Ask/>}/>
        <Route path="/question" element={<Index2 set={set} ShowMenu={ShowMenu}/>}/>
      </Routes>
    </div>
  );
}

export default App;
