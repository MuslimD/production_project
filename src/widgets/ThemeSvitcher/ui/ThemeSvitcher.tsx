import { useThema } from 'app/provider/themeProvider';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
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
            className={classNames('', {}, [className])}
        >
            <ThemeIcon />
        </Button>
    );
};

export default ThemeSvitcher;
