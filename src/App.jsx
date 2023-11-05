import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage'
import RoomsyProject from './components/RoomsyProject'
import BulletinProject from './components/BulletinProject';
import { useEffect } from 'react';
import SocialMedia from './components/SocialMedia';
import Betterai from './components/Betterai';
import AIChat from './components/AIChat';


function App() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>} />
          <Route path="/projects/Roomsy" element={<RoomsyProject></RoomsyProject>} />
          <Route path="/projects/Buletin" element={<BulletinProject></BulletinProject>} />
          <Route path="/projects/AIChat" element={<AIChat></AIChat>} />
          <Route path="/projects/socialmedia" element={<SocialMedia></SocialMedia>} />
          <Route path="/projects/betterai" element={<Betterai></Betterai>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
