import { combineReducers } from "redux";
import { projectsReducer } from "./projects/getProjects";
import { createProjectReducer } from "./projects/createProject";
import { projectReducer } from "./projects/getProject";
import { createTaskReducer } from "./tasks/createTask";

export const rootReducer = combineReducers({
  projects: projectsReducer,
  project: projectReducer,
  createProject: createProjectReducer,
  createTask: createTaskReducer,
});
