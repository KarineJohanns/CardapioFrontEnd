import React from 'react';
import './input.css';

interface InputProps {
	label: string | number;
	className?: string;
	value?: string | number;
	updateValue(value: any): void;
}

const Input: React.FC<InputProps> = ({
	label,
	className,
	value,
	updateValue,
	...rest
}) => {
	const inputClassName = `custom-input ${className || ''}`;

	return (
		<div className='input-container'>
			<label>{label}</label>
			<input
				className={inputClassName}
				value={value}
				onChange={(event) => updateValue(event.target.value)}
				{...rest}
			/>
		</div>
	);
};

export default Input;
