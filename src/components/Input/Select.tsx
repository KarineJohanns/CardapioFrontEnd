import React, { useState } from 'react';
import './input.css';
import { categoriaData } from '../../interface/CategoriaData';

interface SelectProps {
	label: string | number;
	className?: string;
	value?: string | number;
	data: categoriaData[];
	updateValue(value: any): void;
}

interface Option {
	value: string | number;
	label: string;
}

const Select: React.FC<SelectProps> = ({
	label,
	className,
	value,
	data,
	updateValue,
	...rest
}) => {
	const inputClassName = `custom-input ${className || ''}`;

	return (
		<div className='input-container'>
			<label>{label}</label>
			<select
				className={inputClassName}
				onChange={(event) => updateValue(event.target.value)}
				{...rest}>
				<option></option>
				{data?.map((categoriaData) => (
					<option
						key={categoriaData.nomeCategoria}
						value={categoriaData.nomeCategoria}>
						{categoriaData.nomeCategoria}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
