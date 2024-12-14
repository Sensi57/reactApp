import { useState } from 'react';

import styles from './Login.module.css'
import { useAppDispatch } from '../../../shared/hooks';
import { useNavigate } from 'react-router-dom';
import { fetchLoginAccessToken } from '../../../pages/authication/authSlice';
import { Flex } from '../../../shared/ui/Flex/ui/Flex';

export const LoginForm = () => {
    interface ICredentional {
        email: string;
        password: string;
    }

    const [credentional, setCredentional] = useState<ICredentional>({
        email: '',
        password: ''
    })

    const dispatch = useAppDispatch()
    const nav = useNavigate()

    const handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(fetchLoginAccessToken(true))
        nav('/')
    }

    const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setCredentional((prev) => ({ ...prev, [name]: value}))
    }

    return (
        <form className={styles["container"]} onSubmit={handleSubmitForm}>
            <Flex align={'center'} justify={'center'}>
                <p>Dd</p>
            </Flex>
            <h1>Login</h1>
            <input  className={styles["login-input"]}
                    name='email'
                    value = {credentional.email}
                    onChange={handleChangeEvent}
                    placeholder='Write email or phone number'/>
            <div className={styles["login-input-container"]}>
                <input  className={styles['login-contianer-input']}
                        name='password' 
                        value={credentional.password}
                        onChange={handleChangeEvent}
                        placeholder='Write password'
                        
                        />
            </div>
            <button className={styles["login-button"]}
                    type="submit"
                    >Login</button>
        </form>
    )
}