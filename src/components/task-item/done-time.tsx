import { FC } from "react";
import useTimeDifferent from "../../hooks/useTimeDiff";
import style from "./task-item.module.sass";

export const DoneTime: FC<{
  doneDate: Date;
  startProgressTime: Date;
}> = ({ doneDate, startProgressTime }) => {
  const { days, hours, minutes } = useTimeDifferent(
    startProgressTime,
    doneDate,
  );
  return (
    <>
      <span className={style.time}>
        Завершена {doneDate.toLocaleDateString()}
      </span>
      <span className={style.time}>
        Сделана за: {days > 0 && `${days}д.`} {hours > 0 && `${hours}ч.`}
        {minutes > 0 && `${minutes}мин.`}
      </span>
    </>
  );
};
