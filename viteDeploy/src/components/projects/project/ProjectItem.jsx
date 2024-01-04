/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

  const themes = useSelector((state) => state.project.themes);
  const showProject = useSelector((state) => state.project.projects);
  console.log(themes);
  console.log(showProject);
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
      {/* <div className={s.procMain}>
        <div className={s.procItem}></div>
      </div> */}
    </li>
  );
}

export default ProjectItem;
