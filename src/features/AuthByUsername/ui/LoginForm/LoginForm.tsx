import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginForm {
    className?: string;
}

export const LoginForm = ({ className }: LoginForm) => {
    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.LoginForm, {}, [className])}
        >
            <Input autofocus placeholder='Введите username' type='text' className={cls.input}/>
            <Input placeholder='Введите пароль' type='text' className={cls.input}/>
            <Button className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};
