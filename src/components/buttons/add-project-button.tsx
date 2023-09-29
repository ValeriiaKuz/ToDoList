import { NavLink } from "react-router-dom";
import style from "./buttons.module.sass";
export const AddProjectButton = () => {
  const addProject = () => {};
  return (
    <NavLink to={"/new_project"} className={style.newProjectButton}>
      <button onClick={addProject}>Добавить новый проект</button>
    </NavLink>
  );
};
