import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./Actions/User";




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
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadUser());
    }, [dispatch]);
    const { isAuthenticated } = useSelector((state) => state.user);





  return (
   
  <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/signup' element={<Signup/>}/>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/about' element={<About/>}/>

      {/* Client Dashboard Routes */}
      <Route  path='/my-account' element={isAuthenticated?<MyProfile/>:<Login/>}/>
      <Route  path='/profile-settings' element={isAuthenticated?<ProfileSettings/>:<Login/>}/>
      <Route  path='/post-a-case' element={isAuthenticated?<PostCase/>:<Login/>}/>
      <Route  path='/my-cases' element={isAuthenticated?<MyCases/>:<Login/>}/>
      <Route  path='/edit-client-case' element={<EditCase/>}/>
      

      {/* Lawyer Dashboard Routes */}
      <Route  path='/myaccount' element={isAuthenticated?<LawyerProfile/>:<Login/>}/>
      <Route  path='/profilesettings' element={isAuthenticated?<LawyerProfileSettings/>:<Login/>}/>
      <Route  path='/viewallcases' element={isAuthenticated?<ViewAllCases/>:<Login/>}/>
      <Route  path='/mycases' element={isAuthenticated?<LawyerCases/>:<Login/>}/>

    </Routes>
  </BrowserRouter>


  ) 
}

export default App;
