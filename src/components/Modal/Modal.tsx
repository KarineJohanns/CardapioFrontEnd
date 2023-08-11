import React from 'react';
import './modal.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import ModalWrapper from './ModalWrapper';

interface ModalProps {
	onClose(): void;
}

const Modal = ({ onClose }: ModalProps) => {
	return (
		<ModalWrapper onClose={onClose}>
			<div className='input-grid'>
				<Input label='Produto' value='' />
				<Input label='Preço' value='' />
				<Input label='Categoria' value='' />
				<Input label='Descrição' value='' />
				<Input label='Imagem' value='' />
			</div>
			<Button>Adicionar</Button>
		</ModalWrapper>
	);
};

export default Modal;
