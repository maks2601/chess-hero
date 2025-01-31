import {Link} from "react-router-dom";
import styles from "../styles/Menu.module.css";

const HomeButton = () => {
    return (
        <Link to="/" className={styles.button + " " + styles.home}>Home</Link>
    );
};

export default HomeButton;