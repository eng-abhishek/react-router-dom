import logo from './logo.svg';
import './App.css';
import { Routes,Route,useNavigate } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

function App() {

  const navigator = useNavigate();

  return (
    <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   {/*  How to add button click rediraction  */}
   <button type='button' onClick={() => navigator('/about')}>About Us</button>
   <br></br>
   <button type='button' onClick={() => navigator('/contact')}>Contact</button>
   </>
  );
}

export default App;
