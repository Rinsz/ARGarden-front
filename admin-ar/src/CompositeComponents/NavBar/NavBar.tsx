import styles from "../NavBar/NavBar.module.scss";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link className={styles.button} to={"#"}>
        О нас
      </Link>
      <Link className={styles.button} to={"#"}>
        Помощь
      </Link>
      <Link className={styles.button} to={"#"}>
        Контакты
      </Link>
      <a
        className={styles.buttonBlue}
        href={
          "https://drive.google.com/drive/folders/1ahmV384rb7BzFVROSsztBrXZ6VPAu-Su?usp=sharing"
        }
        target={"_blank"}
      >
        Попробовать
      </a>
    </div>
  );
}
