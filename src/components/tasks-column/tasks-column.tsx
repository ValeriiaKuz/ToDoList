import style from "./task-column.module.sass";
import { FC } from "react";
import { TaskItem } from "../task-item/task-item";
import { useDrop } from "react-dnd";
import { useDispatch } from "../../hooks/hooks";
import { Status, TaskType } from "../../servicies/redux/types/types";
import { changeStatusData } from "../../servicies/redux/actions/changeStatusInProgress";
import { addInProgressDateData } from "../../servicies/redux/actions/addInProgressDate";
import { addDoneDateData } from "../../servicies/redux/actions/addDoneDate";

export const TasksColumn: FC<{
  tasks: TaskType[];
  title: string;
  projectId: string;
}> = ({ tasks, title, projectId }) => {
  const dispatch = useDispatch();
  const [, drop] = useDrop({
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
