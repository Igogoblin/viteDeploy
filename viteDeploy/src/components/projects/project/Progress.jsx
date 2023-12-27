// import ProgressBar from "react-bootstrap/ProgressBar";
import s from "./project.module.css";

function Progress(proc) {
  // const now = 60;
  // return <ProgressBar now={now} label={`${now}%`} />;
  return (
    <div className={s.mainProgress}>
      <div>
        <span>{proc}</span>
      </div>
    </div>
  );
}

export default Progress;
