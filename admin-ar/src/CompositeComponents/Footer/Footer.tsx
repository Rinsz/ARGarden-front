import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <div className={styles.footer_background}>
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
            elements={[
              <a
                className={styles.contact}
                href={"mailto:contact.argarden@gmail.com"}
              >
                <img
                  className={styles.contact_image}
                  src={"./Resources/Contacts/mail.svg"}
                />
                <p className={styles.contact_text}>contact.argarden@gmail.com</p>
              </a>,
              <a className={styles.contact} href={"tel:+78005553535"}>
                <img
                  className={styles.contact_image}
                  src={"./Resources/Contacts/phone.svg"}
                />
                <p className={styles.contact_text}>8-800-555-35-35</p>
              </a>,
            ]}
          />
        </div>
        <div className={styles.footer_copyright}>
          Copyright ©️ 2023 Build. Все права защищены | ThreeXyNine++ Team
        </div>
      </div>
    </div>
  );
}

interface BlockProps {
  heading: string;
  elements: string[] | JSX.Element[];
}

function Block(props: BlockProps) {
  const { heading, elements } = props;

  return (
    <div className={styles.block_wrapper}>
      <div className={styles.block}>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.elements_wrapper}>
          {elements.map((x, i) => (
            <div key={i} className={styles.element}>
              {x}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
