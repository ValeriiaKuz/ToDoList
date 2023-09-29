import { FC, PropsWithChildren } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./modal.module.sass";
import { OnCloseType } from "./modal";
export const ModalOverlay: FC<PropsWithChildren<OnCloseType>> = ({
  children,
  onClose,
}) => {
  let navigate = useNavigate();
  let location = useLocation();
  return (
    <div
      className={style.overlay}
      onClick={() => {
        navigate(location.state?.background.pathname || "/");
        if (onClose) {
          onClose(false);
        }
      }}
    >
      {children}
    </div>
  );
};
