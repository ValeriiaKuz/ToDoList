import { FC, PropsWithChildren } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./modal.module.sass";
export const ModalOverlay: FC<PropsWithChildren> = ({ children }) => {
  let navigate = useNavigate();
  let location = useLocation();
  return (
    <div
      className={style.overlay}
      onClick={() => {
        navigate(location.state?.background.pathname || "/");
      }}
    >
      {children}
    </div>
  );
};
