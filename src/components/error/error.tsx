import errorImg from "../../images/Poopybutthole.png";
import style from "./error.module.sass";
export const Error = () => {
  return (
    <div className={style.wrapper}>
      <img src={errorImg} alt={"error"} />
      <span>Ой-Ёй, что-то пошло не так </span>
    </div>
  );
};
