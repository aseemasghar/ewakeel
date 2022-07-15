import React, { useRef } from "react";
// import { Link } from "react-router-dom";
import "./Signup.css";
const Signup = () => {



  const lawyerTab = useRef(null);
  const clientTab = useRef(null);
  const switcherTab = useRef(null);


  const switchTabs = (e, tab) => {
    if (tab === "lawyer") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      clientTab.current.classList.remove("shiftToNeutralForm");
      lawyerTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "client") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      clientTab.current.classList.add("shiftToNeutralForm");
      lawyerTab.current.classList.add("shiftToLeft");
    }
  };

  return (
    <>
      <div className="bg">
        <div className="container form-layout my-5 bg-light">
          <div className="signupbar bg-dark text-light rounded">
            <h2 className="py-2">Signup</h2>
          </div>
          <div className="row">
            <div className="lawyer-client-toggle">
              <p onClick={(e) => switchTabs(e, "lawyer")}>LAWYER</p>
              <p onClick={(e) => switchTabs(e, "client")}>CLIENT</p>
            </div>
          </div>
          <button className="bottom-bar" ref={switcherTab}></button>
          <form className="row g-3 my-3" ref={lawyerTab}>
            <div className="row lawyerForm">
              <div class="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  aria-label="Name"
                />
              </div>
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
              <div className="col">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Confirm Password"
                  aria-label="Confirm Password"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="City"
                  aria-label="City"
                />
              </div>
              <div className="col-md-4">
                <select id="inputState" className="form-select">
                  <option>Pakistan</option>
                  <option>...</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col my-3">
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Address"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="inputphone"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="row my-3">
              <p>Court Type dealing with</p>
              <div className="col-md-6">
                <select id="inputState" className="form-select">
                  <option selected>Select</option>
                  <option>Supreme Court</option>
                  <option>High Court Islamabad</option>
                  <option>High Court Lahore</option>
                  <option>High Court Quetta</option>
                  <option>High Court Peshawar</option>
                  <option>High Court Sindh</option>
                  <option>District Court</option>
                  <option>Session Court</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-12 my-3">
                <button type="submit" className="btn btn-dark w-100">
                  Sign up
                </button>
                <div className="already my-1">
                  <a href="/login" className="text-dark">
                    Already Registered?
                  </a>
                </div>
              </div>
            </div>
          </form>


          <form className="row g-3 my-3 client-form" ref={clientTab}>
            <div className="row">
              <div class="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  aria-label="Name"
                />
              </div>
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
              <div className="col">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Confirm Password"
                  aria-label="Confirm Password"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 my-3">
                <button type="submit" className="btn btn-dark w-100">
                  Sign up
                </button>
                <div className="already my-1">
                  <a href="/login" className="text-dark">
                    Already Registered?
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
