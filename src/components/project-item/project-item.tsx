import { FC } from "react";

type ProjectType = {
  name: string;
  create: Date;
};
type ProjectPropsType = {
  project: ProjectType;
};
export const ProjectItem: FC<ProjectPropsType> = ({ project }) => {
  return (
    <div>
      <span>&#128076;</span>
      <span>{project.name}</span>
      <span>{new Date(project.create).toLocaleDateString()}</span>
      <span>задачи 10 из 11</span>
      <button>Поделиться</button>
    </div>
  );
};
