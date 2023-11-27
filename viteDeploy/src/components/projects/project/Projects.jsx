import { useState } from "react";
// import { toast } from "react-toastify";
import s from "./project.module.css";
import { useDispatch, useSelector } from "react-redux";
import NewProjForm from "./NewProjForm";
import { hideProject, showProject } from "../../../store/showSlice";
import ProjectItem from "./ProjectItem";
import { addProject } from "../../../store/projectSlice";
import ProjectList from "../projectList/ProjectList";

function Projects() {
  const projects = useSelector((state) => state.project.projects);
  const showProj = useSelector((state) => state.showProject.showP);
  const [text, setText] = useState("");
  const [col, setCol] = useState("");

  const dispatch = useDispatch();
  // const options = {
  //   style: ""
  // }
  const addTask = () => {
    if (text.length > 0) {
      dispatch(addProject({ text }));
      setText("");
      dispatch(hideProject());
      setCol("");
    } else {
      // toast.info("This field can't be empty", {
      //   position: "top-center",
      //   // style: {},
      //   progressStyle: { background: "red" },
      // });
      // setCol("red");
    }
  };

  return (
    <div className={s.main}>
      <div className={s.project}>
        <h2>Projects</h2>
        <ul>
          {projects.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </ul>

        <div>
          {showProj[0].showProject ? (
            <div>
              <NewProjForm
                text={text}
                handleInput={setText}
                handleSubmit={addTask}
              />
            </div>
          ) : (
            <button
              onClick={() => dispatch(showProject())}
              className={s.forNew}
              style={{ background: col }}
            >
              if need new project
            </button>
          )}
        </div>
      </div>
      <ProjectList />
    </div>
  );
}

export default Projects;
