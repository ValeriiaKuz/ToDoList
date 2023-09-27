import { NavLink } from "react-router-dom";

export const AddProjectButton = () => {
  const addProject = () => {};
  return (
    <NavLink to={"/new_project"}>
      <button onClick={addProject}>Добавить новый проект</button>
    </NavLink>
  );
};
