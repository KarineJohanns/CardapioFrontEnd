import React from 'react';
import './input.css';

interface InputProps {
	label: string;
	className?: string;
	value?: string;
}

const Input: React.FC<InputProps> = ({ label, className, value, ...rest }) => {
	const inputClassName = `custom-input ${className || ''}`;

	return (
		<div className='input-container'>
			<label>{label}</label>
			<input className={inputClassName} value={value} {...rest} />
		</div>
	);
};

export default Input;
