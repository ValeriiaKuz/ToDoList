import { FC } from "react";
import { ProjectLogo } from "../logos/project-logo";
import { ProjectType } from "../../redux/types/types";
import style from "./project-item.module.sass";

type ProjectPropsType = {
  project: ProjectType;
};
export const ProjectItem: FC<ProjectPropsType> = ({ project }) => {
  return (
    <div className={style.projectWrapper}>
      <div className={style.project}>
        <ProjectLogo
          logo={project.logo}
          wrapperSize={`calc(var(--index)*3)`}
          logoSize={` calc(var(--index)*1.8)`}
        />
        <span className={style.projectName}>{project.name}</span>
      </div>

      <span>{new Date(project.create).toLocaleDateString()}</span>
      {project.tasks && <span>Таски:{project.tasks.length} </span>}

      <button>...</button>
    </div>
  );
};
