import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';

interface ILangSwitcher {
  className?: string;
}

export const LangSwitcher: FC<ILangSwitcher> = ({ className }) => {
    const { t, i18n } = useTranslation();
    function handleLanguage() {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            // eslint-disable-next-line react/jsx-no-bind
            onClick={handleLanguage}
        >
            {t('Перевод')}
        </Button>
    );
};
