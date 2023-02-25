import { Route, Routes ,Navigate} from "react-router-dom";
import './App.css';

import Header from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Offers from './components/Offers';
import Gallery from './components/Gallery';
import Contact from './components/Contact';



function App() {
  return (
    <>
   
          <Header></Header>
        
     <Routes>
       
     <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/" element={<Navigate exact to="/home"/>}/>
     </Routes>
    
    </>
  );
}

export default App;
