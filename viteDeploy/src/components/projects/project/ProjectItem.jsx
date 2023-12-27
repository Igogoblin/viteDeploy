/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeProject,
  changeStatus,
  removeProject,
  toggleComplete,
} from "../../../store/projectSlice";
import s from "./project.module.css";
// import ProgressBar from "react-bootstrap/ProgressBar";
//import Progress from "./Progress";

function ProjectItem({ id, text, completed }) {
  const [title, setTitle] = useState(text);
  // const [proc, setProc] = useState(0);
  const dispatch = useDispatch();

  // const now = 60;

  function changeProjectText(e) {
    if (e.target.value.length === 0) {
      setTitle(e.target.value);
    } else {
      setTitle(e.target.value);
      dispatch(changeProject(title));
    }
  }
  const textarea = document.querySelectorAll("textarea");
  textarea.forEach((t) => {
    t.addEventListener("keyup", function () {
      if (this.scrollTop > 0) {
        this.style.height = this.scrollHeight + "px";
      }
    });
  });
  // function forProgress() {
  //   // let proc = 0;
  //   if (theme.length == 0) {
  //     return setProc(0);
  //   }
  //   let count = 0;
  //   for (let i = 0; i < theme.length; i++) {
  //     if (theme[i].completed) {
  //       count++;
  //     }
  //   }
  //   setProc((100 / theme.length) * count);
  //   // return proc;
  // }
  // console.log(theme);
  // console.log(forProgress());
  return (
    <li onClick={() => dispatch(changeStatus({ id }))} className={s.proj}>
      <div className={s.projectItem}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleComplete({ id }))}
        />
        <textarea
          onChange={(e) => changeProjectText(e)}
          value={title}
          placeholder="пустое поле"
        ></textarea>
        <div
          onClick={() => dispatch(removeProject({ id }))}
          className={s.forDell}
        ></div>
      </div>
      {/* <Progress {...proc} /> */}
      {/* <ProgressBar
        now={now}
        label={`${now}%`}
        variant="info"
        style={{ border: "1px solid gray" }}

        // className={s.progressBar}
      /> */}
    </li>
  );
}

export default ProjectItem;
