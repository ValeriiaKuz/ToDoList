import { useInput } from "../../hooks/useInput";
import { FC, useState } from "react";
import { CheckBoxForm } from "./checkbox-form";
import style from "./form.module.sass";
import { useDispatch } from "../../hooks/hooks";
import { createTaskData } from "../../redux/actions/createTask";
type NewTaskFormPropsType = {
  projectId: string;
  taskId: number;
};
export const NewTaskForm: FC<NewTaskFormPropsType> = ({
  projectId,
  taskId,
}) => {
  const dispatch = useDispatch();
  const nameProps = useInput("");
  const descriptionProps = useInput("");
  const [priority, setPriority] = useState<string | null>(null);
  const [isWarning, setIsWarning] = useState(false);
  const onHandleAddTask = () => {
    if (priority) {
      dispatch(
        createTaskData(
          projectId,
          nameProps.value,
          descriptionProps.value,
          priority,
          new Date(),
          taskId,
        ),
      );
    } else {
      setIsWarning(true);
    }
  };
  return (
    <>
      <span>Добавить задачу:</span>
      <form onSubmit={onHandleAddTask} className={style.taskForm}>
        <input
          placeholder={"Название задачи"}
          type={"text"}
          value={nameProps.value}
          onChange={nameProps.onChange}
          required
        />
        <input
          placeholder={"Описание"}
          type={"text"}
          value={descriptionProps.value}
          onChange={descriptionProps.onChange}
          required
        />
        <CheckBoxForm priority={priority} setPriority={setPriority} />
        <button type={"submit"} className={style.taskButton}>
          +
        </button>
        {isWarning && <span>Выберите преоритет</span>}
      </form>
    </>
  );
};
