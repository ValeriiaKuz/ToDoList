import { AddProjectButton } from "../../components/buttons/add-project-button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "../../hooks/hooks";
import { getProjectsData } from "../../redux/actions/getProjects";
import style from "../../components/app/App.module.sass";
import { ProjectItem } from "../../components/project-item/project-item";
import { NavLink } from "react-router-dom";

export const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projectsData);
  useEffect(() => {
    dispatch(getProjectsData());
  }, []);
  return projects ? (
    <main className={style.contentWrapper}>
      <section>
        {projects.map((project, index) => (
          <NavLink to={`/${project.id}`} key={index}>
            <ProjectItem project={project} />
          </NavLink>
        ))}
        <AddProjectButton />
      </section>
    </main>
  ) : (
    <span>Loading</span>
  );
};
