import styles from '../styles/Menu.module.css';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div className={styles.container}>
            <Link to="/createRoom" className={styles.button}>Create</Link>
            <Link to="/joinRoom" className={styles.button}>Join</Link>
            <Link to="/game" className={styles.button}>Game</Link>
        </div>
    );
};

export default Menu;