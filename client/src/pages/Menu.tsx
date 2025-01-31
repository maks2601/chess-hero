import styles from '../styles/Menu.module.css';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div className={styles.menuContainer}>
            <Link to="/createRoom" className={styles.button}>Create</Link>
            <Link to="/joinRoom" className={styles.button}>Join</Link>
        </div>
    );
};

export default Menu;