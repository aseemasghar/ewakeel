import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import Home from './component/Home/Home.js';
import Signup from './component/user/Signup';
import Login from './component/user/Login';
import About from './component/About/About.js';

// Client Dashboard Imports
import MyProfile from './component/client-dashboard/MyProfile';
import ProfileSettings from './component/client-dashboard/ProfileSettings';
import PostCase from './component/client-dashboard/PostCase';
import MyCases from './component/client-dashboard/MyCases';
import EditCase from './component/client-dashboard/EditCase';


// Lawyer Dashboard Imports
import LawyerProfile from './component/lawyer-dashboard/LawyerProfile';
import LawyerProfileSettings from './component/lawyer-dashboard/LawyerProfileSettings';
import ViewAllCases from './component/lawyer-dashboard/ViewAllCases';
import LawyerCases from './component/lawyer-dashboard/LawyerCases';
function App() {
  return (
   
  <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/signup' element={<Signup/>}/>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/about' element={<About/>}/>

      {/* Client Dashboard Routes */}
      <Route  path='/my-account' element={<MyProfile/>}/>
      <Route  path='/profile-settings' element={<ProfileSettings/>}/>
      <Route  path='/post-a-case' element={<PostCase/>}/>
      <Route  path='/my-cases' element={<MyCases/>}/>
      <Route  path='/edit-client-case' element={<EditCase/>}/>
      

      {/* Lawyer Dashboard Routes */}
      <Route  path='/myaccount' element={<LawyerProfile/>}/>
      <Route  path='/profilesettings' element={<LawyerProfileSettings/>}/>
      <Route  path='/viewallcases' element={<ViewAllCases/>}/>
      <Route  path='/mycases' element={<LawyerCases/>}/>

    </Routes>
  </BrowserRouter>


  ) 
}

export default App;
