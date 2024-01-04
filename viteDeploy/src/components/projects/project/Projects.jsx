import { useEffect, useState } from "react";
import s from "./project.module.css";
import { useDispatch, useSelector } from "react-redux";
import NewProjForm from "./NewProjForm";
import { hideProject, showProject } from "../../../store/showSlice";
import ProjectItem from "./ProjectItem";
import { addProject } from "../../../store/projectSlice";
import ProjectList from "../projectList/ProjectList";

function Projects() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.project.projects);
  const showProj = useSelector((state) => state.showProject.showP);

  const themes = useSelector((state) => state.project.themes);
  console.log(themes);

  const [text, setText] = useState("");
  const [col, setCol] = useState("");

  const [proc, setProc] = useState(0); //for procent themes
  // function findProcent(ob) {
  //   if (ob.theme.length == 0) {
  //     return 0;
  //   }
  //   let allTheme = 0;
  //   ob.theme.map((item) => {
  //     item.completed ? allTheme++ : "";
  //     console.log(item);
  //   });
  //   console.log("allTheme", allTheme);
  //   console.log(ob);
  //   if (allTheme === 0) {
  //     return 0;
  //   }
  //   setProc((100 / ob.theme.length) * allTheme);
  //   return proc;
  // }
  // const options = {
  //   style: ""
  // }

  useEffect(() => {
    let rez = 0;
    themes.forEach((element) => {
      console.log(element);
      console.log(themes.length);
      if (element.completed) {
        rez++;
      }
      console.log(rez);
    });
    console.log("use effect");
    setProc((100 / themes.length) * rez);
  }, [proc]);

  //console.log(showProj);
  console.log(projects);
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

  console.log(projects);

  return (
    <div className={s.main}>
      <div className={s.project}>
        <h2>Projects</h2>
        <ul>
          {projects.map((project) => (
            <>
              <ProjectItem
                key={project.id}
                {...project}
                // pr={findProcent(project)}
                //{...proc}
                // value={findProcent(project)}
              />
              {/* {findProcent(project)} */}
              {console.log(project)}
              <div className={s.procMain}>
                <div className={s.procItem} style={{ width: proc }}></div>
              </div>
              {console.log(proc)}
              <hr></hr>
            </>
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
