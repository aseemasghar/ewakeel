import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import Home from './component/Home/Home.js';
import Signup from './component/user/Signup';
function App() {
  return (
   
  <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='signup' element={<Signup/>}/>
      {/* <Route  path='/login' element={<login/>}/> */}

    </Routes>
  </BrowserRouter>


  ) 
}

export default App;
