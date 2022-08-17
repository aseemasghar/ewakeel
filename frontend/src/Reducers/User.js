import { createReducer } from "@reduxjs/toolkit";
const initialState = {};


export const userReducer = createReducer(initialState,{
    LoginRequest: (state) => {
      state.loading = true;
    },
    LoginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    LoginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
  
    RegisterRequest: (state) => {
      state.loading = true;
    },
    RegisterSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.message = action.payload;
      state.isAuthenticated = true;
    },
    RegisterFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
  
    LoadUserRequest: (state) => {
      state.loading = true;
    },
    LoadUserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    LoadUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    updateProfileRequest: (state) => {
      state.loading = true;
    },
    updateProfileSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateProfileFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updatePasswordRequest: (state) => {
      state.loading = true;
    },
    updatePasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updatePasswordFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addFeedBackRequest: (state) => {
      state.loading = true;
    },
    addFeedBackSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addFeedBackFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  
    LogoutUserRequest: (state) => {
      state.loading = true;
    },
    LogoutUserSuccess: (state) => {
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;
    },
    LogoutUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = true;
    },
    admindeleteUserRequest: (state) => {
      state.loading = true;
    },
    admindeleteUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    admindeleteUserFailure: (state, action) => {
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

  export const getUserProfileReducer = createReducer(initialState, {
    userProfileRequest: (state) => {
      state.loading = true;
    },
    userProfileSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    userProfileFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  });

  export const allUsersReducer = createReducer(initialState, {
    allUsersRequest: (state) => {
      state.loading = true;
    },
    allUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    allUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    allClientsRequest: (state) => {
      state.loading = true;
    },
    allClientsSuccess: (state, action) => {
      state.loading = false;
      state.clients = action.payload;
    },
    allClientsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    allLawyersRequest: (state) => {
      state.loading = true;
    },
    allLawyersSuccess: (state, action) => {
      state.loading = false;
      state.lawyers = action.payload;
    },
    allLawyersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  });
  