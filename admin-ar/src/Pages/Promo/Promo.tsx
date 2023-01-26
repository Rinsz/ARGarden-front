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
              профессиональная камера? Ошибаетесь.
              <br />
              Мы поддерживаем любые устройства.
            </div>
          }
        />
      </div>
      <AboutApp />
      <Separator width={68} height={8} />
      <div className={cn(styles.heading, t.b64)}>Отзывы пользователей</div>
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

function AboutApp() {
  return (
    <div className={styles.aboutApp_wrapper}>
      <div className={styles.aboutApp_withImage}>
        <div className={styles.aboutApp_image_wrapper}>
          <img
            className={styles.aboutApp_image}
            src={"./Resources/PromoPage/AboutApp/example.jpg"}
            alt={"Пример"}
          />
        </div>
        <div className={styles.aboutApp}>
          <Separator width={68} height={8} />
          <div className={cn(styles.heading, t.b64)}>О приложении</div>
          <p className={cn(styles.aboutApp_description, t.nunito)}>
            Наша миссия - помочь вам воплотить все ваши идеи в реальность. Если
            вы давно хотите создать или украсить ваш сад, то наше приложение -
            это то, что вам нужно. Несколько сотен готовых моделей, гибкая
            настройка позволят вам добиться точнейшей детализации вашей идеи. От
            вас лишь требуется наличие смартфона с камерой, а остальное - за
            нами.
          </p>
        </div>
      </div>
      <div className={styles.statistic_wrapper}>
        <StatisticElement number={"100"} description={"Готовых моделей"} />
        <Separator width={2} color={"white"} rotatable={true} />
        <StatisticElement
          number={"100к"}
          description={"Довольных пользователей"}
        />
        <Separator width={2} color={"white"} rotatable={true}/>
        <StatisticElement number={"150к"} description={"Созданных садов"} />
      </div>
    </div>
  );
}

interface StatisticElementProps {
  number: string;
  description: string;
}

function StatisticElement(props: StatisticElementProps) {
  const { number, description } = props;

  return (
    <div>
      <div className={styles.statistic_number}>{number}+</div>
      <div className={styles.statistic_description}>{description}</div>
    </div>
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
        src={`./Resources/PromoPage/WhatWeOffer/${svgName}.svg`}
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
        <img
          className={styles.feedback_person_image}
          alt={avatarName}
          src={`./Resources/PromoPage/Feedback/${avatarName}.jpg`}
        />
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
              src={"./Resources/PromoPage/Feedback/star.svg"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
