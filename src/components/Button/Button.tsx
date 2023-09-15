import React, { ButtonHTMLAttributes } from 'react';
import './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	customClassName?: string;
	text: string;
	onClick: () => void;
	isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	children,
	customClassName,
	onClick,
	text,
	isLoading = false,
	...rest
}) => {
	return (
		<button className={customClassName} onClick={onClick} {...rest}>
			{isLoading ? 'Carregando...' : text}
		</button>
	);
};

export default Button;
