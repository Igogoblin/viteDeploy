/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeTheme,
  removeTheme,
  toggleCompleteTheme,
} from "../../../store/projectSlice";
import s from "./theme.module.css";

function ThemeItem({ id, text, completed }) {
  const [title, setTitle] = useState(text);
  const dispatch = useDispatch();
  function changeThemeText(e) {
    setTitle(e.target.value);
    dispatch(changeTheme(title));
  }
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleCompleteTheme({ id }))}
        className={s.themeComplete}
      ></input>
      <textarea onChange={(e) => changeThemeText(e)} value={title}></textarea>
      <div
        onClick={() => dispatch(removeTheme({ id }))}
        className={s.basket}
      ></div>
    </li>
  );
}

export default ThemeItem;
