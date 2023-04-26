import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface iclasName{
className?: string
}

export default function Loader({ className }: iclasName) {
    return (
        <div className={classNames('lds-dual-ring', {}, [className])} />
    );
}
