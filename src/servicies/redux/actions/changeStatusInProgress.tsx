import {
  CHANGE_STATUS_DATA,
  CHANGE_STATUS_DATA_FAILED,
  CHANGE_STATUS_DATA_SUCCESS,
} from "../constants/constants";
import { AppDispatch, AppThunkAction, Status } from "../types/types";
import { changeStatus } from "../../../API/api";

export type TChangeStatusAction = {
  readonly type: typeof CHANGE_STATUS_DATA;
};
export type TChangeStatusFailedAction = {
  readonly type: typeof CHANGE_STATUS_DATA_FAILED;
};
export type TChangeStatusSuccessAction = {
  readonly type: typeof CHANGE_STATUS_DATA_SUCCESS;
};
export type TChangeStatusActions =
  | TChangeStatusAction
  | TChangeStatusFailedAction
  | TChangeStatusSuccessAction;
export const changeStatusData = (
  projectId: string,
  taskId: string,
  status: Status,
): AppThunkAction => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: CHANGE_STATUS_DATA,
    });
    changeStatus(projectId, taskId, status)
      .then((res) => {
        if (res && res.status === 200) {
          dispatch({
            type: CHANGE_STATUS_DATA_SUCCESS,
          });
        } else {
          dispatch({
            type: CHANGE_STATUS_DATA_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({
          type: CHANGE_STATUS_DATA_FAILED,
        });
      });
  };
};
