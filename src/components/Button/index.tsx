import React from "react";
import style from "./Button.module.scss";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

function Button({ type = "button", children, onClick }: Props) {
  return (
    <button type={type} className={style.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
