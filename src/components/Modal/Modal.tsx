import React from 'react';
import './modal.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

interface ModalProps {
	onClose(): void;
}

const Modal = ({ onClose }: ModalProps) => {
	return (
		<div className='modal-overlay'>
			<div className='modal-content'>
				<Button className='close-button' onClick={onClose}>
					X
				</Button>
				<h2>Modal Título</h2>
				<div className='input-grid'>
					<Input label='Produto' value='' />
					<Input label='Preço' value='' />
					<Input label='Categoria' value='' />
					<Input label='Descrição' value='' />
					<Input label='Imagem' value='' />
				</div>
				<Button>Adicionar</Button>
			</div>
		</div>
	);
};

export default Modal;
