import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { useAlert } from "react-alert";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const alert = useAlert();
    const navigate = useNavigate();

    const LoginHandler = (e)=>{
        e.preventDefault();
        if(email==="admin123@gmail.com"&&password==="admin12345"){
          navigate('/admin/cases')
        }
        else{
          navigate('/admin');
          alert.error('Invalid credentials')
        }
        }

  return (
    <>
     <div className="bg">
        <div className="container form-layout my-5 bg-light">
          <div className="signupbar bg-dark text-light rounded">
            <h2 className="py-2">Login</h2>
          </div>
          
         
          <form onSubmit={LoginHandler} className="row g-3 my-3"  >
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
              
            </div>
      
            <div className="row">
              <div className="col-12 my-3">
              {/* onClick={(e)=>handleClick()} */}
                <button type="submit" className="btn btn-dark w-100">
                  Login
                </button>
                
              </div>
            </div>
          </form>
        </div>
    </div>
    </>
  )
}

export default AdminLogin