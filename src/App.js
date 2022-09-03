
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About';
import Blogs from './Pages/Home/Blogs';
import Contact from './Pages/Home/Contact';
import Home from './Pages/Home/Home';
import Projects from './Pages/Home/Projects';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';


function App() {
  return (
    <div  className="font-serif bg" >
      <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/projects" element={<Projects></Projects>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/blog" element={<Blogs></Blogs>}></Route>
      <Route path="/" element={<Home></Home>}></Route>
      
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
