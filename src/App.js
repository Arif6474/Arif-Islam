
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About';
import Blogs from './Pages/Home/Blogs';
import Contact from './Pages/Home/Contact';
import Home from './Pages/Home/Home';
import ProjectDetail from './Pages/Home/ProjectDetail';
import Projects from './Pages/Home/Projects';
import ParticlesBackground from './Pages/Particles/ParticlesBackground';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';


function App() {
  return (
    <div  className="font-serif bg" >
      <ParticlesBackground/>
      <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/projects" element={<Projects></Projects>}></Route>
      <Route path="/project/:projectId" element={<ProjectDetail></ProjectDetail>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/blog" element={<Blogs></Blogs>}></Route>
      <Route path="/" element={<Home></Home>}></Route>
      
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
