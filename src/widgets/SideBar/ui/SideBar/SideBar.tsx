import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSvitcher } from 'widgets/ThemeSvitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './sidebar.module.scss';

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
            <button type="button" onClick={togggle}>+</button>
            <div className={cls.switches}>
                <LangSwitcher />
                <ThemeSvitcher />
            </div>
        </div>
    );
};
