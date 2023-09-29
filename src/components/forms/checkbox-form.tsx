import { ChangeEvent, FC } from "react";
import style from "./form.module.sass";
export enum Priority {
  veryHigh = "Очень высокий",
  high = "Высокий",
  normal = "Средний",
  low = "Низкий",
}
type checkBoxFormPropsType = {
  priority: string | null;
  setPriority: (priority: string | null) => void;
};
export const CheckBoxForm: FC<checkBoxFormPropsType> = ({
  priority,
  setPriority,
}) => {
  function checkPriority(e: ChangeEvent<HTMLInputElement>) {
    setPriority(e.target.value);
  }
  return (
    <div className={style.priority}>
      <span>Приоритет:</span>
      <div className={style.radios}>
        <label htmlFor="a">
          <input
            id="a"
            type="radio"
            value={Priority.veryHigh}
            checked={Priority.veryHigh === priority}
            onChange={checkPriority}
          />
          <span>{Priority.veryHigh}</span>
        </label>
        <label htmlFor="b">
          <input
            id="b"
            type="radio"
            value={Priority.high}
            checked={Priority.high === priority}
            onChange={checkPriority}
          />
          <span>{Priority.high}</span>
        </label>
        <label htmlFor="c">
          <input
            id="c"
            type="radio"
            value={Priority.normal}
            checked={Priority.normal === priority}
            onChange={checkPriority}
          />
          <span>{Priority.normal}</span>
        </label>
        <label htmlFor="d">
          <input
            id="d"
            type="radio"
            value={Priority.low}
            checked={Priority.low === priority}
            onChange={checkPriority}
          />
          <span>{Priority.low}</span>
        </label>
      </div>
    </div>
  );
};
