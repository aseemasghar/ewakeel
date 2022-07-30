import React from 'react'
import LawyerNav from './LawyerNav.js'

const LawyerProfileSettings = () => {
  return (
    <>
    <LawyerNav/>
    <div className="container">
        <h2 className="my-3">PROFILE SETTINGS</h2>
<form action="">
        <div className="avatar my-2 border border-secondary">
          <h4 className="p-4 rounded text-light bg-secondary">
            <i className="fa-solid fa-user"></i> USER AVATAR
          </h4>
          <div className="m-3 row">
            <p className="fst-italic">
              Update your profile picture, if not the default Avatar image will
              be used
            </p>
            <p>
              <b>MAX UPLOAD SIZE :</b> 1MB
            </p>
            <p>
              <b>DIMENSIONS :</b> 150X150
            </p>
            <p>
              <b>FORMAT :</b> JPEG,PNG
            </p>
            <div className="col-md-4">
              <div className="input-group mb-3">
                <input type="file" className="form-control" id="inputGroupFile02" />
                {/* <label className="input-group-text" htmlFor="inputGroupFile02">
                Upload
              </label> */}
              </div>
            </div>
          </div>
        </div>

        <div className="name my-2 border border-secondary">
          <h4 className="p-4 rounded text-light bg-secondary">
            <i className="fa-solid fa-user"></i> ABOUT ME
          </h4>
          <div className="m-3 row my-4">
            <div className="mb-3 col">
              <label htmlFor="formGroupExampleInput" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="First Name"
              />
            </div>
            <div className="mb-3 col">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>

        <div className="contact-details my-2  border border-secondary">
          <h4 className="p-4 rounded text-light bg-secondary">
            <i className="fa-solid fa-address-book"></i> CONTACT DETAILS
          </h4>
          <div className="m-3 row my-4">
            <div className="mb-3 col">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div className="mb-3 col">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Phone no
              </label>
              <input
                type="number"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Phone no"
              />
            </div>
          </div>
        </div>

        <div className="address my-2  border border-secondary">
          <h4 className="p-4 rounded text-light bg-secondary">
            <i className="fa-solid fa-location-dot"></i> ADDRESS
          </h4>
          <div className="m-3 row my-4">
            <div className="col">
              <label htmlFor="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Address"
              />
            </div>
            <div className="col">
              <label htmlFor="inputCity" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="City"
              />
            </div>
          </div>
          <div className="m-3 row my-4">
            <div className="col">
              <label htmlFor="inputState" className="form-label">
                State
              </label>
              <select id="inputState" className="form-select">
                <option>Punjab</option>
                <option>Sindh</option>
                <option>KPK</option>
                <option>Balochistan</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="inputState" className="form-label">
                Country
              </label>
              <select id="inputState" className="form-select">
                <option>...</option>
                <option>Pakistan</option>
              </select>
            </div>
          </div>
        </div>

        <button type="submit" className="w-25 my-3 p-2 btn btn-dark">Submit Information</button>
        </form>

<form action="">
        <div className="password-update my-2  border border-secondary">
          <h4 className="p-4 rounded text-light bg-secondary">
          <i className="fa-solid fa-key"></i> PASSWORD UPDATE
          </h4>
          <div className="m-3 row my-4">
          <div className="col mb-3">
    <label htmlFor="inputPassword4" className="form-label">New Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col mb-3">
    <label htmlFor="inputPassword4" className="form-label">Repeat Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <p className="mx-1 row">Enter same password in both fields. Use an uppercase letter and a number for stronger password.</p>
            </div>   


      </div>
      <button type="submit" className=" w-25 my-3 p-2 btn btn-dark">Update</button>
      </form>
    

      </div>
    </>
  )
}

export default LawyerProfileSettings