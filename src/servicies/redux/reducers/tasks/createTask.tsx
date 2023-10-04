import {
  CREATE_TASK_DATA,
  CREATE_TASK_FAILED,
  CREATE_TASK_SUCCESS,
  DELETE_TASK_AFTER_CREATION,
} from "../../constants/constants";
import { TCreateTaskActions } from "../../actions/createTask";

export type TNewProjectState = {
  addedTask: boolean;
  isLoading: boolean;
  isError: boolean;
};
const initialState: TNewProjectState = {
  isLoading: false,
  isError: false,
  addedTask: false,
};
export const createTaskReducer = (
  state = initialState,
  action: TCreateTaskActions,
): TNewProjectState => {
  switch (action.type) {
    case CREATE_TASK_DATA: {
      return {
        ...state,
        addedTask: false,
        isLoading: true,
        isError: false,
      };
    }
    case CREATE_TASK_SUCCESS: {
      return {
        ...state,
        addedTask: true,
        isLoading: false,
      };
    }
    case CREATE_TASK_FAILED: {
      return {
        ...state,
        addedTask: false,
        isError: true,
        isLoading: false,
      };
    }
    case DELETE_TASK_AFTER_CREATION: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};
