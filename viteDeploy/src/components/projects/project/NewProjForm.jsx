/* eslint-disable react/prop-types */
import s from "./project.module.css";

function NewProjForm({ text, handleInput, handleSubmit }) {
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
        onKeyDown={handleKeyPress}
      ></input>
      <button onClick={handleSubmit} className={s.addProj}>
        Add project
      </button>
    </label>
  );
}

export default NewProjForm;
