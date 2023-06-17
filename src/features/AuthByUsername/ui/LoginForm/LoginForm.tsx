import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface ILoginForm {
    className?: string;
}

export const LoginForm = ({ className }: ILoginForm) => {
    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.LoginForm, {}, [className])}
        >
            <Input
                autofocus
                placeholder={t('Введите username')}
                type="text"
                className={cls.input}
            />
            <Input placeholder={t('Введите пароль')} type="text" className={cls.input} />
            <Button className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};
