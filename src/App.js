import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header'
import Index1 from './components/Forum/Index'
import Index2 from './components/Question/Index'
import Ask from './components/Ask/Ask'
function App() {
  return (
    <>
      <div className="App bg-secondary shadow-md">
        <Header/>
      </div>
      <Routes>
        <Route exact path="/" element={<Index1/>}/>
        <Route exact path="/add-question" element={<Ask/>}/>
        <Route path="/question" element={<Index2/>}/>
      </Routes>
    </>
  );
}

export default App;
