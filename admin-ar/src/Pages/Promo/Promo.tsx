import styles from "./Promo.module.scss";
import t from "../../Typography.module.scss";
import {cn} from "../../classnames";
import {Separator} from "../../Components/Separator/Separator";

export function Promo() {
  return (
    <>
      <div className={cn(styles.main_text, t.b64)}>
        Мы поможем вам создать <span className={t.mainColor}>сад</span> вашей
        мечты.
      </div>
      <div className={cn(t.nunito, styles.main_subtext)}>
        Приложение, которое поможет взглянуть на привычное под совершенно другим
        углом. Привнесите в ваше пространство что-то новое. Воплощаем все ваши
        идеи в одном приложении.
      </div>
      <div className={cn(t.mainBackgroundColor, styles.see_more_button)}>Узнать больше</div>
      <Separator width={70} height={8}/>
    </>
  );
}
