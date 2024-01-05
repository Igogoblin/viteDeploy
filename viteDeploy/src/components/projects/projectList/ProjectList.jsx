import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThemeItem from "./ThemeItem";
import s from "./theme.module.css";
import NewThemeForm from "./NewThemeForm";
import { addTheme } from "../../../store/projectSlice";
// import { toast } from "react-toastify";

function ProjectList() {
  const themes = useSelector((state) => state.project.themes);
  const showProject = useSelector((state) => state.project.projects);
  // const project = useSelector((state)=>state.)
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const addThemeText = () => {
    if (text.length > 0) {
      dispatch(addTheme({ text }));
      setText("");
      // toast.info("you added new theme", {
      //   position: "bottom-center",
      // });
    }
  };
  // console.log(themes);
  // console.log(showProject);
  return (
    <div className={s.main}>
      <h3>
        {showProject.map((proj) => (proj.statusShow === true ? proj.text : ""))}
      </h3>
      <ul className={s.themeArea}>
        {themes.length > 0 ? (
          themes.map((theme) => (
            <ThemeItem key={theme.id} {...theme}></ThemeItem>
          ))
        ) : (
          <div>epmty themas</div>
        )}
      </ul>
      <div>
        <NewThemeForm
          text={text}
          handleInput={setText}
          handleSubmit={addThemeText}
        />
      </div>
    </div>
  );
}

export default ProjectList;
