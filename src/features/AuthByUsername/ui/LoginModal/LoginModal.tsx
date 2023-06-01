import { useState, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModal {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModal) => {

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}
            className={classNames(cls.LoginModal, {}, [className])}
        ><LoginForm />
        </Modal>
    );
};
