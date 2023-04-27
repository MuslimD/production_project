import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

const reload = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
};

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <button type="button" onClick={reload}>{t('Обновить страницу')}</button>
        </div>
    );
};
