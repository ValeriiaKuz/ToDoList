import { TProjectsActions } from "../../actions/getProjects";
import {
  GET_PROJECTS_DATA,
  GET_PROJECTS_DATA_FAILED,
  GET_PROJECTS_DATA_SUCCESS,
} from "../../constants/constants";

export type TProjectsState = {
  projectsData: ReadonlyArray<any>;
  isLoading: boolean;
  isError: boolean;
};
const initialState: TProjectsState = {
  isLoading: false,
  isError: false,
  projectsData: [],
};
export const projectsReducer = (
  state = initialState,
  action: TProjectsActions,
): TProjectsState => {
  switch (action.type) {
    case GET_PROJECTS_DATA: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_PROJECTS_DATA_SUCCESS: {
      return {
        ...state,
        projectsData: action.projectsData,
        isLoading: false,
      };
    }
    case GET_PROJECTS_DATA_FAILED: {
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
