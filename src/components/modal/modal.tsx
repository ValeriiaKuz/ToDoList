import ReactDOM from "react-dom";
import React, { FC, PropsWithChildren, useEffect } from "react";
import { ModalOverlay } from "./modal-overlay";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./modal.module.sass";
import CloseButton from "../buttons/close-button";
export const Modal: FC<PropsWithChildren> = ({ children }) => {
  let navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
    const escClose = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        navigate(location.state?.background.pathname || "/");
      }
    };
    document.addEventListener("keydown", escClose);
    return () => {
      document.removeEventListener("keydown", escClose);
    };
  }, []);
  return ReactDOM.createPortal(
    <ModalOverlay>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <CloseButton pathname={location.state?.background.pathname} />
        {children}
      </div>
    </ModalOverlay>,
    document.getElementById("modals")!,
  );
};
