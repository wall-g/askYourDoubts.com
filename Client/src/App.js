import './App.css';
import { useState } from 'react';
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header'
import Index1 from './components/Forum/Index'
import Index2 from './components/Question/Index'
import Ask from './components/Ask/Ask'
import Auth from './components/Auth/index'

const PrivateRoute = (({set, isAuthenticated}) => {
  return isAuthenticated? 
  <>
    <Header set={set} isAuthenticated={isAuthenticated}/>
    <Outlet/>
  </> :
    <Navigate replace to="/auth"/>
})

function App() {
  const [ShowMenu, setShowMenu] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  function set(){
    setShowMenu(!ShowMenu);
  }
  return (
    <div>
      <Routes>
        <Route exact path="/auth" element={<Auth setIsAuthenticated={setIsAuthenticated}/>}/>
        <Route exact path="/" element={<PrivateRoute set={set} isAuthenticated={isAuthenticated}/>}>
            <Route exact path="/" element={<Index1 set={set} ShowMenu={ShowMenu}/>}/>
        </Route>
        <Route exact path="/add-question" element={<Ask/>}/>
        <Route path="/question" element={<Index2 set={set} ShowMenu={ShowMenu}/>}/>
      </Routes>
    </div>
  );
}

export default App;
