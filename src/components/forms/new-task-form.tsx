import { useInput } from "../../hooks/useInput";
import { FC, FormEvent, useEffect, useState } from "react";
import { CheckBoxForm } from "./checkbox-form";
import style from "./form.module.sass";
import { useDispatch, useSelector } from "../../hooks/hooks";

import classNames from "classnames";
import {
  createTaskData,
  deleteTaskAfterCreation,
} from "../../servicies/redux/actions/createTask";
import { Status } from "../../servicies/redux/types/types";

type NewTaskFormPropsType = {
  projectId: string;
  taskId: number;
  onClose: (isOpen: boolean) => void;
};
export const NewTaskForm: FC<NewTaskFormPropsType> = ({
  projectId,
  taskId,
  onClose,
}) => {
  const dispatch = useDispatch();
  const nameProps = useInput("");
  const descriptionProps = useInput("");
  const [priority, setPriority] = useState<string | null>(null);
  const [isWarning, setIsWarning] = useState(false);
  const isTaskCreated = useSelector((state) => state.createTask.addedTask);
  const onHandleAddTask = (e: FormEvent) => {
    e.preventDefault();
    if (priority) {
      dispatch(
        createTaskData(
          projectId,
          nameProps.value,
          descriptionProps.value,
          priority,
          new Date(),
          taskId,
          Status.inQueue,
        ),
      );
    } else {
      setIsWarning(true);
    }
  };
  useEffect(() => {
    if (isTaskCreated) {
      dispatch(deleteTaskAfterCreation());
      onClose(false);
    }
  }, [isTaskCreated]);
  return (
    <>
      <form onSubmit={onHandleAddTask} className={style.taskForm}>
        <input
          placeholder={"Название задачи"}
          type={"text"}
          value={nameProps.value}
          onChange={nameProps.onChange}
          required
          className={classNames(style.task, style.name)}
        />
        <textarea
          placeholder={"Описание"}
          value={descriptionProps.value}
          onChange={descriptionProps.onChange}
          required
          className={classNames(style.task, style.desc)}
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
