import { ButtonHTMLAttributes } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ title, onClick }: ButtonType) => {
	return <button onClick={onClick}>{title}</button>;
};
