import { NavLink, useNavigate } from "react-router-dom"
import { ROUTES } from "../../app/providers/router/constants/routes"
import { memo } from "react"
import styles from './Header.module.css'
import { Flex } from "../../shared/ui/Flex/ui/Flex"

export const Header = () => {
    const nav = useNavigate()

    const navItems = [
        {id: 1, label: "Market", path: ROUTES.app.route},
        {id: 2, label: "Investment", path: ROUTES.app.route},
        {id: 3, label: "Profile", path: ROUTES.app.route},
    ]

    return(
        <nav className={styles['wrapper']}> 
            <div>
                <NavLink className={styles['wrapper-logo']} to={ROUTES.app.route}>Logo</NavLink>
            </div>
            <div>
                <Flex align="center" >
                    { navItems.map(item => (
                        <NavLink className={styles['wrapper-logo']} key={item.id} to={item.path}>
                            {item.label}
                        </NavLink>
                    ))}
                </Flex>
            </div>
        </nav>
    )
}

const memoNavbar = memo(Header)
export default memoNavbar