import './modalWrapper.css';
import React, { ReactNode } from 'react';
import Button from '../../Button/Button';

interface ModalWrapperProps {
	children: ReactNode;
	onClose: () => void;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children, onClose }) => {
	const handleModalClick = (event: React.MouseEvent) => {
		// Impede que o modal seja fechado ao clicar dentro dele
		event.stopPropagation();
	};

	return (
		<div className='modal-overlay' onClick={onClose}>
			<div className='modal-content' onClick={handleModalClick}>
				<div className='modalTitle'>
					<h2></h2>
					<Button className='close-button' onClick={onClose} text={'X'} />
				</div>
				{children}
			</div>
		</div>
	);
};

export default ModalWrapper;
