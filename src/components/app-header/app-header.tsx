import { Logo } from "../logos/logo";
import { NavLink } from "react-router-dom";
import style from "./app-header.module.sass";
export const AppHeader = () => {
  return (
    <header className={style.header}>
      <NavLink to={"/"}>
        <Logo />
      </NavLink>
      <nav>
        <ul>
          <li className={style.link}>
            <NavLink to={"/"}>Проекты</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
