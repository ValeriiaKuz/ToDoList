import { FC } from "react";
import style from "./task-item.module.sass";
import { Priority } from "../forms/checkbox-form";
import { TimeInProgress } from "./time-in-progress";
import { useDrag } from "react-dnd";
import { DoneTime } from "./done-time";
import { Status, TaskType } from "../../servicies/redux/types/types";
export const TaskItem: FC<{ task: TaskType }> = ({ task }) => {
  const createDate = new Date(task.date);
  const priorityColor = () => {
    switch (task.priority) {
      case Priority.low: {
        return "#7BFF67FF";
      }
      case Priority.normal: {
        return "#FFF567FF";
      }
      case Priority.high: {
        return "#FF882CFF";
      }
      case Priority.veryHigh: {
        return "#FF2222FF";
      }
      default: {
        return "grey";
      }
    }
  };
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { task: task },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      className={style.taskWrapper}
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <span className={style.name}>{task.name}</span>
      <p className={style.desc}>{task.desc}</p>
      <span className={style.priority}>
        Приоритет:{" "}
        <span style={{ color: priorityColor() }}>{task.priority}</span>
      </span>
      <span className={style.date}>
        Создана: {createDate.toLocaleDateString()}
      </span>
      <span className={style.number}>{task.taskNumber}</span>
      {task.status === Status.inProgress && (
        <TimeInProgress startProgressTime={new Date(task.startProgressTime!)} />
      )}
      {task.status === Status.done && (
        <DoneTime
          startProgressTime={new Date(task.startProgressTime!)}
          doneDate={new Date(task.doneTime!)}
        />
      )}
    </div>
  );
};
