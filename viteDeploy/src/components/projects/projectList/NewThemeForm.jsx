/* eslint-disable react/prop-types */
import s from "./theme.module.css";

function NewThemeForm({ text, handleInput, handleSubmit }) {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <label className={s.containerInputTheme}>
      <input
        placeholder="new theme"
        value={text}
        onChange={(e) => handleInput(e.target.value)}
        onKeyDown={handleKeyPress}
        className={s.inputNewTheme}
      ></input>
      <button onClick={handleSubmit} className={s.addTheme}>
        Add theme
      </button>
    </label>
  );
}

export default NewThemeForm;
