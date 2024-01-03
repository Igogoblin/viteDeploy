/* eslint-disable react/prop-types */
import s from "./theme.module.css";

function NewThemeForm({ text, handleInput, handleSubmit }) {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <label>
      <input
        placeholder="new theme"
        value={text}
        onChange={(e) => handleInput(e.target.value)}
        onKeyDown={handleKeyPress}
      ></input>
      <button onClick={handleSubmit} className={s.addTheme}>
        Add theme
      </button>
    </label>
  );
}

export default NewThemeForm;
