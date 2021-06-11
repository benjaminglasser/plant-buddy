import styles from './Header.module.css'
import { logout } from '../../services/firebase';
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
                                    <li style={{ fontSize: '16px' }}>Hello {props.user.displayName}</li>
                                    <li
                                        className={styles.logout}
                                        onClick={logout}>
                                        Logout
                                    </li>

                                </> :
                                <li></li>
                        }
                    </ul>
                </nav>
            </header>
        </div >
    )
}

export default Header;