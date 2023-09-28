import {
  CREATE_TASK_DATA,
  CREATE_TASK_FAILED,
  CREATE_TASK_SUCCESS,
} from "../constants/constants";
import { AppDispatch, AppThunkAction } from "../types/types";
import { createTask } from "../../API/api";
import { getProjectData } from "./getProject";

export type TCreateTaskAction = {
  readonly type: typeof CREATE_TASK_DATA;
};
export type TCreateTaskFailedAction = {
  readonly type: typeof CREATE_TASK_FAILED;
};
export type TCreateTaskSuccessAction = {
  readonly type: typeof CREATE_TASK_SUCCESS;
};

export type TCreateTaskActions =
  | TCreateTaskAction
  | TCreateTaskFailedAction
  | TCreateTaskSuccessAction;
export const createTaskData = (
  idProject: string,
  name: string,
  desc: string,
  priority: string,
  date: Date,
  id: number,
): AppThunkAction => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: CREATE_TASK_DATA,
    });
    createTask(idProject, name, desc, priority, date, id)
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
