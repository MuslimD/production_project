import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./sidebar.module.scss";
import { ThemeSvitcher } from "widgets/ThemeSvitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  function togggle() {
    setCollapsed((prev) => !prev);
  }

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={togggle}>+</button>
      <div className={cls.switches}>
        <LangSwitcher />
        <ThemeSvitcher />
      </div>
    </div>
  );
};
