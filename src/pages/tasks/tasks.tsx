import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "../../hooks/hooks";
import { useEffect } from "react";
import { getProjectData } from "../../redux/actions/getProject";
import { NewTaskForm } from "../../components/forms/new-task-form";
import style from "./tasks.module.sass";
import { TaskType } from "../../redux/types/types";
export const Tasks = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const project = useSelector((state) => state.project.projectData);
  const projectId = location.pathname.slice(1);
  const isCreatedNewTask = useSelector((state) => state.createTask.addedTask);
  useEffect(() => {
    dispatch(getProjectData(location.pathname));
  }, [isCreatedNewTask]);

  if (!project) {
    return <div>Что-то пошло не так. Попробуйте еще раз</div>;
  }
  return (
    <div className={style.contentWrapper}>
      <h1>{project.name}</h1>
      <span>{new Date(project.create).toLocaleDateString()}</span>
      {project.tasks && <span></span>}
      <div>
        <NewTaskForm projectId={projectId} taskId={0} />
      </div>
      <span>Задачи:</span>
      {project.tasks?.map((task: TaskType, index: number) => (
        <div key={index}>{task.name}</div>
      ))}
    </div>
  );
};
