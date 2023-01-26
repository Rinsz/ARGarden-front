import styles from "./Separator.module.scss";

interface SeparatorProps {
  width?: number;
  height?: number;
  color?: string;
  rotatable?: boolean;
}

export function Separator(props: SeparatorProps) {
  const color = props.color ?? "";
  const width = props.width ? `${props.width}px` : "auto";
  const height = props.height ? `${props.height}px` : "auto";

  const toRotate = props.rotatable && window.screen.width <= 900;

  return (
    <div
      className={styles.separator}
      style={{
        width: toRotate ? height : width,
        height: toRotate ? width : height,
        backgroundColor: color,
      }}
    ></div>
  );
}
