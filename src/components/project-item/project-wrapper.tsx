import style from "./project-item.module.sass";
import { FC, PropsWithChildren } from "react";

export const ProjectWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={style.projectWrapper}>{children}</div>;
};
