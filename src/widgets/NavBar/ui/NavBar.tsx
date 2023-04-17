import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NavBar.module.scss";
import { AppLink, AppLinktheme } from "shared/ui/AppLink/AppLink";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <AppLink theme={AppLinktheme.PRIMARY}  className={cls.main} to={"/"}>Главная</AppLink>
      <AppLink theme={AppLinktheme.SECONDARY} to={"/about"}>О нас</AppLink>
    </div>
  );
};
