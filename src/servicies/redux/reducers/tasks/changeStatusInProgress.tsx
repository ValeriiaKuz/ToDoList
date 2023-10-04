import {
  CHANGE_STATUS_DATA,
  CHANGE_STATUS_DATA_FAILED,
  CHANGE_STATUS_DATA_SUCCESS,
} from "../../constants/constants";
import { TChangeStatusActions } from "../../actions/changeStatusInProgress";

export type TChangedStatusState = {
  changedStatus: boolean;
  isLoading: boolean;
  isError: boolean;
};
const initialState: TChangedStatusState = {
  isLoading: false,
  isError: false,
  changedStatus: false,
};
export const changeStatusReducer = (
  state = initialState,
  action: TChangeStatusActions,
): TChangedStatusState => {
  switch (action.type) {
    case CHANGE_STATUS_DATA: {
      return {
        ...state,
        changedStatus: false,
        isLoading: true,
        isError: false,
      };
    }
    case CHANGE_STATUS_DATA_SUCCESS: {
      return {
        ...state,
        changedStatus: true,
        isLoading: false,
      };
    }
    case CHANGE_STATUS_DATA_FAILED: {
      return {
        ...state,
        changedStatus: false,
        isError: true,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};
