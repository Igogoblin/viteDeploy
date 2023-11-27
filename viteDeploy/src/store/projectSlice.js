import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: localStorage.getItem("projItem")
      ? JSON.parse(localStorage.getItem("projItem"))
      : [
          {
            id: 1,
            text: "example 1",
            completed: false,
            theme: [
              {
                id: 11,
                text: "business 1",
                completed: false,
              },
              {
                id: 12,
                text: "business 2",
                completed: false,
              },
              {
                id: 13,
                text: "business 3",
                completed: false,
              },
            ],
            statusShow: true,
          },
          {
            id: 2,
            text: "For example two",
            completed: false,
            theme: [],
            statusShow: false,
          },
          {
            id: 3,
            text: "Project third so-so",
            completed: false,
            theme: [],
            statusShow: false,
          },
        ],
    themes: [],
    flag: 1,
  },
  reducers: {
    addProject(state, action) {
      state.projects.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
        theme: [],
        statusShow: false,
      });
      localStorage.setItem("projItem", JSON.stringify(state.projects));
    },
    toggleComplete(state, action) {
      const toggledProject = state.projects.find(
        (proj) => proj.id === action.payload.id
      );
      toggledProject.completed = !toggledProject.completed;
      localStorage.setItem("projItem", JSON.stringify(state.projects));
    },
    removeProject(state, action) {
      state.projects = state.projects.filter(
        (proj) => proj.id !== action.payload.id
      );
      localStorage.setItem("projItem", JSON.stringify(state.projects));
    },
    changeStatus(state, action) {
      state.projects.forEach((proj) => {
        if (proj.id === action.payload.id) {
          proj.statusShow = true;
          state.themes.length = 0;
          state.themes.push(...proj.theme);
          state.flag = action.payload.id;
        } else {
          proj.statusShow = false;
        }
      });
      localStorage.setItem("projItem", JSON.stringify(state.projects));
    },
    changeProject(state, action) {
      state.projects.map((proj) =>
        proj.statusShow ? (proj.text = action.payload) : ""
      );
      localStorage.setItem("projItem", JSON.stringify(state.projects));
    },
    // ----------------------------------------------------------------------------------
    addTheme(state, action) {
      state.themes.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
      state.projects.forEach((proj) => {
        if (proj.id === state.flag) {
          proj.theme.length = 0;
          proj.theme.push(...state.themes);
        }
      });
      localStorage.setItem("projItem", JSON.stringify(state.projects));
    },
    toggleCompleteTheme(state, action) {
      const toggleTheme = state.themes.find(
        (theme) => theme.id === action.payload.id
      );
      toggleTheme.completed = !toggleTheme.completed;
      state.projects.forEach((proj) => {
        if (proj.id === state.flag) {
          proj.theme.length = 0;
          proj.theme.push(...state.themes);
        }
      });
      localStorage.setItem("projItem", JSON.stringify(state.projects));
    },
    removeTheme(state, action) {
      state.themes = state.themes.filter(
        (them) => them.id !== action.payload.id
      );
      state.projects.forEach((proj) => {
        if (proj.id === state.flag) {
          proj.theme.length = 0;
          proj.theme.push(...state.themes);
        }
      });
      localStorage.setItem("projItem", JSON.stringify(state.projects));
    },
    changeTheme(state, action) {
      state.themes.map((theme) => (theme.text = action.payload));
      state.projects.forEach((proj) => {
        if (proj.id === state.flag) {
          proj.theme.length = 0;
          proj.theme.push(...state.themes);
        }
      });
      localStorage.setItem("projItem", JSON.stringify(state.projects));
    },
  },
});

export const {
  addProject,
  toggleComplete,
  removeProject,
  changeProject,
  changeStatus,
  addTheme,
  toggleCompleteTheme,
  removeTheme,
  changeTheme,
} = projectSlice.actions;
export default projectSlice.reducer;
