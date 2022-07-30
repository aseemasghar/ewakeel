import axios from "axios";


export const createNewCase = (title,city,description) => async (dispatch) => {
    try {
      dispatch({
        type: "newCaseRequest",
      });
  
      const { data } = await axios.post(
        `/api/v1/case/new`,
        {
          title,
          city,
        //   date,
          description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: "newCaseSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "newCaseFailure",
        payload: error.response.data.message,
      });
    }
  };
  export const editCase = (id,title,city,description) => async (dispatch) => {
    try {
      dispatch({
        type: "editCaseRequest",
      });
  
      const { data } = await axios.put(
        `/api/v1/case/${id}`,
        {
          title,
          city,
          description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: "editCaseSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "editCaseFailure",
        payload: error.response.data.message,
      });
    }
  };
  
  export const deleteCase = (id) => async (dispatch) => {
    try {
      dispatch({
        type: "deleteCaseRequest",
      });
  
      const { data } = await axios.delete(`/api/v1/case/${id}`);
      dispatch({
        type: "deleteCaseSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "deleteCaseFailure",
        payload: error.response.data.message,
      });
    }
  };