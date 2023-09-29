import style from "./task-column.module.sass";
import { FC } from "react";
import { Status, TaskType } from "../../redux/types/types";
import { TaskItem } from "../task-item/task-item";
import { useDrop } from "react-dnd";
import { useDispatch } from "../../hooks/hooks";
import { changeStatusData } from "../../redux/actions/changeStatusInProgress";
import { addDoneDateData } from "../../redux/actions/addDoneDate";
import { addInProgressDateData } from "../../redux/actions/addInProgressDate";

export const TasksColumn: FC<{
  tasks: TaskType[];
  title: string;
  projectId: string;
}> = ({ tasks, title, projectId }) => {
  const dispatch = useDispatch();
  const [{ isOver }, drop] = useDrop({
    accept: "task",
    drop: (item: { task: TaskType }) => {
      if (title === Status.inProgress && item.task.status === Status.inQueue) {
        dispatch(
          changeStatusData(projectId, item.task.idTask, Status.inProgress),
        );
        dispatch(
          addInProgressDateData(projectId, item.task.idTask, new Date()),
        );
      }
      if (title === Status.done && item.task.status === Status.inProgress) {
        dispatch(changeStatusData(projectId, item.task.idTask, Status.done));
        dispatch(addDoneDateData(projectId, item.task.idTask, new Date()));
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <section className={style.wrapper} ref={drop}>
      <span className={style.columnTitle}> {title}</span>
      <div className={style.taskWrapper}>
        {tasks.map((task) => (
          <TaskItem task={task} key={task.taskNumber} />
        ))}
      </div>
    </section>
  );
};
