import styles from './Header.module.css'
import { login, logout } from '../../services/firebase';
import Logo from "../../logo/Plant-Buddy-Logo-01.png"

function Header(props) {
    return (
        <div className={styles.headerCntr}>
            <header className={styles.header}>
                <img src={Logo} alt="Plant Buddy Logo" />
                <nav>
                    <ul>
                        {
                            props.user ?
                                <>
                                    <li>Hello {props.user.displayName}</li>
                                    <li className={styles.navLink}
                                        onClick={logout}>
                                        Logout
                                </li>
                                </> :
                                <li className={styles.navLink} onClick={login}>Login</li>
                        }
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;