import axios from "axios";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });

    const { data } = await axios.post(
      "/api/v1/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "LoginSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};

// Load user Data
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });

    const { data } = await axios.get("/api/v1/me");

    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFailure",
      // payload: error.response.data.message,
    });
  }
};
export const registerUser =
  (
    name,
    email,
    password,
    confirmPassword,
    role,
    city,
    country,
    address,
    phone,
    courtType
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "RegisterRequest",
      });

      const { data } = await axios.post(
        "/api/v1/register",
        {
          name,
          email,
          password,
          confirmPassword,
          role,
          city,
          country,
          address,
          phone,
          courtType,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "RegisterSuccess",
        payload: data.user,
      });
      dispatch({
        type: "RegisterSuccess",
        payload: data.message,
      });
     
    } catch (error) {
      dispatch({
        type: "RegisterFailure",
        payload: error.response.data.message,
      });
    }
  };

export const getMyCases = () => async (dispatch) => {
  try {
    dispatch({
      type: "myCasesRequest",
    });

    const { data } = await axios.get("/api/v1/my/cases");
    dispatch({
      type: "myCasesSuccess",
      payload: data.cases,
    });
  } catch (error) {
    dispatch({
      type: "myCasesFailure",
      // payload: error.response.data.message,
    });
  }
};
export const updateProfile =
  (
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
    experience,
    courtType,
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "updateProfileRequest",
      });

      const { data } = await axios.put(
        "/api/v1/me/update",
        {
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
          experience,
          courtType,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "updateProfileSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "updateProfileFailure",
        payload: error.response.data.message,
      });
    }
  };
export const updatePassword =
  (oldPassword, newPassword, confirmPassword) => async (dispatch) => {
    try {
      dispatch({
        type: "updatePasswordRequest",
      });

      const { data } = await axios.put(
        "/api/v1/password/update",
        { oldPassword, newPassword, confirmPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "updatePasswordSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "updatePasswordFailure",
        payload: error.response.data.message,
      });
    }
  };

  export const getUserProfile = (id) => async (dispatch) => {
    try {
      dispatch({
        type: "userProfileRequest",
      });
  
      const { data } = await axios.get(`/api/v1/user/${id}`);
      dispatch({
        type: "userProfileSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "userProfileFailure",
        payload: error.response.data.message,
      });
    }
  };

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LogoutUserRequest",
    });

    await axios.get("/api/v1/logout");

    dispatch({
      type: "LogoutUserSuccess",
    });
  } catch (error) {
    dispatch({
      type: "LogoutUserFailure",
      payload: error.response.data.message,
    });
  }
};

export const giveFeedBack = (lawyerid, feedback) => async (dispatch) => {
  try {
    dispatch({
      type: "addFeedBackRequest",
    });

    const { data } = await axios.post(
      `/api/v1/user/feedback/${lawyerid}`,
      {
   
        feedback,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "addFeedBackSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "addFeedBackFailure",
      payload: error.response.data.message,
    });
  }
};

export const getAllUsers = () =>
  async (dispatch) => {
    try {
      dispatch({
        type: "allUsersRequest",
      });

      const { data } = await axios.get("/api/v1/all/users");
      dispatch({
        type: "allUsersSuccess",
        payload: data.users,
      });
    } catch (error) {
      dispatch({
        type: "allUsersFailure",
        payload: error.response.data.message,
      });
    }
  };
