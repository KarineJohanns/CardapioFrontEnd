import React, { ButtonHTMLAttributes } from 'react';
import './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	customClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
	children,
	customClassName,
	...rest
}) => {
	return (
		<button className={customClassName} {...rest}>
			{children}
		</button>
	);
};

export default Button;
