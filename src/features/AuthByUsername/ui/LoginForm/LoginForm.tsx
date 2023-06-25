import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { loginByUserName }
    from 'features/AuthByUsername/model/services/loginByUserName/loginByUserName';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynemicModuleLoader, ReducersList }
    from 'shared/lib/components/DynemicModuleLoader/DynemicModuleLoader';
import cls from './LoginForm.module.scss';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';

export interface LoginFormProps {
  className?: string;
}

const initialReducers:ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, password, username]);

    return (
        <DynemicModuleLoader removeAfterUnmount reducers={initialReducers}>

            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {error && (
                    <Text
                        text={t('Вы ввели неверный логин или пароль')}
                        theme={TextTheme.ERROR}
                    />
                )}
                <Input
                    autofocus
                    placeholder={t('Введите username')}
                    type="text"
                    className={cls.input}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    value={password}
                    onChange={onChangePassword}
                    placeholder={t('Введите пароль')}
                    type="text"
                    className={cls.input}
                />
                <Button
                    disabled={isLoading}
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynemicModuleLoader>
    );
});
export default LoginForm;
