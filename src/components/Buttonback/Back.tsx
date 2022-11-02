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
        <img src={backImg} alt="Обратно" />
      </div>
      <div
        className={styles["button-back"]}
        onClick={() => {
          history.go(1);
        }}
      >
        <img src={forwardImg} alt="Обратно" />
      </div>
    </div>
  );
}
