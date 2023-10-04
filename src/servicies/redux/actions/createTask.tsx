import {
  CREATE_TASK_DATA,
  CREATE_TASK_FAILED,
  CREATE_TASK_SUCCESS,
  DELETE_TASK_AFTER_CREATION,
} from "../constants/constants";
import { AppDispatch, AppThunkAction, Status } from "../types/types";
import { getProjectData } from "./getProject";
import { createTask } from "../../../API/api";

export type TCreateTaskAction = {
  readonly type: typeof CREATE_TASK_DATA;
};
export type TCreateTaskFailedAction = {
  readonly type: typeof CREATE_TASK_FAILED;
};
export type TCreateTaskSuccessAction = {
  readonly type: typeof CREATE_TASK_SUCCESS;
};
export type TDeleteTaskAfterCreationAction = {
  readonly type: typeof DELETE_TASK_AFTER_CREATION;
};

export type TCreateTaskActions =
  | TCreateTaskAction
  | TCreateTaskFailedAction
  | TCreateTaskSuccessAction
  | TDeleteTaskAfterCreationAction;
export const createTaskData = (
  idProject: string,
  name: string,
  desc: string,
  priority: string,
  date: Date,
  id: number,
  status: Status,
): AppThunkAction => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: CREATE_TASK_DATA,
    });
    createTask(idProject, name, desc, priority, date, id, status)
      .then((res) => {
        if (res && res.status === 200) {
          dispatch({
            type: CREATE_TASK_SUCCESS,
          });
          dispatch(getProjectData(idProject));
        } else {
          dispatch({
            type: CREATE_TASK_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({
          type: CREATE_TASK_FAILED,
        });
      });
  };
};

export const deleteTaskAfterCreation = () => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: DELETE_TASK_AFTER_CREATION });
  };
};
