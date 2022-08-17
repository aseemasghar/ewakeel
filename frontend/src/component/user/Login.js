import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { loginUser } from '../../Actions/User';
import { useEffect } from "react";
import { useAlert } from "react-alert";
// import { loadUser } from "../../Actions/User";
import {useNavigate} from 'react-router-dom';

import "./Signup.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const {  error,message } = useSelector((state) => state.user);



const LoginHandler = (e)=>{
e.preventDefault();
dispatch(loginUser(email,password));
if(role==="client"){
  navigate('/client-home')
}
else if(role==="lawyer"){
  navigate('/myaccount');
}
else{
  navigate('');
  alert.error('Select Role');
}
}
useEffect(() => {
  if (error) {
    alert.error(error);
    dispatch({ type: "clearErrors" });
  }
  if (message) {
    alert.success(message);
    dispatch({ type: "clearMessage" });
  }
  
}, [dispatch, error, alert ,message]);


  return (
    <>
    <div className="bg">
        <div className="container form-layout my-5 bg-light">
          <div className="signupbar bg-dark text-light rounded">
            <h2 className="py-2">Login</h2>
          </div>

          <form className="row g-3 my-3" onSubmit={LoginHandler}>
            <div className="row lawyerForm">
              <div className="col">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  aria-label="Email"
                  required
                  value={email}
          onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  aria-label="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <select onChange={(e) => setRole(e.target.value)} id="inputrole" className="form-select">
                <option >...</option>
                  <option value='client'>Client</option>
                  <option value='lawyer'>Lawyer</option>
                </select>
               
              </div>
             
            </div>
      
            <div className="row">
              <div className="col-12 my-3">
              {/* onClick={(e)=>handleClick()} */}
                <button type="submit" className="btn btn-dark w-100">
                  Login
                </button>
                <div className="already my-1">
                  <a href="/signup" className="text-dark">
                    Don't have an account?
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
    </div>
            


    </>
  )
}

export default Login