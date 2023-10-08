import React from 'react';
import Button from '../Button/Button';
import ModalWrapper from './ModalWrapper';
import './modalConfirmation.css';

interface ModalProps {
	isOpen(): void;
	onCancel(): void;
	onConfirm(): void;
}

function ModalConfirmation({ isOpen, onCancel, onConfirm }: ModalProps) {
	return (
		<>
			<ModalWrapper isOpen={isOpen} onClose={onCancel}>
				<div className='confirmation-dialog'>
					<p>Tem certeza de que deseja excluir este produto?</p>
					<div className='confirmation-buttons'>
						<Button
							customClassName='btnCard'
							text={'Cancelar'}
							onClick={onCancel}
						/>
						<Button customClassName='btnCard' text={'OK'} onClick={onConfirm} />
					</div>
				</div>
			</ModalWrapper>
		</>
	);
}

export default ModalConfirmation;
