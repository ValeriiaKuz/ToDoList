import React, { FC } from "react";
import style from "./close.module.sass";
import { useNavigate } from "react-router-dom";
import { Path } from "@remix-run/router/history";
type CloseButtonProps = {
  pathname?: string | Partial<Path>;
};

const CloseButton: FC<CloseButtonProps> = ({ pathname }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(pathname || "/");
  };

  return (
    <div onClick={handleClick} className={style.close}>
      &#215;
    </div>
  );
};

export default CloseButton;
