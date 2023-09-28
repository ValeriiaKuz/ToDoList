import {
  GET_PROJECT_DATA,
  GET_PROJECT_DATA_FAILED,
  GET_PROJECT_DATA_SUCCESS,
} from "../../constants/constants";
import { TProjectActions } from "../../actions/getProject";

export type TProjectState = {
  projectData: any;
  isLoading: boolean;
  isError: boolean;
};
const initialState: TProjectState = {
  isLoading: false,
  isError: false,
  projectData: null,
};
export const projectReducer = (
  state = initialState,
  action: TProjectActions,
): TProjectState => {
  switch (action.type) {
    case GET_PROJECT_DATA: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_PROJECT_DATA_SUCCESS: {
      return {
        ...state,
        projectData: action.projectData,
        isLoading: false,
      };
    }
    case GET_PROJECT_DATA_FAILED: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
