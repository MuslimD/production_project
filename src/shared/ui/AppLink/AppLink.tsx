import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from "./App.module.scss"

export enum AppLinktheme {
PRIMARY= "primary",
SECONDARY= "secondary"
}

interface  AppLink extends LinkProps {
className?: string,
theme?: AppLinktheme
}

export const AppLink:FC<AppLink> = ({to, children,theme = AppLinktheme.PRIMARY, className, ...otherProps}) => {
    return (
        
        <Link to={to} className={classNames(cls.applink, {}, [className, cls[theme]])} {...otherProps} >{children}</Link>
    );
};


