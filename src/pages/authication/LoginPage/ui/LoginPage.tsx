import { ChangeEvent, useState } from 'react'
import styles from './LoginPage.module.css'
import { useAppDispatch } from '../../../../shared/hooks';
import { fetchLoginAccessToken } from '../../authSlice';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../../../../widgets/authication/LoginForm/Login';

export const LoginPage = () => {

    return (
        <div className={styles["wrapper"]}>
            <LoginForm />
        </div>
    )
}