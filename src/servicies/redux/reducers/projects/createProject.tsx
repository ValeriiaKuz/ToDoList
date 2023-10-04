import {
  CREATE_PROJECT_DATA,
  CREATE_PROJECT_FAILED,
  CREATE_PROJECT_SUCCESS,
  DELETE_AFTER_CREATION,
} from "../../constants/constants";
import { TCreateProjectActions } from "../../actions/createProject";

export type TNewProjectState = {
  addedProject: boolean;
  isLoading: boolean;
  isError: boolean;
};
const initialState: TNewProjectState = {
  isLoading: false,
  isError: false,
  addedProject: false,
};
export const createProjectReducer = (
  state = initialState,
  action: TCreateProjectActions,
): TNewProjectState => {
  switch (action.type) {
    case CREATE_PROJECT_DATA: {
      return {
        ...state,
        addedProject: false,
        isLoading: true,
        isError: false,
      };
    }
    case CREATE_PROJECT_SUCCESS: {
      return {
        ...state,
        addedProject: true,
        isLoading: false,
      };
    }
    case CREATE_PROJECT_FAILED: {
      return {
        ...state,
        addedProject: false,
        isError: true,
        isLoading: false,
      };
    }
    case DELETE_AFTER_CREATION: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        addedProject: false,
      };
    }
    default: {
      return state;
    }
  }
};
