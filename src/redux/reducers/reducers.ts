import { combineReducers } from "redux";
import { projectsReducer } from "./projects/getProjects";
import { createProjectReducer } from "./projects/createProject";

export const rootReducer = combineReducers({
  projects: projectsReducer,
  createProject: createProjectReducer,
});
