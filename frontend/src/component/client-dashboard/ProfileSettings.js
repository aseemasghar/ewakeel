import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClientNav from "./ClientNav";
import { loadUser, updateProfile } from "../../Actions/User";
import { useAlert } from "react-alert";
import { updatePassword } from "../../Actions/User";

const Profilesettings = () => {
  const { loading, error, user } = useSelector((state) => state.user);
  const {
    loading: updateLoading,
    error: updateError,
    message,
  } = useSelector((state) => state.user);

  const [avatar, setAvatar] = useState("");
  // const [avatarPrev, setAvatarPrev] = useState();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [city, setCity] = useState(user.city);
  const [province, setProvince] = useState(user.state);
  const [country, setCountry] = useState(user.country);

  //Set values for update Password
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();
  // Password submit Handle
  const passwordSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updatePassword(oldPassword, newPassword, confirmPassword));
  };



  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];

  //   const Reader = new FileReader();
  //   Reader.readAsDataURL(file);

  //   Reader.onload = () => {
  //     if (Reader.readyState === 2) {
  //       // setAvatarPrev(Reader.result);

  //       setAvatar(Reader.result);
  //     }
  //   };
  // };
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
        country
      )
    );
    dispatch(loadUser());
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
      <ClientNav />
      <div className="container">
        <h2 className="my-3">PROFILE SETTINGS</h2>
        <form onSubmit={submitHandler}>
          <div className="avatar my-2 border border-secondary">
            <h4 className="p-4 rounded text-light bg-secondary">
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
                    id="avatar"
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

          <div className="name my-2 border border-secondary">
            <h4 className="p-4 rounded text-light bg-secondary">
              <i className="fa-solid fa-user"></i> ABOUT ME
            </h4>
            <div className="m-3 row my-4">
              <div className="mb-3 col">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  id="email"
                  placeholder="Email"
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
                  placeholder="Phone no"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
            <h4 className="p-4 rounded text-light bg-secondary">
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
          <button
            disabled={loading}
            type="submit"
            className=" w-25 my-3 p-2 btn btn-dark"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default Profilesettings;
