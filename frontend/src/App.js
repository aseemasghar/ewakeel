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
import ClientHome from './component/client-dashboard/ClientHome';
import MyProfile from './component/client-dashboard/MyProfile';
import ProfileSettings from './component/client-dashboard/ProfileSettings';
import PostCase from './component/client-dashboard/PostCase';
import MyCases from './component/client-dashboard/MyCases';
import EditCase from './component/client-dashboard/EditCase';
import GetLawyerProfile from './component/client-dashboard/GetLawyerProfile';


// Lawyer Dashboard Imports
import LawyerProfile from './component/lawyer-dashboard/LawyerProfile';
import LawyerProfileSettings from './component/lawyer-dashboard/LawyerProfileSettings';
import ViewAllCases from './component/lawyer-dashboard/ViewAllCases';
import LawyerCases from './component/lawyer-dashboard/LawyerCases';
import GetClientProfile from './component/lawyer-dashboard/GetClientProfile';

//Admin Dashboard
import AdminLogin from './component/admin-dashboard/AdminLogin'
import Cases from './component/admin-dashboard/Cases';
import Lawyers from './component/admin-dashboard/Lawyers';
import Clients from './component/admin-dashboard/Clients';
import GetClient from './component/admin-dashboard/GetClient';
import GetLawyer from './component/admin-dashboard/GetLawyer';


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
      <Route  path='/client-home' element={isAuthenticated?<ClientHome/>:<Login/>}/>
      <Route  path='/my-account' element={isAuthenticated?<MyProfile/>:<Login/>}/>
      <Route  path='/profile-settings' element={isAuthenticated?<ProfileSettings/>:<Login/>}/>
      <Route  path='/post-a-case' element={isAuthenticated?<PostCase/>:<Login/>}/>
      <Route  path='/my-cases' element={isAuthenticated?<MyCases/>:<Login/>}/>
      <Route  path='/edit-client-case' element={<EditCase/>}/>
      <Route  path='/lawyer/:id' element={isAuthenticated?<GetLawyerProfile/>:<Login/>}/>
      

      {/* Lawyer Dashboard Routes */}
      <Route  path='/myaccount' element={isAuthenticated?<LawyerProfile/>:<Login/>}/>
      <Route  path='/profilesettings' element={isAuthenticated?<LawyerProfileSettings/>:<Login/>}/>
      <Route  path='/viewallcases' element={isAuthenticated?<ViewAllCases/>:<Login/>}/>
      <Route  path='/mycases' element={isAuthenticated?<LawyerCases/>:<Login/>}/>
      <Route  path='/user/:id' element={isAuthenticated?<GetClientProfile/>:<Login/>}/>
     
     {/* Admin Dashboard Routs */}
     <Route  path='/admin' element={<AdminLogin/>}/>
     <Route  path='/admin/lawyers' element={<Lawyers/>}/>
     <Route  path='/admin/clients' element={<Clients/>}/>
     <Route  path='/admin/cases' element={<Cases/>}/>
     <Route  path='/client/:id' element={<GetClient/>}/>
     <Route  path='/admin/lawyer/:id' element={<GetLawyer/>}/>
     

    </Routes>
  </BrowserRouter>


  ) 
}

export default App;
