import style from "./project-item.module.sass";
import { FC } from "react";

export const ProjectName: FC<{ name: string }> = ({ name }) => {
  return <span className={style.projectName}>{name}</span>;
};
