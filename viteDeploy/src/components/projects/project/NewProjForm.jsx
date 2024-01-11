/* eslint-disable react/prop-types */
import s from "./project.module.css";
// import { useDispatch } from "react-redux";
// import { changeStatus } from "../../../store/projectSlice";

function NewProjForm({ text, handleInput, handleSubmit }) {
  // const dispatch = useDispatch();
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <label>
      <input
        placeholder="input new project"
        value={text}
        onChange={(e) => handleInput(e.target.value)}
        // onClick={() => dispatch(changeStatus())}
        onKeyDown={handleKeyPress}
      ></input>
      <button onClick={handleSubmit} className={s.addProj}>
        Add project
      </button>
    </label>
  );
}

export default NewProjForm;
