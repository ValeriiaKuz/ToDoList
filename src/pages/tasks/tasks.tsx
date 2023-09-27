import { useLocation } from "react-router-dom";
import { useSelector } from "../../hooks/hooks";
import { useInput } from "../../hooks/useInput";
import { ChangeEvent, useState } from "react";

export const Tasks = () => {
  const location = useLocation();
  const projects = useSelector((state) => state.projects.projectsData);
  const project = projects.find((p) => p.id === location.pathname.slice(1));
  const taskProps = useInput("");
  const [tasks, setTasks] = useState<Array<string>>([]);
  const addTask = () => {
    setTasks([...tasks, taskProps.value]);
  };
  const onHandleAddTask = () => {
    if (taskProps.value.length > 0) {
      addTask();
      taskProps.onChange({
        target: { value: "" },
      } as ChangeEvent<HTMLInputElement>);
    } else {
    }
  };

  if (!project) {
    return <div>Что-то пошло не так. Попробуйте еще раз</div>;
  }
  return (
    <div>
      {project.name}
      <div>
        <span>Добавить задачу:</span>
        <form>
          <input
            type={"text"}
            value={taskProps.value}
            onChange={taskProps.onChange}
          />
          <button onClick={onHandleAddTask}>+</button>
        </form>
      </div>
      {tasks.map((task, index) => (
        <div key={index}>{task}</div>
      ))}
    </div>
  );
};
