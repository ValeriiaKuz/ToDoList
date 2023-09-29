import { TAddInProgressActions } from "../../actions/addInProgressDate";
import {
  ADD_IN_PROGRESS_DATE_DATA,
  ADD_IN_PROGRESS_DATE_DATA_FAILED,
  ADD_IN_PROGRESS_DATE_DATA_SUCCESS,
} from "../../constants/constants";

export type TAddInProgressState = {
  addedInProgressDate: boolean;
  isLoading: boolean;
  isError: boolean;
};
const initialState: TAddInProgressState = {
  isLoading: false,
  isError: false,
  addedInProgressDate: false,
};
export const addInProgressDateReducer = (
  state = initialState,
  action: TAddInProgressActions,
): TAddInProgressState => {
  switch (action.type) {
    case ADD_IN_PROGRESS_DATE_DATA: {
      return {
        ...state,
        addedInProgressDate: false,
        isLoading: true,
        isError: false,
      };
    }
    case ADD_IN_PROGRESS_DATE_DATA_SUCCESS: {
      return {
        ...state,
        addedInProgressDate: true,
        isLoading: false,
      };
    }
    case ADD_IN_PROGRESS_DATE_DATA_FAILED: {
      return {
        ...state,
        addedInProgressDate: false,
        isError: true,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};
