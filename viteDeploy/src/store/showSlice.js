import { createSlice } from "@reduxjs/toolkit";

const showSlice = createSlice({
  name: "show",
  initialState: {
    showP: [{ showProject: false }],
  },
  reducers: {
    showProject(state) {
      state.showP[0].showProject = true;
    },
    hideProject(state) {
      state.showP[0].showProject = false;
    },
  },
});

export const { showProject, hideProject } = showSlice.actions;
export default showSlice.reducer;
