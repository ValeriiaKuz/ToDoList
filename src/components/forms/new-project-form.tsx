import style from "./form.module.sass";
import { useInput } from "../../hooks/useInput";
import { useDispatch, useSelector } from "../../hooks/hooks";
import {
  createProjectData,
  deleteAfterCreation,
} from "../../redux/actions/createProject";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogoForm } from "./logoform";
// @ts-ignore
export const NewProjectForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logo, setLogo] = useState(`&#10133;`);
  const projectNameProps = useInput("");
  const isProjectCreated = useSelector(
    (state) => state.createProject.addedProject,
  );
  const onHandleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(createProjectData(projectNameProps.value, new Date(), logo));
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
      <div className={style.inputsWrapper}>
        <LogoForm logo={logo} setLogo={setLogo} />
        <input
          type={"text"}
          value={projectNameProps.value}
          onChange={projectNameProps.onChange}
          placeholder={"Введите название проекта"}
          required
        />
      </div>
      <button type={"submit"} className={style.projectButton}>
        Создать проект
      </button>
    </form>
  );
};
