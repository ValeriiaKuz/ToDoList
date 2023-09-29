import { FC } from "react";
import { ProjectLogo } from "../logos/project-logo";
import { ProjectType } from "../../redux/types/types";
import style from "./project-item.module.sass";
import { ProjectName } from "./project-name";

type ProjectPropsType = {
  project: ProjectType;
};
export const ProjectItem: FC<ProjectPropsType> = ({ project }) => {
  return (
    <>
      <div className={style.project}>
        <ProjectLogo
          logo={project.logo}
          wrapperSize={`calc(var(--index)*3)`}
          logoSize={` calc(var(--index)*1.8)`}
        />
        <div className={style.infoWrapper}>
          <ProjectName name={project.name} />
          <div className={style.projectInfo}>
            <span>{new Date(project.create).toLocaleDateString()}</span>
            {project.tasks && <span>Всего задач: {project.tasks.length} </span>}
          </div>
        </div>
      </div>
    </>
  );
};
