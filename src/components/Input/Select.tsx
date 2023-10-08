import React, { useState } from 'react';
import './input.css';
import { categoriaData } from '../../interface/CategoriaData';
import Select from 'react-select';

interface SelectProps {
	label: string | number;
	className?: string;
	value?: string | number;
	data: categoriaData[];
	updateValue(value: any): void;
	placeholder: string;
}

interface Option {
	value: string | number;
	label: string;
}

const SelectOption: React.FC<SelectProps> = ({
	label,
	className,
	value,
	data,
	updateValue,
	placeholder = 'Selecione a categoria',
	...rest
}) => {
	const inputClassName = `custom-input ${className || ''}`;

	const options = data
		? data.map((categoriaData) => ({
				value: categoriaData.nomeCategoria,
				label: categoriaData.nomeCategoria,
		  }))
		: [];

	options.unshift({ value: 'Nova categoria', label: 'Nova categoria' });

	return (
		<div className='input-container'>
			<label>{label}</label>
			<Select
				className={inputClassName}
				value={value ? { value, label: value.toString() } : null}
				onChange={(selectedOption) =>
					updateValue(selectedOption ? selectedOption.value : null)
				}
				{...rest}
				options={options}
				placeholder={placeholder}></Select>
		</div>
	);
};

export default SelectOption;
