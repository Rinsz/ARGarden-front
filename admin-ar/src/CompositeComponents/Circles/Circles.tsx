import styles from "./Circles.module.scss"
import {cn} from "../../classnames";

export function Circles() {
    return <div className={styles.circles_wrapper}>
        <div className={cn(styles.circle, styles.circle_1)}></div>
        <div className={cn(styles.circle, styles.circle_2)}></div>
        <div className={cn(styles.circle, styles.circle_3)}></div>
    </div>
}