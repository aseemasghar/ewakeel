import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LawyerNav from "./LawyerNav.js";
import { loadUser, updateProfile } from "../../Actions/User";
import { useAlert } from "react-alert";
import { updatePassword } from "../../Actions/User";
import Footer from "../Footer/Footer.js";

const LawyerProfileSettings = () => {
  const { error, user } = useSelector((state) => state.user);
  const {
    loading: updateLoading,
    error: updateError,
    message,
  } = useSelector((state) => state.user);

  const [avatar, setAvatar] = useState("");
  // const [avatarPrev, setAvatarPrev] = useState();
  const [name, setName] = useState(user.name);
  const [companyName, setcompanyName] = useState(user.companyName);
  const [about, setAbout] = useState(user.about);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [landline, setLandline] = useState(user.landline);
  const [skype, setSkype] = useState(user.skype);
  const [address, setAddress] = useState(user.address);
  const [city, setCity] = useState(user.city);
  const [province, setProvince] = useState(user.state);
  const [country, setCountry] = useState(user.country);
  const [degreeName, setdegreeName] = useState(user.degreeName);
  const [instituteName, setinstituteName] = useState(user.instituteName);
  const [experience, setExperience] = useState(user.experience);

    //Set values for update Password
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatar(Reader.result);
      }
    };
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(
      updateProfile(
        avatar,
        name,
        email,
        phone,
        address,
        city,
        province,
        country,
        companyName,
        about,
        landline,
        skype,
        degreeName,
        instituteName,
        experience
      )
    );
    dispatch(loadUser());
  };

  const passwordSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updatePassword(oldPassword, newPassword, confirmPassword));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }

    if (updateError) {
      alert.error(updateError);
      dispatch({ type: "clearErrors" });
    }

    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, alert, updateError, message]);

  return (
    <>
      <LawyerNav />
      <div className="container">
        <h2 className="my-3">PROFILE SETTINGS</h2>
        <form onSubmit={submitHandler}>
          <div className="avatar my-2 border border-secondary">
            <h4 className="p-3 rounded text-light bg-secondary">
              <i className="fa-solid fa-user"></i> USER AVATAR
            </h4>
            <div className="m-3 row">
              <p className="fst-italic">
                Update your profile picture, if not the default Avatar image
                will be used
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
                  <input
                    type="file"
                    className="form-control"
                    id="input-image"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  {/* <label className="input-group-text" htmlFor="inputGroupFile02">
                Upload
              </label> */}
                </div>
              </div>
            </div>
          </div>

          <div className="about-me my-2 border border-secondary">
            <h4 className="p-3 rounded text-light bg-secondary">
              <i className="fa-solid fa-user"></i> ABOUT ME
            </h4>
            <div className="m-3 row ">
              <div className="mb-3 col">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3 col">
                <label htmlFor="company-name" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="company-name"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setcompanyName(e.target.value)}
                />
              </div>
            </div>
            <div className="row  m-3">
              <div className="mb-3 col-md-9">
                <label htmlFor="about" className="form-label">
                  About
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="about"
                  rows="5"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="contact-details my-2  border border-secondary">
            <h4 className="p-3 rounded text-light bg-secondary">
              <i className="fa-solid fa-address-book"></i> CONTACT DETAILS
            </h4>
            <div className="m-3 row my-4">
              <div className="mb-3 col">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3 col">
                <label htmlFor="phone" className="form-label">
                  Phone no
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Phone no..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="m-3 row">
              <div className="mb-3 col">
                <label htmlFor="landline" className="form-label">
                  Landline
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="landline"
                  placeholder="Landline..."
                  value={landline}
                  onChange={(e) => setLandline(e.target.value)}
                />
              </div>
              <div className="mb-3 col">
                <label htmlFor="skype" className="form-label">
                  Skype
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="skype"
                  placeholder="Skype ID..."
                  value={skype}
                  onChange={(e) => setSkype(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="address my-2  border border-secondary">
            <h4 className="p-3 rounded text-light bg-secondary">
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
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
            <div className="m-3 row my-4">
              <div className="col">
                <label htmlFor="inputState" className="form-label">
                  State
                </label>
                <select
                  onChange={(e) => setProvince(e.target.value)}
                  id="inputState"
                  className="form-select"
                >
                   <option>...</option>
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
                <select
                  onChange={(e) => setCountry(e.target.value)}
                  id="inputCountry"
                  className="form-select"
                >
                  <option>...</option>
                  <option>Pakistan</option>
                </select>
              </div>
            </div>
          </div>

          <div className="qualification my-2  border border-secondary">
            <h4 className="p-3 rounded text-light bg-secondary">
              <i className="bi bi-mortarboard-fill"></i> QUALIFICATION
            </h4>
            <div className="m-3 row my-4">
              <div className="mb-3 col">
                <label htmlFor="degree" className="form-label">
                  Degree Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="degree"
                  placeholder="Title Name..."
                  value={degreeName}
                  onChange={(e) => setdegreeName(e.target.value)}
                />
              </div>
              <div className="mb-3 col">
                <label htmlFor="institute" className="form-label">
                  Institute Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nstitute"
                  placeholder="Institute Name..."
                  value={instituteName}
                  onChange={(e) => setinstituteName(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="experience my-2  border border-secondary">
            <h4 className="p-3 rounded text-light bg-secondary">
              <i className="fa-brands fa-black-tie"></i> EXPERIENCE
            </h4>
            <div className="m-3 row my-4">
              <label htmlFor="experience" className="form-label">
                Details
              </label>
              <div className="col-md-9">
                <textarea
                  type="text"
                  className="form-control"
                  id="experience"
                  rows="5"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>
            </div>
          </div>

          <button
            disabled={updateLoading}
            type="submit"
            className="w-25 my-3 p-2 btn btn-dark"
          >
            Submit Information
          </button>
        </form>

        <form onSubmit={passwordSubmitHandler}>
          <div className="password-update my-2  border border-secondary">
            <h4 className="p-3 rounded text-light bg-secondary">
              <i className="fa-solid fa-key"></i> PASSWORD UPDATE
            </h4>
            <div className="m-3 row my-4">
              <div className="col-md-4 mb-3">
                <label htmlFor="old-password" className="form-label">
                  Old Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="old-password"
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="new-password" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="new-password"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="repeat-password" className="form-label">
                  Repeat Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="repeat-password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <p className="mx-1 row">
                Enter same password in both fields. Use an uppercase letter and
                a number for stronger password.
              </p>
            </div>
          </div>
          <button type="submit" className=" w-25 my-3 p-2 btn btn-dark">
            Update
          </button>
        </form>
      </div>

      <Footer/>
    </>
  );
};

export default LawyerProfileSettings;
