import {
  CREATE_PROJECT_DATA,
  CREATE_PROJECT_FAILED,
  CREATE_PROJECT_SUCCESS,
  DELETE_AFTER_CREATION,
} from "../constants/constants";
import { AppDispatch, AppThunkAction } from "../types/types";
import { createProject } from "../../../API/api";

export type TCreateProjectAction = {
  readonly type: typeof CREATE_PROJECT_DATA;
};
export type TCreateProjectFailedAction = {
  readonly type: typeof CREATE_PROJECT_FAILED;
};
export type TCreateProjectSuccessAction = {
  readonly type: typeof CREATE_PROJECT_SUCCESS;
};
export type TDeleteAfterCreationAction = {
  readonly type: typeof DELETE_AFTER_CREATION;
};
export type TCreateProjectActions =
  | TCreateProjectAction
  | TCreateProjectFailedAction
  | TCreateProjectSuccessAction
  | TDeleteAfterCreationAction;
export const createProjectData = (
  name: any,
  createTime: Date,
  logo: string,
): AppThunkAction => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: CREATE_PROJECT_DATA,
    });
    createProject(name, createTime, logo)
      .then((res) => {
        if (res && res.status === 200) {
          dispatch({
            type: CREATE_PROJECT_SUCCESS,
          });
        } else {
          dispatch({
            type: CREATE_PROJECT_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({
          type: CREATE_PROJECT_FAILED,
        });
      });
  };
};
export const deleteProjectAfterCreation = () => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: DELETE_AFTER_CREATION });
  };
};
