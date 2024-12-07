import styles from './NotFoundPage.module.css'

export const NotFoundPage = (): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles['container']}>
                <h1 className={styles['text']}>ERROR 404</h1>
            </div>
        </div>
    )
}