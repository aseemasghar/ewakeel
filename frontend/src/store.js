import { configureStore } from "@reduxjs/toolkit";
import {caseReducer,allCasesReducer, myCasesReducer, newCaseReducer } from "./Reducers/Case";
import { userReducer,getUserProfileReducer } from "./Reducers/User";


const store = configureStore({
  reducer: {
user : userReducer,
case:caseReducer,
myCases : myCasesReducer,
newCase : newCaseReducer,
allCases: allCasesReducer,
userProfile: getUserProfileReducer,
  },
});

export default store;
