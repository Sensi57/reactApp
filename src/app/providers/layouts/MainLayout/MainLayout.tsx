

const MainLayout = ({ children, isAdmin }: React.PropsWithChildren<{isAdmin?: boolean}>) => {
    return (
        <main>
            {/* <header>

            </header> */}
            
            <section>
                { children }
            </section>

        </main>
    )
}