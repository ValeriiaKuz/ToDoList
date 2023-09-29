import React, { FC } from "react";
import style from "./buttons.module.sass";
import { useNavigate } from "react-router-dom";
import { Path } from "@remix-run/router/history";
type CloseButtonProps = {
  pathname?: string | Partial<Path>;
  onClose?: (isOpen: boolean) => void;
};

const CloseButton: FC<CloseButtonProps> = ({ pathname, onClose }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    if (onClose) {
      onClose(false);
    }
    navigate(pathname || "/");
  };

  return (
    <div onClick={handleClick} className={style.close}>
      &#215;
    </div>
  );
};

export default CloseButton;
