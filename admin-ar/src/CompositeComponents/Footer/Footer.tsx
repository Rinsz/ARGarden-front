import styles from "./Footer.module.scss";
import t from "../../Typography.module.scss";
import { cn } from "../../classnames";

export function Footer() {
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.footer_blocks}>
        <Block
          heading={"ThreeXyNine++"}
          elements={[
            "Команда, которая всегда стремится к совершенству, чтобы обрадовать своих пользователей.",
          ]}
        />
        <Block heading={"Портфолио"} elements={["Сад", "Огород", "Прочее"]} />
        <Block
          heading={"Клиентам"}
          elements={["Помощь", "Контакты", "О нас"]}
        />
        <Block
          heading={"Контакты"}
          elements={["AR_Garden@gmail.com", "8-800-555-35-35"]}
        />
      </div>
      <div className={styles.footer_copyright}>
        Copyright ©️ 2023 Build. Все права защищены | ThreeXyNine++ Team
      </div>
    </div>
  );
}

interface BlockProps {
  heading: string;
  elements: string[];
}

function Block(props: BlockProps) {
  const { heading, elements } = props;

  return (
    <div className={styles.block_wrapper}>
      <div className={styles.block}>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.elements_wrapper}>
          {elements.map((text, i) => (
            <div key={i} className={styles.element}>
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
