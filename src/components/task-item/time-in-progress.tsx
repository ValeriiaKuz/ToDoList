import { FC } from "react";
import useTimeDifferent from "../../hooks/useTimeDiff";
import style from "./task-item.module.sass";
export const TimeInProgress: FC<{
  startProgressTime: Date;
}> = ({ startProgressTime }) => {
  const { days, hours, minutes } = useTimeDifferent(
    startProgressTime,
    new Date(),
  );
  return (
    <span className={style.time}>
      Время в работе: {days > 0 && `${days}д.`} {hours > 0 && `${hours}ч.`}
      {minutes > 0 && `${minutes}мин.`}
    </span>
  );
};
