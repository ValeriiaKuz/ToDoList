import { NavLink, useLocation } from "react-router-dom";
import style from "./app-header.module.sass";
import { Search } from "../search/search";
export const AppHeader = () => {
  const location = useLocation();
  return (
    <header className={style.header}>
      <nav>
        <ul>
          <li className={style.link}>
            <NavLink to={"/"}>Все проекты</NavLink>
          </li>
        </ul>
      </nav>
      {location.pathname.includes("-") && <Search />}
    </header>
  );
};
