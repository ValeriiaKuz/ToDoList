import { useEffect, useState } from "react";

const useTimeDifferent = (createTime: Date, time: Date) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const timeInProgress = time.getTime() - createTime.getTime();

    const newDays = Math.floor(timeInProgress / (1000 * 60 * 60 * 24));
    const newHours = Math.floor((timeInProgress / (1000 * 60 * 60)) % 24);
    const newMinutes = Math.floor((timeInProgress / (1000 * 60)) % 60);

    setDays(newDays);
    setHours(newHours);
    setMinutes(newMinutes);
  }, [createTime, time]);

  return { days, hours, minutes };
};

export default useTimeDifferent;
