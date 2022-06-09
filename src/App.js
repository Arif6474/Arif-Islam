
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About';
import Home from './Pages/Home/Home';
import Projects from './Pages/Home/Projects';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div className="bg-slate-900" >
      <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/projects" element={<Projects></Projects>}></Route>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/" element={<Home></Home>}></Route>
      
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
