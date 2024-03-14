import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home.jsx';
import Error from './Pages/Error/Error';
import Achivement from './Pages/Achivement/Achivement';
import './App.scss';
import './Style/mixins.scss'


function App() {
  return (
    <React.StrictMode>
      <Router>
        <div>
          <main className='main_container'>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<Achivement/>} />    
              <Route path="*" element={<Error />} /> 
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  );
}


export default App;
