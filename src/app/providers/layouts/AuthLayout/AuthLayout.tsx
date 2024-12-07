import { PropsWithChildren } from "react";
import styles from './AuthLayout.module.css'

interface AuthLayoutProps {
    isAdmin?: boolean;
}

export const AuthLayout: React.FC<PropsWithChildren<AuthLayoutProps>> = ({children }) => {
    return (
        <main className={styles['wrapper']}>
            <section>
                
            </section>
            <section>

            </section>
        </main>
    )
}