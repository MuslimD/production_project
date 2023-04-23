import { useThema, Theme } from 'app/provider/themeProvider';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ThemeSvitcher.module.scss';
import ThemeIcon from '../../../shared/assets/icons/theme-light-dark (2).svg';

interface ThemeSvitcherProps {
  className?: string;
}

const ThemeSvitcher: FC<ThemeSvitcherProps> = ({ className }) => {
    const { theme, handleThema } = useThema();
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={handleThema}
            className={classNames(cls.themesvitcher, {}, [className])}
        >
            <ThemeIcon />
        </Button>
    );
};

export default ThemeSvitcher;
