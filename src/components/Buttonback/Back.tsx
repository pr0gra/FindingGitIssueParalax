import styles from "./Back.module.scss";
import backImg from "../../assets/back.svg";
import forwardImg from "../../assets/forward.svg";

export function Back() {
  return (
    <div className={styles["container"]}>
      <div
        className={styles["button-back"]}
        onClick={() => {
          history.back();
        }}
      >
        <img className={styles["backImg"]} src={backImg} alt="backImg" />
      </div>
      <div
        className={styles["button-back"]}
        onClick={() => {
          history.go(1);
        }}
      >
        <img
          className={styles["forwardImg"]}
          src={forwardImg}
          alt="forwardImg"
        />
      </div>
    </div>
  );
}
