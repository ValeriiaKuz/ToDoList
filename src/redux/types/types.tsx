import { TProjectsActions } from "../actions/getProjects";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { store } from "../store";
import { TCreateProjectActions } from "../actions/createProject";
import { TProjectActions } from "../actions/getProject";
import { TCreateTaskActions } from "../actions/createTask";
import { Priority } from "../../components/forms/checkbox-form";
import { TChangeStatusActions } from "../actions/changeStatusInProgress";
import { TAddDoneActions } from "../actions/addDoneDate";
import { TAddInProgressActions } from "../actions/addInProgressDate";

type TApplicationActions =
  | TProjectsActions
  | TCreateProjectActions
  | TProjectActions
  | TCreateTaskActions
  | TChangeStatusActions
  | TAddDoneActions
  | TAddInProgressActions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<
  RootState,
  unknown,
  TApplicationActions
>;
export type AppThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TApplicationActions
>;
export type TaskType = {
  idTask: string;
  date: string;
  desc: string;
  taskNumber: number;
  name: string;
  priority: Priority;
  status: Status;
  doneTime?: string;
  startProgressTime?: string;
};

export type ProjectType = {
  create: string;
  name: string;
  logo: string;
  tasks?: TaskType[];
};
export enum Status {
  inQueue = "В очереди",
  inProgress = "В работе",
  done = "Завершено",
}
