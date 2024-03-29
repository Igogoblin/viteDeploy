/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeTheme,
  removeTheme,
  toggleCompleteTheme,
  changePercent,
} from "../../../store/projectSlice";
import s from "./theme.module.css";

function ThemeItem({ id, text, completed }) {
  const [title, setTitle] = useState(text);
  const dispatch = useDispatch();
  function changeThemeText(e) {
    setTitle(e.target.value);
    dispatch(changeTheme(title));
  }
  function forChangeThemeComplete() {
    dispatch(toggleCompleteTheme({ id }));
    dispatch(changePercent({ id }));
  }
  function forDeleteTheme() {
    dispatch(removeTheme({ id }));
    dispatch(changePercent());
  }
  return (
    <li className={s.forTheme}>
      <input
        type="checkbox"
        checked={completed}
        // onChange={() => dispatch(toggleCompleteTheme({ id }))}
        onChange={(e) => forChangeThemeComplete(e)}
        className={s.themeComplete}
      ></input>
      <textarea
        onChange={(e) => changeThemeText(e)}
        value={title}
        className={s.textTheme}
      ></textarea>
      <div
        // onClick={() => dispatch(removeTheme({ id }))}
        onClick={forDeleteTheme}
        className={s.basket}
      ></div>
    </li>
  );
}

export default ThemeItem;
