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
      <div className={cn(styles.heading, t.b128)}>Что мы предлагаем...</div>
      <div className={cn(styles.feature_wrapper, t.b128)}>
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
              профессиональная камера? Ошибаетесь.
              <br />
              Мы поддерживаем любые устройства.
            </div>
          }
        />
      </div>
      <Separator width={68} height={8} />
      <div className={cn(styles.heading, t.b64)}>Отзывы пользоваталей</div>
      <div className={styles.feedbacks_container}>
        <Comment
          name={"Михаил Шестеров"}
          text={
            "Это приложение - просто находка. Я всегда любил приходить в свой сад после того, как отвечал в личку студентам, но мне всегда чего-то не хватало в своём саду. Сказал это приложение, и мне уже не оставалось ничего, кроме как готовиться к обновлению своего любимого места отдыха."
          }
          avatarName={"misha"}
        />
        <Comment
          name={"Дмитрий Гмыра"}
          text={
            "Сначала скачал, чтобы просто побаловаться у родителей в огороде, но затем они увидели, как я превращаю обычное серое место в нечто прекрасное, и они попросили сохранить изображение нового сада, и уже вижу, как они превращают это место в райский сад."
          }
          avatarName={"dima"}
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

interface CommentProps {
  name: string;
  text: string;
  avatarName: string;
}

function Comment(props: CommentProps) {
  const { name, text, avatarName } = props;

  return (
    <div className={styles.feedback}>
      <div className={styles.feedback_person}>
        <img className={styles.feedback_person_image} alt={avatarName} src={`./Resources/Feedback/${avatarName}.jpg`} />
        <div className={cn(t.nunito, styles.feedback_person_name)}>{name}</div>
      </div>
      <div className={styles.feedback_description}>
        <div className={cn(t.nunito, t.b16)}>{text}</div>
        <div className={styles.feedback_stars_container}>
          {[0, 1, 2, 3, 4].map((i) => (
            <img
              className={styles.feedback_star}
              key={i}
              alt={"star"}
              src={"./Resources/Feedback/star.svg"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
