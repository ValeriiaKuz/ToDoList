import { AddProjectButton } from "../../components/buttons/add-project-button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "../../hooks/hooks";
import { getProjectsData } from "../../redux/actions/getProjects";
import style from "../../components/app/App.module.sass";
import { ProjectItem } from "../../components/project-item/project-item";
import { NavLink } from "react-router-dom";
import { ProjectWrapper } from "../../components/project-item/project-wrapper";
import { Preloader } from "../../components/preloader/preloader";
import { Error } from "../../components/error/error";

export const Projects = () => {
  const dispatch = useDispatch();
  const { projectsData, isLoading, isError } = useSelector(
    (state) => state.projects,
  );

  useEffect(() => {
    dispatch(getProjectsData());
  }, []);
  if (isLoading) {
    return <Preloader />;
  }
  if (isError) {
    return <Error />;
  }
  return projectsData ? (
    <main className={style.contentWrapper}>
      <ProjectWrapper>
        <AddProjectButton />
      </ProjectWrapper>
      {projectsData.map((project, index) => (
        <NavLink to={`/${project.id}`} key={index}>
          <ProjectWrapper>
            <ProjectItem project={project} />
          </ProjectWrapper>
        </NavLink>
      ))}
    </main>
  ) : (
    <span>Loading</span>
  );
};
