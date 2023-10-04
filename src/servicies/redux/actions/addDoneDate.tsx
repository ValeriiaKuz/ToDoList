import {
  ADD_DONE_DATE_DATA,
  ADD_DONE_DATE_DATA_SUCCESS,
  ADD_DONE_DATE_DATA_FAILED,
} from "../constants/constants";
import { AppDispatch, AppThunkAction } from "../types/types";
import { addDoneDate } from "../../../API/api";

export type TAddDoneAction = {
  readonly type: typeof ADD_DONE_DATE_DATA;
};
export type TAddDoneFailedAction = {
  readonly type: typeof ADD_DONE_DATE_DATA_FAILED;
};
export type TAddDoneSuccessAction = {
  readonly type: typeof ADD_DONE_DATE_DATA_SUCCESS;
};
export type TAddDoneActions =
  | TAddDoneAction
  | TAddDoneFailedAction
  | TAddDoneSuccessAction;
export const addDoneDateData = (
  projectId: string,
  taskId: string,
  doneTime: Date,
): AppThunkAction => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: ADD_DONE_DATE_DATA,
    });
    addDoneDate(projectId, taskId, doneTime)
      .then((res) => {
        if (res && res.status === 200) {
          dispatch({
            type: ADD_DONE_DATE_DATA_SUCCESS,
          });
        } else {
          dispatch({
            type: ADD_DONE_DATE_DATA_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({
          type: ADD_DONE_DATE_DATA_FAILED,
        });
      });
  };
};
