import { classNames } from 'shared/lib/classNames/classNames';
import Loader from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface IProps {
    clasName?: string,
}

export default function PageLoader({ clasName }: IProps) {
    return (
        <div className={classNames(cls.PageLoader, {}, [clasName])}>
            <Loader />
        </div>
    );
}
