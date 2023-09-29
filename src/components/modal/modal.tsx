import ReactDOM from "react-dom";
import React, { FC, PropsWithChildren, useEffect } from "react";
import { ModalOverlay } from "./modal-overlay";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./modal.module.sass";
import CloseButton from "../buttons/close-button";
export type OnCloseType = {
  onClose?: (isOpen: boolean) => void;
};
export const Modal: FC<PropsWithChildren<OnCloseType>> = ({
  children,
  onClose,
}) => {
  let navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
    const escClose = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        navigate(location.state?.background.pathname || "/");
        if (onClose) {
          onClose(false);
        }
      }
    };
    document.addEventListener("keydown", escClose);
    return () => {
      document.removeEventListener("keydown", escClose);
    };
  }, []);
  return ReactDOM.createPortal(
    <ModalOverlay onClose={onClose}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <CloseButton
          pathname={location.state?.background.pathname}
          onClose={onClose}
        />
        {children}
      </div>
    </ModalOverlay>,
    document.getElementById("modals")!,
  );
};
