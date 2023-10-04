import {
  GET_PROJECTS_DATA,
  GET_PROJECTS_DATA_FAILED,
  GET_PROJECTS_DATA_SUCCESS,
} from "../constants/constants";
import { ProjectType } from "../types/types";

export const putProjects = (projectsData: Array<ProjectType>) => {
  return {
    type: GET_PROJECTS_DATA_SUCCESS,
    projectsData: projectsData,
  };
};
export const failedProjects = () => {
  return {
    type: GET_PROJECTS_DATA_FAILED,
  };
};

// заменила код с thunk на Saga
export type TGetProjectsAction = {
  readonly type: typeof GET_PROJECTS_DATA;
};
export type TGetProjectsFailedAction = {
  readonly type: typeof GET_PROJECTS_DATA_FAILED;
};
export type TGetProjectsSuccessAction = {
  readonly type: typeof GET_PROJECTS_DATA_SUCCESS;
  projectsData: ReadonlyArray<any>;
};
export type TProjectsActions =
  | TGetProjectsAction
  | TGetProjectsFailedAction
  | TGetProjectsSuccessAction;

// export const getProjectsData = (): AppThunkAction => {
//   return function (dispatch: AppDispatch) {
//     dispatch({
//       type: GET_PROJECTS_DATA,
//     });
//     projectsRequest()
//       .then((res) => {
//         if (res.status === 200) {
//           const projectsArray: ProjectType[] = Object.keys(res.data).map(
//             (key) => {
//               const project = {
//                 id: key,
//                 ...res.data[key],
//               };
//
//               if (res.data[key].tasks) {
//                 project.tasks = Object.keys(res.data[key].tasks).map(
//                   (taskKey) => ({
//                     idTask: taskKey,
//                     ...res.data[key].tasks[taskKey],
//                   }),
//                 );
//               }
//
//               return project;
//             },
//           );
//
//           dispatch({
//             type: GET_PROJECTS_DATA_SUCCESS,
//             projectsData: projectsArray,
//           });
//         } else {
//           dispatch({
//             type: GET_PROJECTS_DATA_FAILED,
//           });
//         }
//       })
//       .catch((err) => {
//         console.log(err.message);
//         dispatch({
//           type: GET_PROJECTS_DATA_FAILED,
//         });
//       });
//   };
// };
