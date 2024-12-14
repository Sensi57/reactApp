import { PropsWithChildren } from "react";
import styles from './AuthLayout.module.css'
import { Outlet } from "react-router-dom";

interface AuthLayoutProps {
    isAdmin?: boolean;
}

export const AuthLayout: React.FC<PropsWithChildren<AuthLayoutProps>> = ({children }) => {
    return (
        <main className={styles['wrapper']}>
            <section>
                <h1>Auth Page</h1>
            </section>
            <section>
                <Outlet />
            </section>
        </main>
    )
}