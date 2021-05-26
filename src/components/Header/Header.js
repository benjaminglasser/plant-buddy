import styles from './Header.module.css'
import { login, logout } from '../../services/firebase';

function Header(props) {
    return (
        <header className={styles.header}>
            <h1>Plant Buddy</h1>
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
    )
}

export default Header;