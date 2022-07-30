import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const caseReducer = createReducer(initialState, {
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