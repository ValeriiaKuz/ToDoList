import style from "./form.module.sass";
import { FC, useState } from "react";
import { ProjectLogo } from "../logos/project-logo";
type LogoFormPropsType = {
  logo: string;
  setLogo: (logo: string) => void;
};
export const LogoForm: FC<LogoFormPropsType> = ({ logo, setLogo }) => {
  const [isLogoOpen, setIsLogoOpen] = useState(false);
  const onLogoClick = () => {
    setIsLogoOpen(!isLogoOpen);
  };
  const logos = [
    "&#128293;",
    "&#127773;",
    "&#127875;",
    "&#127881;",
    "&#128039;",
    "&#128064;",
    "&#128169;",
    "&#129313;",
    "&#129292;",
  ];
  return (
    <div className={style.contentWrapper}>
      <ProjectLogo
        logo={logo}
        onLogoClick={onLogoClick}
        wrapperSize={`calc(var(--index)*4)`}
        logoSize={` calc(var(--index)*2.5)`}
      />
      {isLogoOpen && (
        <div className={style.logosWrapper}>
          {logos.map((symbol, index) => (
            <span
              key={index}
              onClick={() => {
                setLogo(symbol);
                setIsLogoOpen(false);
              }}
              dangerouslySetInnerHTML={{ __html: symbol }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
