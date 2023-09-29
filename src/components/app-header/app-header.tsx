import { NavLink } from "react-router-dom";
import style from "./app-header.module.sass";
export const AppHeader = () => {
  return (
    <header className={style.header}>
      <nav>
        <ul>
          <li className={style.link}>
            <NavLink to={"/"}>Все проекты</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
