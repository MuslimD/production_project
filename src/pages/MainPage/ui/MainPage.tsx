import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const [value, setValue] = useState('');
    const onChange = (val: string) => {
        setValue(val);
    };
    const { t } = useTranslation();
    return (
        <div>
            <Input value={value} placeholder={t('Введите текст')} onChange={onChange} />
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
