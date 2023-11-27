import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projectSlice";
import showProjectReducer from "./showSlice";

export default configureStore({
  reducer: {
    project: projectReducer,
    showProject: showProjectReducer,
  },
});
