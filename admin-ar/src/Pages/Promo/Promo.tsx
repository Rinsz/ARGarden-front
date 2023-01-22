import styles from "./Promo.module.scss";
import t from "../../Typography.module.scss";
import { cn } from "../../classnames";
import { Separator } from "../../Components/Separator/Separator";

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
      <div className={cn(t.mainBackgroundColor, styles.see_more_button)}>
        Узнать больше
      </div>
      <Separator width={70} height={8} />
      <div className={cn(styles.what_we_offer_text, t.b128)}>
        Что мы предлагаем...
      </div>
      <div className={styles.feature_wrapper}>
        <FeatureBlock
          svgName={"design"}
          heading={"Удобный дизайн"}
          description={
            "Сотни заготовленных моделей, которые вы можете увидеть уже прямо в вашем саду. Одно движение - и результат на ваших глазах."
          }
        />
        <FeatureBlock
          svgName={"setting"}
          heading={"Гибкая настройка"}
          description={
            "Мы не ограничиваем ваши идеи. Любая модель в любой точке может меняться под ваш вкус. Куст величиною с дерево? Не проблема!"
          }
        />
        <FeatureBlock
          svgName={"performance"}
          heading={"Производительность"}
          description={
            <div>
              Думаете, что для такого приложения нужен мощный смартфон или
              профессиональная камера? Ошибаетесь.<br/>Мы поддерживаем любые
              устройства.
            </div>
          }
        />
      </div>
    </>
  );
}

interface FeatureBlockProps {
  svgName: string;
  heading: string;
  description: string | JSX.Element;
}

function FeatureBlock(props: FeatureBlockProps) {
  const { svgName, heading, description } = props;

  return (
    <div className={styles.feature}>
      <img
        src={`./Resources/WhatWeOffer/${svgName}.svg`}
        alt="АААА КАРТИНКА НЕ ЗАГРУЗИЛАСЬ ААААА"
        className={styles.feature_image}
      />
      <div className={styles.feature_heading}>{heading}</div>
      <div className={cn(styles.feature_text, t.nunito)}>{description}</div>
    </div>
  );
}
