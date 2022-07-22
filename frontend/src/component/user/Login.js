import React from 'react'
import "./Signup.css";

const Login = () => {
  return (
    <>
    <div className="bg">
        <div className="container form-layout my-5 bg-light">
          <div className="signupbar bg-dark text-light rounded">
            <h2 className="py-2">Login</h2>
          </div>

          <form className="row g-3 my-3">
            <div className="row lawyerForm">
              <div class="col">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                  aria-label="Email"
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                  aria-label="Password"
                />
              </div>
             
            </div>
      
            <div className="row">
              <div className="col-12 my-3">
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