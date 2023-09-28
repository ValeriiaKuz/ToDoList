import style from "../forms/form.module.sass";
import { FC } from "react";
type ProjectLogoType = {
  logo: string;
  onLogoClick?: () => void;
  wrapperSize: string;
  logoSize: string;
};
export const ProjectLogo: FC<ProjectLogoType> = ({
  logo,
  onLogoClick,
  wrapperSize,
  logoSize,
}) => {
  return (
    <div
      className={style.logoWrapper}
      onClick={onLogoClick}
      style={{ height: wrapperSize, width: wrapperSize }}
    >
      <span
        dangerouslySetInnerHTML={{ __html: logo }}
        style={{ fontSize: logoSize }}
      />
    </div>
  );
};
