import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    FC, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}
const ANIMATION_DELAY = 100;

export const Modal: FC<ModalProps> = ({
    className, children, isOpen, onClose,
}) => {
    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(
                () => {
                    onClose();
                    setIsClosing(false);
                },
                ANIMATION_DELAY,
            );
        }
    }, [onClose]);

    const onKeydown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const contentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeydown);
        }
        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeydown);
        };
    }, [isOpen, onKeydown]);

    const mods :Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
        [cls[theme]]: true,
    };
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>

                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={contentClick}>{children}</div>
                </div>
            </div>
        </Portal>
    );
};
