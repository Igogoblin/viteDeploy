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
            percent: 0,
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
            percent: 0,
            theme: [],
            statusShow: false,
          },
          {
            id: 3,
            text: "Project third so-so",
            completed: false,
            percent: 0,
            theme: [],
            statusShow: false,
          },
        ],
    themes: localStorage.getItem("projTheme")
      ? JSON.parse(localStorage.getItem("projTheme"))
      : [],
    // themes: [],
    flag: 1,
  },
  reducers: {
    addProject(state, action) {
      state.projects.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
        percent: 0,
        theme: [],
        statusShow: false,
      });
      state.themes = [];
      localStorage.setItem("projItem", JSON.stringify(state.projects));
      localStorage.setItem("projTheme", JSON.stringify(state.themes));
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
      state.themes = [];
      localStorage.setItem("projItem", JSON.stringify(state.projects));
      localStorage.setItem("projTheme", JSON.stringify(state.themes));
    },
    changeStatus(state, action) {
      state.projects.forEach((proj) => {
        if (proj.id === action.payload.id) {
          proj.statusShow = true;
          state.themes.length = 0;
          state.themes.push(...proj.theme);
          state.flag = action.payload.id;
          console.log(proj.percent);
        } else {
          proj.statusShow = false;
        }
      });
      localStorage.setItem("projItem", JSON.stringify(state.projects));
      localStorage.setItem("projTheme", JSON.stringify(state.themes));
    },
    changeProject(state, action) {
      state.projects.map((proj) =>
        proj.statusShow ? (proj.text = action.payload) : ""
      );
      localStorage.setItem("projItem", JSON.stringify(state.projects));
    },
    changePercent(state) {
      let rez = 0;
      state.projects.forEach((proj) => {
        if (proj.id === state.flag) {
          proj.theme.forEach((theme) => {
            if (theme.completed == true) {
              rez++;
            }
          });
          proj.percent = ((100 / proj.theme.length) * rez).toFixed(2);
          if (rez === 0) {
            proj.percent = 0;
          }
        }
        rez = 0;
      });
      console.log("get percent from theme");
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
      localStorage.setItem("projTheme", JSON.stringify(state.themes));
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
      localStorage.setItem("projTheme", JSON.stringify(state.themes));
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

      localStorage.setItem("projTheme", JSON.stringify(state.themes));
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
      localStorage.setItem("projTheme", JSON.stringify(state.themes));
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
  changePercent,
} = projectSlice.actions;
export default projectSlice.reducer;
