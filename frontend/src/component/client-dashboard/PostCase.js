import React from "react";
import ClientNav from "./ClientNav";
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { createNewCase } from "../../Actions/Case";
import { loadUser } from "../../Actions/User";
import Footer from '../Footer/Footer'

const PostCase = () => {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  // const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const { loading, error, message } = useSelector((state) => state.newCase);
  const dispatch = useDispatch();
  const alert = useAlert();

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(createNewCase(title, city, description));
    dispatch(loadUser());
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
  }, [dispatch, error,alert, message]);

  return (
    <>
      <ClientNav />
      <div className="my-5 container">
        <h4 className="text-center">
          POST YOUR LEGAL PROBLEM, AND START FINDING VERIFIED LAWYERS
        </h4>
        <p className="text-center">
          (Cases submitted here will only be visible to Lawyers registered with
          us in Pakistan)
        </p>

        <form action="" onSubmit={submitHandler}>
          <div className="row d-flex justify-content-center">
            <div className="m-2 mb-0 col-md-6">
              <label htmlFor="formGroupExampleInput" className="form-label">
                <b>LEGAL CASE TITLE</b>
              </label>
              <input
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="form-control"
                id="title"
                placeholder="e.g Dispute in Business Partnerships"
              />
            </div>
            <p className="col-md-6">
              Brief heading of the Legal Problem you are facing
            </p>
            <div className="m-2 mb-0 col-md-6">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                <b>CITY</b>
              </label>
              <input
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
                type="text"
                className="form-control"
                id="city"
                placeholder="e.g Islamabad"
              />
            </div>
            <p className="col-md-6">City of your Residence</p>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="col form-label"
              >
                <b>DESCRIPTION OF THE LEGAL PROBLEM</b>
              </label>
              <textarea
              required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                id="text-area"
                rows="6"
              ></textarea>
            </div>
          </div>
          <div className="row m-3 d-flex justify-content-center">
            <button
              disabled={loading}
              type="submit"
              className="col-md-6 w-25 btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default PostCase;
