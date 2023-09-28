import {
  GET_PROJECT_DATA,
  GET_PROJECT_DATA_FAILED,
  GET_PROJECT_DATA_SUCCESS,
} from "../constants/constants";
import { AppDispatch, AppThunkAction, ProjectType } from "../types/types";
import { projectRequest } from "../../API/api";

export type TGetProjectAction = {
  readonly type: typeof GET_PROJECT_DATA;
};
export type TGetProjectFailedAction = {
  readonly type: typeof GET_PROJECT_DATA_FAILED;
};
export type TGetProjectSuccessAction = {
  readonly type: typeof GET_PROJECT_DATA_SUCCESS;
  projectData: ProjectType;
};
export type TProjectActions =
  | TGetProjectAction
  | TGetProjectFailedAction
  | TGetProjectSuccessAction;
export const getProjectData = (id: string): AppThunkAction => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_PROJECT_DATA,
    });
    projectRequest(id)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.tasks) {
            const tasksArray = Object.keys(res.data.tasks).map((key) => ({
              idTask: key,
              ...res.data.tasks[key],
            }));
            dispatch({
              type: GET_PROJECT_DATA_SUCCESS,
              projectData: {
                create: res.data.create,
                name: res.data.name,
                logo: res.data.logo,
                tasks: tasksArray,
              },
            });
          } else {
            dispatch({
              type: GET_PROJECT_DATA_SUCCESS,
              projectData: res.data,
            });
          }
        } else {
          dispatch({
            type: GET_PROJECT_DATA_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({
          type: GET_PROJECT_DATA_FAILED,
        });
      });
  };
};
