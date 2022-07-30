import { configureStore } from "@reduxjs/toolkit";
import {caseReducer, myCasesReducer, newCaseReducer } from "./Reducers/Case";
import { userReducer } from "./Reducers/User";


const store = configureStore({
  reducer: {
user : userReducer,
case:caseReducer,
myCases : myCasesReducer,
newCase : newCaseReducer,
  },
});

export default store;
