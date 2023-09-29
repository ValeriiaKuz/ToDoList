import { TAddDoneActions } from "../../actions/addDoneDate";
import {
  ADD_DONE_DATE_DATA,
  ADD_DONE_DATE_DATA_FAILED,
  ADD_DONE_DATE_DATA_SUCCESS,
} from "../../constants/constants";
export type TAddDoneState = {
  addedDoneDate: boolean;
  isLoading: boolean;
  isError: boolean;
};
const initialState: TAddDoneState = {
  isLoading: false,
  isError: false,
  addedDoneDate: false,
};
export const addDoneDateReducer = (
  state = initialState,
  action: TAddDoneActions,
): TAddDoneState => {
  switch (action.type) {
    case ADD_DONE_DATE_DATA: {
      return {
        ...state,
        addedDoneDate: false,
        isLoading: true,
        isError: false,
      };
    }
    case ADD_DONE_DATE_DATA_SUCCESS: {
      return {
        ...state,
        addedDoneDate: true,
        isLoading: false,
      };
    }
    case ADD_DONE_DATE_DATA_FAILED: {
      return {
        ...state,
        addedDoneDate: false,
        isError: true,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};
