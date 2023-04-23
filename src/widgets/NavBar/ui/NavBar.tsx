import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinktheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
    const { t, i18n } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <AppLink theme={AppLinktheme.PRIMARY} className={cls.main} to="/">{t('Главная')}</AppLink>
            <AppLink theme={AppLinktheme.SECONDARY} to="/about">{t('О нас')}</AppLink>

        </div>
    );
};
