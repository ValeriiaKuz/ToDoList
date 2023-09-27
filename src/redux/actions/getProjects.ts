import {
  GET_PROJECTS_DATA,
  GET_PROJECTS_DATA_FAILED,
  GET_PROJECTS_DATA_SUCCESS,
} from "../constants/constants";
import { AppDispatch, AppThunkAction } from "../types/types";
import { projectsRequest } from "../../API/api";

export type TGetProjectsAction = {
  readonly type: typeof GET_PROJECTS_DATA;
};
export type TGetProjectsFailedAction = {
  readonly type: typeof GET_PROJECTS_DATA_FAILED;
};
export type TGetProjectsSuccessAction = {
  readonly type: typeof GET_PROJECTS_DATA_SUCCESS;
  projectsData: ReadonlyArray<any>;
};
export type TProjectsActions =
  | TGetProjectsAction
  | TGetProjectsFailedAction
  | TGetProjectsSuccessAction;
export const getProjectsData = (): AppThunkAction => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_PROJECTS_DATA,
    });
    projectsRequest()
      .then((res) => {
        if (res.status === 200) {
          const projectsArray = Object.keys(res.data).map((key) => ({
            id: key,
            ...res.data[key],
          }));
          dispatch({
            type: GET_PROJECTS_DATA_SUCCESS,
            projectsData: projectsArray,
          });
        } else {
          dispatch({
            type: GET_PROJECTS_DATA_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({
          type: GET_PROJECTS_DATA_FAILED,
        });
      });
  };
};
