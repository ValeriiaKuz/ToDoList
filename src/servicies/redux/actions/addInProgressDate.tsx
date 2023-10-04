import { AppDispatch, AppThunkAction } from "../types/types";
import {
  ADD_IN_PROGRESS_DATE_DATA,
  ADD_IN_PROGRESS_DATE_DATA_FAILED,
  ADD_IN_PROGRESS_DATE_DATA_SUCCESS,
} from "../constants/constants";
import { addInProgressDate } from "../../../API/api";

export type TAddInProgressAction = {
  readonly type: typeof ADD_IN_PROGRESS_DATE_DATA;
};
export type TAddInProgressFailedAction = {
  readonly type: typeof ADD_IN_PROGRESS_DATE_DATA_FAILED;
};
export type TAddInProgressSuccessAction = {
  readonly type: typeof ADD_IN_PROGRESS_DATE_DATA_SUCCESS;
};
export type TAddInProgressActions =
  | TAddInProgressAction
  | TAddInProgressFailedAction
  | TAddInProgressSuccessAction;
export const addInProgressDateData = (
  projectId: string,
  taskId: string,
  startProgressTime: Date,
): AppThunkAction => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: ADD_IN_PROGRESS_DATE_DATA,
    });
    addInProgressDate(projectId, taskId, startProgressTime)
      .then((res) => {
        if (res && res.status === 200) {
          dispatch({
            type: ADD_IN_PROGRESS_DATE_DATA_SUCCESS,
          });
        } else {
          dispatch({
            type: ADD_IN_PROGRESS_DATE_DATA_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({
          type: ADD_IN_PROGRESS_DATE_DATA_FAILED,
        });
      });
  };
};
