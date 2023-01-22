import styles from "../NavBar/NavBar.module.scss";
import {Link} from "react-router-dom";

export function NavBar() {
    return (
        <div className={styles.navbar}>
            <Link className={styles.button} to={"#"}>О нас</Link>
            <Link className={styles.button} to={"#"}>Помощь</Link>
            <Link className={styles.button} to={"#"}>Контакты</Link>
            <Link className={styles.buttonBlue} to={"#"}>Попробовать</Link>
        </div>
    );
}