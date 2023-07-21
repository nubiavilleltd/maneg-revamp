import styles from "./Button.module.scss";
import { ReactNode } from "react";

type Props = {
  type: "button" | "submit" | "reset";
  children: ReactNode;
  className: any;
  onClick?: () => void;
};

const Button = ({ type, children, className, onClick }: Props) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
