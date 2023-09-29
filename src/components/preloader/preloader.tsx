import style from "./preloader.module.sass";
export const Preloader = () => {
  return (
    <div className={style.preloader}>
      <div className={style.loader}></div>
    </div>
  );
};
