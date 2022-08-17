import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const caseReducer = createReducer(initialState, {
  addCommentRequest: (state) => {
    state.loading = true;
  },
  addCommentSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  addCommentFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  editCaseRequest: (state) => {
    state.loading = true;
  },
  editCaseSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  editCaseFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  
  deleteCaseRequest: (state) => {
    state.loading = true;
  },
  deleteCaseSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  deleteCaseFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  admindeleteCaseRequest: (state) => {
    state.loading = true;
  },
  admindeleteCaseSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  admindeleteCaseFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },




});

export const newCaseReducer = createReducer(initialState, {
  newCaseRequest: (state) => {
    state.loading = true;
  },
  newCaseSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  newCaseFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },




});

export const myCasesReducer = createReducer(initialState, {
    myCasesRequest: (state) => {
      state.loading = true;
    },
    myCasesSuccess: (state, action) => {
      state.loading = false;
      state.cases = action.payload;
    },
    myCasesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  });

  export const allCasesReducer = createReducer(initialState, {
    allCasesRequest: (state) => {
      state.loading = true;
    },
    allCasesSuccess: (state, action) => {
      state.loading = false;
      state.cases = action.payload;
    },
    allCasesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  });