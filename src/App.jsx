import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage'
import RoomsyProject from './components/RoomsyProject'
import BulletinProject from './components/BulletinProject';
import FoodWine from './components/FoodWine';
import { useEffect } from 'react';


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
          <Route path="/projects/Food&Wine" element={<FoodWine></FoodWine>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
