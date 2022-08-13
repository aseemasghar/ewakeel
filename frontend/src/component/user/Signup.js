import React, { useRef } from "react";
import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import "./Signup.css";
import { registerUser } from "../../Actions/User";
import { useAlert } from "react-alert";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [courtType, setcourtType] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error,message } = useSelector((state) => state.user);

  const submitClient = (e) => {
    e.preventDefault();
    dispatch(registerUser(name, email, password,confirmPassword,role));
  };
  const submitLawyer = (e) => {
    e.preventDefault();
    dispatch(registerUser(name, email, password,confirmPassword,role,city,country,address,phone,courtType));
  };
  
 

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
    
  }, [dispatch, error, alert,message]);


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
          <form onSubmit={submitLawyer} className="row g-3 my-3" ref={lawyerTab}>
            <div className="row lawyerForm">
              <div className="col">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Name"
                  aria-label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  required
                  className="form-control"
                  id="lawyer-email"
                  placeholder="Email"
                  aria-label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col">
                <input
                  type="password"
                  required
                  className="form-control"
                  id="lawyer-password"
                  placeholder="Password"
                  aria-label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="col">
                <input
                  type="password"
                  required
                  className="form-control"
                  id="confirm-lawyer-password"
                  placeholder="Confirm Password"
                  aria-label="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  required
                  className="form-control"
                  id="inputCity"
                  placeholder="City"
                  aria-label="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <select onChange={(e) => setCountry(e.target.value)} id="inputState" className="form-select">
                  <option>...</option>
                  <option>Pakistan</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col my-3">
                <input
                  type="text"
                  required
                  className="form-control"
                  id="inputAddress"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  required
                  className="form-control"
                  id="inputphone"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="row my-3">
              <p>Court Type dealing with</p>
              <div className="col-md-6">
                <select onChange={(e) => setcourtType(e.target.value)} id="inputcourt" className="form-select">
                  <option>Select</option>
                  <option>Supreme Court</option>
                  <option>High Court</option>
                  <option>District Court</option>
                  <option>Session Court</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-12 my-3">
                <button onClick={(e) => setRole('lawyer')} disabled={loading} type="submit" className="btn btn-dark w-100">
                  Sign up
                </button>
                <div className="already my-1">
                  <a href="/login" className="text-dark">
                    Already Registered? Login Now
                  </a>
                </div>
              </div>
            </div>
          </form>


          <form onSubmit={submitClient} className="row g-3 my-3 client-form" ref={clientTab}>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  aria-label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  aria-label="Email"
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
                  value={password}
                 onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="col">
                <input
                  type="password"
                  className="form-control"
                  id="confirm-password"
                  placeholder="Confirm Password"
                  aria-label="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 my-3">
                <button onClick={(e) => setRole('client')} disabled={loading} type="submit" className="btn btn-dark w-100">
                  Sign up
                </button>
                <div className="already my-1">
                  <a href="/login" className="text-dark">
                    Already Registered? Login Now
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
