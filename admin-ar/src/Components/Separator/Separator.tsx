import styles from "./Separator.module.scss";

interface SeparatorProps {
  width?: number;
  height?: number;
  color?: string;
}

export function Separator(props: SeparatorProps) {
  const color = props.color ?? "";
  const width = props.width ? `${props.width}px` : "auto";
  const height = props.height ? `${props.height}px` : "auto";

  return (
    <div
      className={styles.separator}
      style={{
        width: width,
        height: height,
        backgroundColor: color,
      }}
    ></div>
  );
}
