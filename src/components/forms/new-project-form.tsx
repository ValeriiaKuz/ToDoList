import style from "./form.module.sass";
import { useInput } from "../../hooks/useInput";
import { useDispatch, useSelector } from "../../hooks/hooks";
import {
  createProjectData,
  deleteAfterCreation,
} from "../../redux/actions/createProject";
import { ChangeEvent, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const NewProjectForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const projectNameProps = useInput("");
  const isProjectCreated = useSelector(
    (state) => state.createProject.addedProject,
  );
  const onHandleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(createProjectData(projectNameProps.value, new Date()));
    projectNameProps.onChange({
      target: { value: "" },
    } as ChangeEvent<HTMLInputElement>);
  };
  useEffect(() => {
    if (isProjectCreated) {
      dispatch(deleteAfterCreation());
      navigate("/");
    }
  }, [isProjectCreated]);

  return (
    <form className={style.formWrapper} onSubmit={onHandleSubmit}>
      <div>
        <span>Название проекта:</span>
        <input
          type={"text"}
          value={projectNameProps.value}
          onChange={projectNameProps.onChange}
          required
        />
      </div>
      <button type={"submit"}>Создать проект</button>
    </form>
  );
};
