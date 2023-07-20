import styles from "./Button.module.scss";
import { ReactNode } from "react";

type Props = {
  type: "button" | "submit" | "reset";
  children: ReactNode;
  className: any;
};

const Button = ({ type, children, className }: Props) => {
  return (
    <button type={type} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
