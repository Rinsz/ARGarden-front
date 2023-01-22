import styles from "./Separator.module.scss";

interface SeparatorProps {
  width: number;
  height: number;
}

export function Separator(props: SeparatorProps) {
  const { width, height } = props;

  return (
    <div
      className={styles.separator}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    ></div>
  );
}
