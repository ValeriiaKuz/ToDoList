import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "../../hooks/hooks";
import { useEffect, useMemo, useState } from "react";
import { getProjectData } from "../../redux/actions/getProject";
import { NewTaskForm } from "../../components/forms/new-task-form";
import style from "./tasks.module.sass";
import { ProjectType, Status, TaskType } from "../../redux/types/types";
import { ProjectItem } from "../../components/project-item/project-item";
import { Modal } from "../../components/modal/modal";
import { TasksColumn } from "../../components/tasks-column/tasks-column";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Preloader } from "../../components/preloader/preloader";
import { Error } from "../../components/error/error";

export const Tasks = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  location.state = { background: location };
  const project: ProjectType = useSelector(
    (state) => state.project.projectData,
  );
  const { isError, isLoading } = useSelector((state) => state.project);
  const projectId = location.pathname.slice(1);
  const isCreatedNewTask = useSelector((state) => state.createTask.addedTask);
  const isStatusChanged = useSelector(
    (state) => state.changedStatus.changedStatus,
  );
  useEffect(() => {
    dispatch(getProjectData(location.pathname));
  }, [isCreatedNewTask, isStatusChanged]);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const searchValue = useSelector((state) => state.searchValue.searchValue);
  const tasksAfterSearch = (): Array<TaskType> => {
    return (
      project.tasks?.filter(
        (task) =>
          task.taskNumber.toString().includes(searchValue) ||
          task.name.toLowerCase().includes(searchValue.toLowerCase()),
      ) || []
    );
  };
  const [tasks, setTasks] = useState<Array<TaskType>>([]);
  useEffect(() => {
    if (project && project.tasks) {
      setTasks(searchValue ? tasksAfterSearch() : project.tasks);
    }
  }, [project, searchValue]);
  const { taskInQueue, taskInProgress, doneTask } = useMemo(() => {
    if (project && tasks) {
      const taskInQueue = tasks.filter((task) => {
        return task.status === Status.inQueue;
      });
      const taskInProgress = tasks.filter((task) => {
        return task.status === Status.inProgress;
      });
      const doneTask = tasks.filter((task) => {
        return task.status === Status.done;
      });
      return { taskInQueue, taskInProgress, doneTask };
    } else {
      return { taskInQueue: [], taskInProgress: [], doneTask: [] };
    }
  }, [project, tasks]);
  if (isLoading) {
    return <Preloader />;
  }
  if (isError) {
    return <Error />;
  }
  if (!project) {
    return <Preloader />;
  }
  return (
    <div className={style.contentWrapper}>
      <div className={style.projectInfoWrapper}>
        <ProjectItem project={project} />
        <button
          onClick={() => {
            setIsOpenForm(!isOpenForm);
          }}
        >
          <span>+ Добавить задачу</span>
        </button>
      </div>
      {isOpenForm && (
        <Modal
          onClose={setIsOpenForm}
          children={
            <NewTaskForm
              onClose={setIsOpenForm}
              projectId={projectId}
              taskId={project.tasks ? project.tasks.length + 1 : 1}
            />
          }
        />
      )}
      <div className={style.columnsWrapper}>
        {project.tasks && (
          <DndProvider backend={HTML5Backend}>
            <TasksColumn
              tasks={taskInQueue}
              title={Status.inQueue}
              projectId={projectId}
            />
            <TasksColumn
              tasks={taskInProgress}
              title={Status.inProgress}
              projectId={projectId}
            />
            <TasksColumn
              tasks={doneTask}
              title={Status.done}
              projectId={projectId}
            />
          </DndProvider>
        )}
      </div>
    </div>
  );
};
