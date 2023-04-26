import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface IclassName {
    className?: string
}

const NotFoundPage = ({ className }: IclassName) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>{t('Несуществующая страница')}</div>
    );
};

export default NotFoundPage;
